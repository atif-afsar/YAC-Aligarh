# YAC AI Automation — Memory System Specification

## 1. Purpose

The memory system allows the YAC AI Agent to maintain useful context across conversations and channels while avoiding unnecessary or unsafe retention of personal information.

The system should support:

- Short-term conversation memory
- Long-term customer/lead memory
- Cross-channel memory where identity can be reliably matched
- Lead and course context
- Website activity context
- Conversation summaries
- Admin-controlled memory
- Memory deletion/retention rules
- Privacy and access controls

The key principle is:

> **Remember useful business context, not everything.**

---

# 2. Memory Architecture

```text
                  USER
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
     Website     Instagram   WhatsApp
        │           │           │
        └───────────┼───────────┘
                    ↓
             Identity Layer
                    ↓
             Conversation ID
                    ↓
            Memory Orchestrator
                    │
        ┌───────────┼────────────┐
        ↓           ↓            ↓
 Short-Term     Long-Term     Activity
   Memory         Memory       Memory
        │           │            │
        └───────────┼────────────┘
                    ↓
                  AI Agent
                    ↓
              Response / Tool
```

---

# 3. Types of Memory

## 3.1 Short-Term Conversation Memory

Stores the active conversation context.

Examples:

```text
Current course
Current question
Recent messages
User's current intent
Information already provided
Current handoff state
```

Example:

```text
Student:
"I want CA coaching."

AI:
"Sure. Are you looking for CA Foundation?"

Student:
"Yes."

AI:
"CA Foundation..."
```

The AI should understand that "yes" refers to CA Foundation.

---

# 4. Long-Term Lead Memory

Stores useful information that can improve future conversations.

Example:

```text
Lead
──────────────
Name: Rahul Sharma
Phone: +91 XXXXX XXXXX
Course: CA Foundation
Class: 12
Location: Aligarh
Mode: Offline
Source: Instagram
Status: Warm
Lead Score: 68
Counselling: Requested
```

Long-term memory should contain business-relevant information, not a full permanent transcript by default.

---

# 5. Conversation Memory

Each conversation should have:

```text
conversationId
channel
channelUserId
leadId
status
summary
lastMessageAt
humanHandoffStatus
createdAt
updatedAt
```

Example:

```text
conversationId: conv_123
channel: instagram
channelUserId: ig_456
leadId: lead_789
status: AI_ACTIVE
summary: "Student interested in CA Foundation and asked about fees."
```

---

# 6. Message Memory

Messages should be stored separately from the lead profile.

Example:

```text
Message
──────────────
messageId
conversationId
senderType
content
channel
timestamp
metadata
```

Sender types:

```text
USER
AI
HUMAN
SYSTEM
```

This allows complete conversation history without putting every message into long-term memory.

---

# 7. Conversation Summarization

Long conversations should periodically be summarized.

Example:

```text
Conversation Summary:

Student is a Class 12 student from Aligarh.
Interested in CA Foundation offline coaching.
Asked about fees and batch timings.
Provided phone number.
Requested counselling.
Checkout has not started.
```

The summary becomes the compact context for future AI requests.

---

# 8. Memory Update Flow

```text
Incoming Message
      ↓
Load Conversation
      ↓
Load Relevant Lead Memory
      ↓
Load Recent Messages
      ↓
Load Knowledge/RAG Context
      ↓
AI Agent
      ↓
Generate Response
      ↓
Detect Important New Facts
      ↓
Update Memory
      ↓
Store Message
```

---

# 9. What the AI Should Remember

The AI may remember useful information such as:

### Identity
- Name
- Phone
- Email
- Authenticated user ID
- Reliable platform identifier

### Education
- Class
- Academic level
- Relevant exam/course

### Interest
- Course
- Batch
- Mode
- Center
- Counselling requirement

### Lead information
- Lead status
- Lead score
- Source
- Assigned counsellor

### Conversation context
- Current question
- Previous unresolved question
- Current handoff state

### Business activity
- Course viewed
- Enquiry made
- Checkout started
- Payment failed
- Payment completed
- Counselling requested

Only information useful to the product should be retained.

---

# 10. What the AI Should NOT Automatically Remember

Do not automatically create permanent memory from:

- Casual conversation
- Temporary statements
- Jokes
- Unrelated personal details
- Sensitive information that is not needed
- Speculation
- Unverified information
- Private information unrelated to admission/support

The system should follow data-minimization principles.

---

# 11. Cross-Channel Memory

The system may connect conversations across channels only when identity matching is sufficiently reliable.

Example:

```text
Instagram
   ↓
Student provides phone number
   ↓
Phone matches existing lead
   ↓
Link Instagram identity
   ↓
Lead profile updated
```

Then:

```text
Instagram Conversation
        +
WhatsApp Conversation
        +
Website Activity
        ↓
Same Lead Profile
```

Do not merge two people merely because their names are similar.

---

# 12. Identity Resolution

Recommended matching priority:

```text
Authenticated User ID
        ↓
Verified Phone Number
        ↓
Verified Email
        ↓
Trusted Platform Identifier
        ↓
No match
```

Name alone should not normally be sufficient for automatic identity merging.

If identity is uncertain:

```text
Keep separate profiles
```

until a reliable identifier becomes available.

---

# 13. Website Memory

Authenticated website users can have an activity timeline.

Example:

```text
User: Rahul

Timeline
────────────────────────
10:05 AM  Logged in
10:08 AM  Viewed CA Foundation
10:12 AM  Viewed Fees
10:16 AM  Started Checkout
10:18 AM  Payment Failed
```

This information can be used for lead scoring and automation.

---

# 14. Memory + AI Response

Before responding, the AI should receive only relevant context.

Example:

```text
User Question:
"How much is it?"

Relevant Memory:
Course = CA Foundation

Knowledge:
CA Foundation fee = ₹XX,XXX

AI:
"CA Foundation ki current fee ₹XX,XXX hai..."
```

Do not send the entire historical customer record to the LLM unnecessarily.

---

# 15. Memory Retrieval Strategy

Use layered retrieval:

```text
1. Current user message
2. Recent conversation messages
3. Conversation summary
4. Relevant lead fields
5. Relevant activity
6. Knowledge Base / RAG
7. Business tools
```

The system should avoid loading irrelevant memory.

---

# 16. Memory Priority

When information conflicts:

```text
Current verified user information
        ↓
Current published YAC business data
        ↓
Recent conversation context
        ↓
Stored lead memory
        ↓
Old conversation summary
```

For business facts such as fees, courses, timings, and policies:

**Published YAC data is the source of truth.**

---

# 17. Memory Update Rules

A memory item should be updated when:

- User explicitly provides new information.
- Admin changes the associated lead data.
- A verified transaction changes the state.
- A reliable platform event provides new information.
- A counsellor updates the lead.

Example:

```text
Old:
Interested Course = CUET

New user message:
"I've decided to join CA Foundation."

Update:
Interested Course = CA Foundation
```

---

# 18. Memory Confidence

Memory items may have confidence levels.

```text
VERIFIED
HIGH
MEDIUM
LOW
```

Example:

```text
Phone number → VERIFIED
Course interest → HIGH
Location inferred from conversation → MEDIUM
Preferred batch → LOW
```

Low-confidence information should not be treated as confirmed facts.

---

# 19. User Corrections

If a user corrects stored information:

```text
Stored:
Class = 11

User:
"I'm actually in Class 12."

Action:
Update Class = 12
```

The latest reliable user-provided value should replace the old value.

---

# 20. Admin Memory Controls

Admin should be able to:

- View lead memory
- Edit lead fields
- Add notes
- Remove incorrect information
- Clear conversation memory
- Delete conversation
- Delete lead data where permitted
- Export data where required

Example:

```text
Lead Profile

Name
Phone
Course
Class
Location
Mode
Score
Status
Notes

[Edit] [Clear Memory] [Delete]
```

---

# 21. Human Handoff and Memory

When a conversation enters human mode:

```text
AI_ACTIVE
   ↓
HUMAN_REQUESTED
   ↓
HUMAN_ACTIVE
```

The AI should preserve the conversation and lead context for the human counsellor.

Example:

```text
AI Summary:

Student: Rahul
Course: CA Foundation
Asked about fees.
Interested in offline batch.
Checkout started.
Payment failed.
Student requested human assistance.
```

This saves the counsellor from asking the same questions again.

---

# 22. Returning to AI

When human support ends:

```text
HUMAN_ACTIVE
      ↓
HUMAN_COMPLETED
      ↓
AI_RESUMED
```

The system should store a short human interaction summary where appropriate.

Example:

```text
Counsellor confirmed:
- Student wants CA Foundation
- Counselling completed
- Follow-up required tomorrow
```

The AI can use this context for future assistance.

---

# 23. Memory and Follow-ups

Memory should prevent repetitive follow-ups.

Example:

```text
Lead:
Counselling completed = true

Automation:
Counselling reminder?

→ DO NOT SEND
```

Similarly:

```text
Payment completed = true

Automation:
Checkout abandoned reminder?

→ STOP
```

---

# 24. Memory and Lead Scoring

Memory and activity can feed the lead scoring engine.

Example:

```text
Course enquiry       +10
Fee enquiry          +15
Phone provided       +20
Counselling request  +25
Checkout started     +30
Payment completed    CONVERTED
```

The score should be recalculated when meaningful events occur.

---

# 25. Memory Retention

Different data should have different retention periods according to business/legal requirements.

Suggested categories:

```text
Active conversation
→ Retain while conversation is active/recent.

Lead profile
→ Retain according to YAC's approved CRM retention policy.

Analytics events
→ Retain according to analytics policy.

Temporary AI context
→ Short retention.

Deleted user data
→ Remove from applicable memory stores and indexes.
```

Exact retention periods must be decided by the business and applicable privacy requirements.

---

# 26. Memory Deletion

Deleting a lead should trigger the appropriate cleanup process.

```text
Delete Lead
   ↓
Lead database record
   ↓
Conversation association
   ↓
Memory records
   ↓
Vectorized personal content where applicable
   ↓
Cached copies
```

Backups may have separate retention/deletion handling.

---

# 27. Vector Memory

The vector database should primarily store knowledge and retrieval-ready content.

Do not automatically vectorize every private user message.

Recommended:

```text
YAC Business Knowledge
→ Vector Search

Customer Conversation
→ Conversation Database

Lead Facts
→ Lead Database
```

Only approved use cases should put user-derived information into vector storage.

---

# 28. Memory Security

Memory must follow:

- Server-side access only
- Role-based permissions
- Encryption where appropriate
- Secure database credentials
- Audit logs
- Access logging
- No secrets in prompts
- No tokens in conversation memory
- No unnecessary exposure to LLM providers

Never store:

```text
API keys
Meta access tokens
Passwords
Admin credentials
Payment secrets
```

inside AI memory.

---

# 29. Prompt Construction

The backend should dynamically construct the AI context.

Example:

```text
SYSTEM RULES
+
AI INSTRUCTIONS
+
RELEVANT KNOWLEDGE
+
RELEVANT LEAD MEMORY
+
CONVERSATION SUMMARY
+
RECENT MESSAGES
+
USER MESSAGE
```

Do not send the complete database or complete CRM record to the model.

---

# 30. Memory Example — Complete Flow

## Initial Instagram Conversation

Student:

> "CUET ki fees kya hai?"

AI retrieves:

```text
Course = CUET
Fee = ₹18,000
```

AI responds.

Student:

> "I'm in class 12 and from Aligarh."

Memory update:

```text
Class = 12
Location = Aligarh
Course Interest = CUET
```

Student:

> "Can someone call me?"

Memory:

```text
Counselling Requested = true
```

Lead:

```text
Status = Hot
Score = 70+
Source = Instagram
```

---

## Later Website Activity

Student logs in.

```text
User ID matches lead
```

Student views CUET course.

```text
Activity = COURSE_VIEWED
```

Student starts checkout.

```text
Activity = CHECKOUT_STARTED
```

Automation:

```text
Lead score increases
        ↓
Admin WhatsApp alert
```

---

## Later WhatsApp Conversation

Student messages YAC WhatsApp:

> "I was checking CUET yesterday."

If the phone number matches the existing lead:

```text
WhatsApp conversation
        ↓
Existing lead
        ↓
Existing context
```

AI can continue naturally without treating the person as a completely new lead.

---

# 31. Memory Data Model

Suggested MongoDB structure:

```text
Lead
├── identity
├── contact
├── education
├── interests
├── preferences
├── leadScore
├── status
├── source
├── assignedStaff
├── notes
└── timestamps

Conversation
├── leadId
├── channel
├── channelUserId
├── status
├── summary
├── handoffStatus
└── timestamps

Message
├── conversationId
├── senderType
├── content
├── metadata
└── timestamp

Memory
├── leadId
├── key
├── value
├── confidence
├── source
├── updatedBy
└── timestamps

ActivityEvent
├── leadId
├── userId
├── eventType
├── metadata
└── timestamp
```

---

# 32. Memory APIs

Suggested internal endpoints:

```text
GET    /api/memory/:leadId
POST   /api/memory
PATCH  /api/memory/:id
DELETE /api/memory/:id

GET    /api/conversations/:id
GET    /api/leads/:id/timeline

POST   /api/events
GET    /api/leads/:id/events
```

These endpoints should be protected by authentication and authorization.

---

# 33. Final Memory Rules

1. Remember useful context, not everything.
2. Keep short-term conversation memory separate from long-term lead memory.
3. Use reliable identity matching before merging channels.
4. Never merge users based only on name.
5. Use published YAC data as the source of truth for business facts.
6. Do not store secrets in memory.
7. Do not automatically retain unnecessary sensitive information.
8. Let users/admins correct inaccurate memory.
9. Let authorized admins delete or clear memory.
10. Use memory to prevent repetitive questions and follow-ups.
11. Use activity memory for lead qualification.
12. Use human handoff summaries to preserve continuity.
13. Retrieve only relevant memory for each AI request.
14. Do not vectorize all private conversations by default.
15. Apply retention and deletion policies consistently.
16. Never let old memory override newer verified information.
17. When uncertain, ask or escalate rather than guessing.
18. Treat memory as a support layer — not the source of truth for changing business information.

---

# 34. Final Architecture

```text
                     USER
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
     Website       Instagram       WhatsApp
        │              │              │
        └──────────────┼──────────────┘
                       ↓
                IDENTITY RESOLVER
                       ↓
                 MEMORY LAYER
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
 Conversation      Lead Memory     Activity
   Memory                             Memory
        │              │              │
        └──────────────┼──────────────┘
                       ↓
                  AI ORCHESTRATOR
                       │
             ┌─────────┴─────────┐
             ↓                   ↓
          RAG / KB           AI TOOLS
             │                   │
             └─────────┬─────────┘
                       ↓
                    RESPONSE
                       ↓
                 USER CHANNEL
```

The memory system should make the YAC AI feel like a **continuous admissions assistant**, while keeping business knowledge, customer memory, activity data, and channel identity properly separated.
