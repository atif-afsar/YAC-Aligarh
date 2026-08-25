# YAC AI Admissions Automation — System Architecture

## 1. Architecture Overview

The YAC platform uses a **centralized AI architecture**:

**One AI Agent + One Knowledge Base + Multiple Communication Channels**

Channels:
- Existing Website
- Instagram
- WhatsApp

All channels connect to the same backend, AI agent, knowledge base, CRM, automation engine, and admin panel.

```text
                         ┌──────────────────────────┐
                         │       YAC ADMIN PANEL    │
                         │                          │
                         │ Courses • Fees • FAQs    │
                         │ Faculty • Batches        │
                         │ AI Knowledge • Rules     │
                         │ Leads • Conversations    │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │      CENTRAL BACKEND     │
                         │      Node.js / Express   │
                         │                          │
                         │ Auth • Webhooks • APIs   │
                         │ Events • CRM • Automation │
                         └────────────┬─────────────┘
                                      │
                         ┌────────────┴────────────┐
                         ▼                         ▼
              ┌──────────────────┐      ┌──────────────────┐
              │    AI AGENT      │      │   AUTOMATION      │
              │                  │      │     ENGINE        │
              │ LLM + RAG        │      │ Rules + Jobs      │
              │ Memory + Tools   │      │ Alerts + Followup │
              └────────┬─────────┘      └────────┬─────────┘
                       │                         │
                       ▼                         ▼
              ┌────────────────────────────────────────┐
              │             DATA LAYER                 │
              │ MongoDB + Vector Search + Redis/Queue  │
              └────────────────────┬───────────────────┘
                                   │
                    ┌──────────────┼──────────────┐
                    ▼              ▼              ▼
               WEBSITE        INSTAGRAM       WHATSAPP
                    │              │              │
                    └──────────────┼──────────────┘
                                   ▼
                              YAC LEADS
```

---

## 2. Main Components

### 2.1 Existing Website

The current YAC website remains the public-facing application.

It communicates with the new backend for:
- AI chat
- Authentication
- User activity tracking
- Course information
- Enquiries
- Checkout events
- Counselling requests

No complete website rebuild is required.

---

### 2.2 Instagram Integration

The client's Instagram Professional account is connected through Meta's official APIs.

Flow:

```text
Student
   ↓
Instagram DM
   ↓
Meta Instagram API
   ↓
Webhook
   ↓
YAC Backend
   ↓
Conversation Service
   ↓
AI Agent
   ↓
Knowledge Base / Tools
   ↓
Response
   ↓
Instagram API
   ↓
Student
```

Backend endpoint:

```text
POST /webhooks/instagram
```

Responsibilities:
- Receive verified webhook events.
- Identify Instagram account/user.
- Create or retrieve conversation.
- Send message to AI orchestration layer.
- Persist incoming/outgoing messages.
- Send response through Meta.
- Handle errors and retries.

The Instagram account should be an eligible Professional account and must have the required Meta permissions/configuration.

---

### 2.3 WhatsApp Integration

The client's WhatsApp Business account is connected through the official Meta WhatsApp Business Platform/Cloud API.

Flow:

```text
Student
   ↓
WhatsApp
   ↓
Meta WhatsApp Business Platform
   ↓
Webhook
   ↓
YAC Backend
   ↓
Conversation Service
   ↓
AI Agent
   ↓
Knowledge Base / Tools
   ↓
Response
   ↓
WhatsApp API
   ↓
Student
```

Backend endpoint:

```text
POST /webhooks/whatsapp
```

Responsibilities:
- Verify webhook.
- Receive messages/events.
- Identify phone/user.
- Retrieve conversation context.
- Send message to AI.
- Persist messages.
- Send AI response through WhatsApp API.
- Track delivery/failure status.
- Respect Meta messaging policies and applicable messaging windows/templates.

---

## 3. Central AI Agent

The AI Agent is the single intelligence layer used by all channels.

```text
Website ───────┐
Instagram ─────┼──→ AI Orchestrator
WhatsApp ──────┘          │
                          ├── Conversation Memory
                          ├── RAG Retrieval
                          ├── Business Tools
                          ├── Lead Management
                          ├── Human Handoff
                          └── Response Generation
```

The agent should never be duplicated per channel.

### Responsibilities

- Understand user intent.
- Retrieve YAC-approved information.
- Maintain conversation context.
- Use business tools.
- Collect lead information.
- Qualify leads.
- Create/update CRM records.
- Trigger approved automations.
- Escalate to humans.
- Avoid hallucinating unavailable information.

---

## 4. Knowledge Architecture

The knowledge layer has two types of data.

### Structured Knowledge

Examples:
- Courses
- Fees
- Batches
- Faculty
- Centers
- Eligibility
- Admission process
- Offers
- FAQs

Flow:

```text
Admin Form
   ↓
MongoDB
   ↓
Publish
   ↓
Embedding / Index Update
   ↓
Vector Search
   ↓
AI Agent
```

### Unstructured Knowledge

Examples:
- PDF brochures
- Admission documents
- Course catalogues
- Policies
- Notices
- DOCX files

Flow:

```text
Admin Upload
   ↓
Document Parser
   ↓
Text Extraction
   ↓
Chunking
   ↓
Embeddings
   ↓
Vector Database
   ↓
AI Retrieval
```

Only published/approved information should be available to customer-facing AI.

---

## 5. RAG Architecture

When a student asks a question:

```text
Student Question
      ↓
Intent Detection
      ↓
Conversation Context
      ↓
Knowledge Retrieval
      ↓
Relevant Documents / Records
      ↓
Optional Business Tool
      ↓
LLM
      ↓
Validated Response
      ↓
Channel Adapter
      ↓
Student
```

Example:

```text
Student:
"CUET 2027 ki fees kya hai?"

        ↓

RAG Search

        ↓

Course: CUET 2027
Fee: ₹18,000
Mode: Online + Offline

        ↓

AI

        ↓

Response to student
```

The AI should not invent a fee if no current approved fee exists.

---

## 6. Business Tool Layer

The AI Agent can call controlled backend functions.

Suggested tools:

```text
getCourseDetails()
getFeeDetails()
getBatchDetails()
getFacultyDetails()
getCenterDetails()
getAdmissionDetails()

createLead()
updateLead()
getLead()
calculateLeadScore()

requestCounselling()
requestHumanAgent()
```

Tools should return trusted application data rather than allowing the LLM to invent business facts.

---

## 7. Conversation Architecture

Every incoming message should create or continue a conversation.

Suggested structure:

```text
Channel
   ↓
Channel User
   ↓
Conversation
   ↓
Messages
   ↓
Lead
```

Example:

```text
Lead: Rahul Sharma

Conversation 1
Source: Instagram
Topic: CA Foundation

Conversation 2
Source: WhatsApp
Topic: Batch timing

Website Activity
- Course viewed
- Checkout started
```

Where a reliable identity match exists, conversations and activity should be associated with the same lead.

---

## 8. CRM Architecture

The CRM is shared across all channels.

```text
                    ┌─────────────┐
                    │     LEAD    │
                    └──────┬──────┘
                           │
       ┌───────────────────┼──────────────────┐
       ▼                   ▼                  ▼
 Instagram             WhatsApp           Website
 Conversation          Conversation       Activity
       │                   │                  │
       └───────────────────┼──────────────────┘
                           ▼
                     Lead Timeline
```

Lead fields:

```text
name
phone
email
courseInterest
educationLevel
location
preferredMode
source
leadScore
leadStatus
assignedStaff
createdAt
updatedAt
```

---

## 9. Website Activity Architecture

Only meaningful business events should be tracked.

```text
User
 ↓
Website
 ↓
Event Tracker
 ↓
Backend
 ↓
Event Store
 ↓
Automation Engine
```

Recommended events:

```text
user_registered
user_logged_in
course_viewed
course_enquiry
cta_clicked
checkout_started
payment_failed
checkout_abandoned
payment_completed
counselling_requested
```

Do not generate an admin WhatsApp message for every raw scroll percentage.

---

## 10. Automation Engine

The automation engine evaluates events against admin-configured rules.

```text
Event
  ↓
Rule Engine
  ↓
Conditions
  ↓
Action
```

Example:

```text
checkout_started
       ↓
Is lead known?
       ↓
Yes
       ↓
Is course high intent?
       ↓
Yes
       ↓
Notify Admin on WhatsApp
       ↓
Create CRM activity
```

Possible actions:
- Create lead
- Update lead
- Increase lead score
- Send admin WhatsApp alert
- Schedule follow-up
- Request human handoff
- Assign staff
- Create counselling task

---

## 11. Admin WhatsApp Alert Architecture

This is different from replying to students.

### Student-facing message

```text
Student → WhatsApp → AI → Student
```

### Admin notification

```text
Student Activity
      ↓
Automation Engine
      ↓
Rule matched
      ↓
WhatsApp Notification Service
      ↓
YAC Admin WhatsApp
```

Example:

```text
🔔 High Intent Lead

Name: Rahul Sharma
Course: CA Foundation
Event: Checkout Started
Source: Website
Phone: +91 XXXXX XXXXX
Lead Score: 86
```

Alerts must be configurable and rate-limited.

---

## 12. Human Handoff

AI should be able to transfer conversations to staff.

```text
AI Conversation
      ↓
Handoff Condition
      ↓
AI pauses / takeover mode
      ↓
CRM marks conversation:
"HUMAN ACTIVE"
      ↓
Staff responds
```

Handoff triggers:
- User requests human.
- Payment issue.
- Refund/complaint.
- Sensitive case.
- AI lacks required information.
- Exceptional admission decision.
- High-value lead.

---

## 13. Unified Admin Inbox

Admin sees all supported channels in one interface.

```text
┌─────────────────────────────────────────────┐
│ YAC UNIFIED INBOX                          │
├──────────────┬──────────────────────────────┤
│ Rahul        │ Instagram                    │
│ Ayesha       │ WhatsApp                     │
│ Sameer       │ Website                      │
│ Neha         │                              │
├──────────────┴──────────────────────────────┤
│ Conversation                                │
│                                             │
│ Student: CUET ki fees?                     │
│ AI: CUET 2027 fee is...                    │
│                                             │
│ [Take Over] [Return to AI]                 │
└─────────────────────────────────────────────┘
```

---

## 14. Authentication & Channel Connection

The admin should not provide Instagram or WhatsApp passwords to the developer.

Use official Meta authorization/business configuration.

Admin flow:

```text
Admin Panel
   ↓
Connect Instagram
   ↓
Meta Authorization
   ↓
Select Business / Account
   ↓
Grant Permissions
   ↓
OAuth Callback
   ↓
Backend stores secure connection data
   ↓
Webhook configured
   ↓
Connected
```

WhatsApp follows a similar business onboarding process, with the required WhatsApp Business Account, phone number, permissions, and API configuration.

---

## 15. Suggested Backend Architecture

```text
backend/
│
├── src/
│   ├── controllers/
│   │   ├── chat.controller.js
│   │   ├── instagram.controller.js
│   │   ├── whatsapp.controller.js
│   │   ├── lead.controller.js
│   │   └── activity.controller.js
│   │
│   ├── routes/
│   │   ├── chat.routes.js
│   │   ├── instagram.routes.js
│   │   ├── whatsapp.routes.js
│   │   ├── lead.routes.js
│   │   └── activity.routes.js
│   │
│   ├── agents/
│   │   ├── admissionsAgent.js
│   │   ├── tools.js
│   │   ├── prompts.js
│   │   └── guardrails.js
│   │
│   ├── services/
│   │   ├── ai.service.js
│   │   ├── rag.service.js
│   │   ├── instagram.service.js
│   │   ├── whatsapp.service.js
│   │   ├── conversation.service.js
│   │   ├── lead.service.js
│   │   ├── activity.service.js
│   │   └── notification.service.js
│   │
│   ├── automation/
│   │   ├── ruleEngine.js
│   │   ├── eventProcessor.js
│   │   └── scheduler.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Lead.js
│   │   ├── Conversation.js
│   │   ├── Message.js
│   │   ├── Course.js
│   │   ├── KnowledgeDocument.js
│   │   ├── ActivityEvent.js
│   │   ├── AutomationRule.js
│   │   └── ChannelConnection.js
│   │
│   └── server.js
```

---

## 16. Data Flow — Complete Example

### Scenario: Student asks on Instagram and later starts checkout

```text
1. Student sends Instagram DM
        ↓
2. Meta sends webhook
        ↓
3. Backend receives message
        ↓
4. Conversation identified
        ↓
5. AI retrieves YAC course information
        ↓
6. AI replies
        ↓
7. Student gives phone number
        ↓
8. CRM lead created
        ↓
9. Student visits website
        ↓
10. User is identified
        ↓
11. Student views course
        ↓
12. Student starts checkout
        ↓
13. Activity event stored
        ↓
14. Lead score increases
        ↓
15. Automation rule matches
        ↓
16. Admin receives WhatsApp alert
        ↓
17. Staff opens unified inbox
        ↓
18. Staff takes over if required
```

---

## 17. Technology Stack

### Frontend
- Existing React website
- React/Tailwind admin panel

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- MongoDB Atlas Vector Search

### AI
- LLM API
- Embeddings
- RAG
- Tool/function calling
- Conversation memory

### Messaging
- Meta WhatsApp Business Platform/Cloud API
- Meta Instagram APIs

### Background Processing
- Redis
- BullMQ or equivalent queue system

### Monitoring
- Application logs
- Error tracking
- API/webhook monitoring

---

## 18. Security Requirements

- Never store social passwords.
- Encrypt sensitive channel tokens/secrets.
- Verify Meta webhooks.
- Keep Meta tokens server-side.
- Apply RBAC to admin functions.
- Validate all webhook/API payloads.
- Rate-limit public endpoints.
- Use idempotency for webhook processing.
- Log administrative changes.
- Protect student/lead information.
- Implement secure backup and recovery.

---

## 19. Critical Design Principle

The architecture must **not** be:

```text
Website AI
Instagram AI
WhatsApp AI
```

as three separate systems.

It must be:

```text
             ┌───────────────┐
             │   CENTRAL AI  │
             │     AGENT     │
             └───────┬───────┘
                     │
       ┌─────────────┼─────────────┐
       ↓             ↓             ↓
    Website       Instagram     WhatsApp
```

This guarantees:
- Consistent answers.
- Shared knowledge.
- Shared lead profiles.
- Shared conversation logic.
- Easier maintenance.
- Easier scaling.
- Centralized analytics.

## 20. Final Architecture Principle

**YAC's website, Instagram, and WhatsApp are communication channels. The backend, AI agent, knowledge base, CRM, and automation engine are the central platform behind them.**

The client manages the business knowledge and automation rules from the admin panel; the AI uses that approved information to communicate across all connected channels.
