# YAC AI Admissions & Multi-Channel Automation Platform — General PRD

## 1. Product Overview
Build an AI-powered admissions, lead-management, and communication automation platform on top of the existing YAC website.

The existing website remains the public frontend. The new system adds:
- Website AI Assistant
- Central AI knowledge base / RAG
- Admin-controlled AI knowledge management
- WhatsApp automation
- Instagram DM automation
- Unified conversation management
- Lead CRM
- Website user-activity tracking
- Checkout and abandoned-checkout alerts
- AI lead qualification
- Human handoff
- Follow-up automation
- Analytics

The central principle is: **one AI brain, multiple channels**.

## 2. Goals
1. Answer student/prospect questions accurately using YAC-approved information.
2. Allow admins to update AI knowledge without developer involvement.
3. Automatically respond through website, WhatsApp, and Instagram.
4. Capture and qualify leads automatically.
5. Detect meaningful website activities such as course views and checkout events.
6. Notify the YAC team about important activities through WhatsApp.
7. Provide a unified admin inbox and CRM.
8. Escalate sensitive/complex conversations to humans.
9. Prevent the AI from inventing fees, dates, courses, policies, or other business facts.

## 3. Non-Goals
- Rebuilding the existing public website from scratch.
- Unofficial WhatsApp Web or Instagram browser automation.
- Sending a WhatsApp message for every raw scroll event.
- Allowing AI to invent unavailable business information.
- Replacing human staff for sensitive admission, payment, complaint, or exceptional cases.

## 4. High-Level Architecture

User Channels
- Existing Website
- WhatsApp Business Platform
- Instagram Professional Account

        ↓

Backend/API
- Authentication
- Webhooks
- Event tracking
- Conversation orchestration
- AI agent
- RAG/retrieval
- Business tools
- CRM
- Notifications

        ↓

Data Layer
- MongoDB
- Vector search
- Conversation/message storage
- Lead/activity/event storage
- Knowledge documents
- Audit/version history

        ↓

Admin Panel
- Dashboard
- Unified Inbox
- Leads
- Courses
- Fees/Batches
- Faculty/Centers
- FAQs
- AI Knowledge
- AI settings
- Automation rules
- Analytics
- Human handoff

## 5. Core AI Capabilities
The AI agent should:
- Understand natural-language student questions.
- Retrieve approved YAC information.
- Maintain conversation context.
- Use tools/functions for structured business information.
- Qualify leads.
- Collect required lead details.
- Recommend relevant courses where appropriate.
- Create/update leads.
- Trigger approved automations.
- Escalate to a human when required.
- Refuse to guess when reliable information is unavailable.

## 6. Knowledge Management
Admins can manage:
- Courses
- Course descriptions
- Fees
- Eligibility
- Duration
- Batch timings
- Mode
- Centers
- Faculty
- Admission process
- Offers
- FAQs
- Policies
- Notices
- Documents/PDFs/DOCX
- AI-specific instructions

Knowledge should support:
- Draft
- Preview
- Publish
- Unpublish
- Version history
- Updated timestamp
- Source tracking

Only published/approved knowledge should be used for customer-facing answers.

## 7. AI Knowledge Ingestion
Structured data:
Admin form → database → embedding/index update → available to AI.

Documents:
Upload → extract text → chunk → embed → vector index → available to AI.

The system should support re-indexing when published information changes.

## 8. Channels

### Website
Existing AI widget connects to the central AI backend.

### WhatsApp
Use official Meta WhatsApp Business Platform/Cloud API and webhooks.

### Instagram
Use official Meta Instagram APIs for eligible Professional accounts and supported messaging workflows.

All channels use the same AI knowledge, tools, lead system, and conversation rules.

## 9. Lead CRM
Lead fields may include:
- Name
- Phone
- Email
- Course interest
- Class/education level
- Location
- Preferred mode
- Source channel
- Lead score
- Status
- Last activity
- Assigned staff member
- Conversation history
- Notes

Statuses:
- New
- Contacted
- Qualified
- Hot
- Warm
- Cold
- Counselling Scheduled
- Converted
- Lost

## 10. Website Activity Tracking
Track meaningful events, not every scroll event.

Suggested events:
- user_registered
- user_logged_in
- course_viewed
- course_enquiry
- CTA_clicked
- checkout_started
- payment_failed
- checkout_abandoned
- payment_completed
- counselling_requested

Events should be stored against an authenticated user/lead where possible.

## 11. WhatsApp Admin Alerts
Admins can configure rules such as:
- Checkout started
- Payment failed
- Checkout abandoned
- High-value/high-intent lead
- Counselling requested
- AI escalation
- New qualified lead

Example alert:
Student: Rahul Sharma
Course: CA Foundation
Event: Checkout Started
Time: 3:42 PM
Phone: +91 XXXXX XXXXX

Alerts should be configurable and rate-limited to avoid spam.

## 12. AI Lead Qualification
The AI may score leads using signals such as:
- Course intent
- Admission intent
- Checkout activity
- Requested counselling
- Repeated engagement
- Contact information provided

Example:
Hot = immediate human follow-up
Warm = follow-up queue
Cold = normal nurture

Scoring rules should be configurable.

## 13. Human Handoff
Trigger human handoff for:
- Explicit request for human support
- Payment/refund issues
- Complaints
- Sensitive cases
- Unclear or unsupported questions
- Exceptional admission decisions

During handoff, AI should stop or follow the configured takeover mode.

## 14. Admin Panel
Required modules:
1. Dashboard
2. Unified Inbox
3. Leads
4. Conversations
5. Courses
6. Fees & Batches
7. Faculty
8. Centers
9. FAQs
10. AI Knowledge
11. Document Uploads
12. AI Settings
13. Automation Rules
14. Human Handoff
15. Analytics
16. Audit Logs

## 15. Security
- Admin authentication and role-based access.
- Secure API secrets.
- Webhook verification.
- Meta token protection.
- Input validation.
- Rate limiting.
- Audit logs.
- Secure storage of user data.
- Do not expose private lead information to unauthorized users.

## 16. Suggested Technology
Frontend:
- Existing React website
- React/Tailwind admin panel

Backend:
- Node.js
- Express.js

Database:
- MongoDB
- MongoDB Atlas Vector Search where suitable

AI:
- LLM API
- RAG
- Embeddings
- Tool/function calling

Infrastructure:
- Existing website hosting can remain.
- Separate backend deployment if needed.
- Queue/background worker for follow-ups and asynchronous jobs.

Integrations:
- Meta WhatsApp Business Platform
- Meta Instagram APIs
- Payment provider/webhooks if applicable

## 17. Success Criteria
The platform is successful when:
- Admin can add a new course and publish it without developer involvement.
- AI correctly answers using the new course information.
- Website, WhatsApp, and Instagram use the same knowledge.
- Qualified conversations create CRM leads.
- Important checkout events can trigger admin WhatsApp alerts.
- Humans can take over conversations.
- AI does not fabricate unsupported information.
- Admin can view conversations, leads, events, and analytics.

## 18. Key Product Principle
**Centralized knowledge + centralized AI + multiple communication channels + automated lead operations.**
