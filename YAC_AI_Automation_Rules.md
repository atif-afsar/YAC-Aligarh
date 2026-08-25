# YAC AI Automation — System Rules

## 1. Purpose

This document defines the operational rules for the YAC AI Agent, channel automation, lead management, website activity tracking, admin notifications, knowledge management, and human handoff.

The goal is to make the system:
- Accurate
- Safe
- Consistent
- Useful
- Non-spammy
- Admin-controlled
- Compliant with connected platform policies

---

# 2. Core AI Rules

## Rule 2.1 — Approved Knowledge Only

The AI must prioritize information available in the published YAC Knowledge Base.

Priority:

```text
Published Structured Data
        ↓
Published Knowledge Documents
        ↓
Approved AI Instructions
        ↓
Conversation Context
        ↓
General AI Knowledge
```

Business-specific facts must not be invented from general knowledge.

---

## Rule 2.2 — Never Guess Business Information

The AI must not invent:
- Course fees
- Batch dates
- Batch timings
- Faculty names
- Center locations
- Admission deadlines
- Discounts
- Offers
- Eligibility requirements
- Payment details
- Seat availability
- Exam dates
- Policies

If the information is unavailable or uncertain:

> "I don't have the latest information for that right now. I can connect you with the YAC team for confirmation."

---

## Rule 2.3 — Latest Published Information Wins

If multiple versions exist, use only the currently published version.

```text
Draft → Do not use
Archived → Do not use
Unpublished → Do not use
Published → Use
```

---

## Rule 2.4 — No Unsupported Claims

The AI must not claim:
- Guaranteed admission
- Guaranteed marks/rank
- Guaranteed selection
- Guaranteed job
- Guaranteed results
- Guaranteed scholarship
- Guaranteed discounts

unless the exact claim is explicitly approved and published by YAC.

---

# 3. Conversation Rules

## Rule 3.1 — Be Helpful First

The AI should answer the user's question before asking unnecessary questions.

Bad:

> "Please provide your name, phone, location and course."

Better:

> "Yes, YAC offers CA Foundation coaching. The current fee is ₹X. Would you like the batch timings as well?"

---

## Rule 3.2 — Ask Only Relevant Questions

The AI should collect information progressively.

Recommended order:

```text
Intent
 ↓
Course
 ↓
Education/Class
 ↓
Location/Mode
 ↓
Phone/Email
 ↓
Counselling requirement
```

Do not ask for information that is not needed.

---

## Rule 3.3 — Don't Repeat Questions

If the user already provided:
- Name
- Phone
- Course
- Location
- Class

the AI should use the existing conversation/CRM data instead of asking again.

---

## Rule 3.4 — Maintain Context

The AI should remember the current conversation context.

Example:

User:

> "What is the fee?"

AI should infer the relevant course from the recent conversation when unambiguous.

If multiple courses are being discussed:

> "Do you mean the CA Foundation course or the CUET course?"

---

# 4. Lead Creation Rules

## Rule 4.1 — Create a Lead When Meaningful Intent Exists

Create/update a CRM lead when the user demonstrates meaningful business intent, such as:
- Asking about admission
- Asking about fees
- Asking about batches
- Asking about a specific course
- Requesting counselling
- Providing contact information
- Starting checkout
- Asking to be contacted

Do not create unnecessary duplicate leads.

---

## Rule 4.2 — Lead Deduplication

Before creating a new lead:

```text
Phone
 ↓
Existing lead?
 ↓
Yes → Update existing lead
No → Create new lead
```

Other identifiers may be used where appropriate:
- Email
- Authenticated user ID
- Platform user ID

---

## Rule 4.3 — Source Tracking

Every lead should record its original source where available:

```text
website
instagram
whatsapp
referral
admin
unknown
```

The system should preserve the original source even if the conversation later moves to another channel.

---

# 5. Lead Scoring Rules

Lead scoring should be configurable.

Suggested signals:

| Signal | Suggested Weight |
|---|---:|
| General information | +5 |
| Course-specific question | +10 |
| Fee enquiry | +15 |
| Batch enquiry | +15 |
| Admission enquiry | +20 |
| Phone provided | +20 |
| Counselling requested | +25 |
| Checkout started | +30 |
| Payment failed | +25 |
| Repeated high-intent interaction | +10 |

Example classification:

```text
0–29    Cold
30–59   Warm
60–79   Hot
80+     Very Hot
```

These values must be configurable by admin.

---

# 6. Website Activity Rules

## Rule 6.1 — Track Meaningful Events

Track:

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

---

## Rule 6.2 — Do Not Alert on Raw Scrolling

Do not send a WhatsApp notification for:

```text
20% scroll
40% scroll
60% scroll
80% scroll
```

unless a future analytics feature explicitly needs scroll tracking.

Scrolling may be stored for analytics, but it should not normally trigger CRM alerts.

---

# 7. Checkout Rules

## Rule 7.1 — Checkout Started

When an authenticated user starts checkout:

```text
Event recorded
 ↓
Lead identified
 ↓
Lead score updated
 ↓
Automation rules evaluated
```

If the relevant admin rule is enabled, notify the YAC team.

---

## Rule 7.2 — Payment Completed

When payment succeeds:

```text
Lead status → Converted / Enrolled
Checkout status → Completed
Pending follow-ups → Stop
```

Do not continue abandoned-checkout reminders after successful payment.

---

## Rule 7.3 — Payment Failed

A payment failure can:
- Increase lead score
- Create CRM activity
- Notify admin
- Offer human assistance

Do not repeatedly notify the admin for the same failure.

---

# 8. Checkout Abandonment Rules

Checkout should only be considered abandoned after a configurable period.

Example:

```text
Checkout Started
        ↓
Wait 30 minutes
        ↓
Payment completed?
   ┌────┴────┐
  Yes       No
   ↓         ↓
Stop       Abandoned
             ↓
       Automation Rule
```

The exact abandonment delay must be configurable.

---

# 9. Admin WhatsApp Alert Rules

## Rule 9.1 — Alerts Are for Important Events

Possible alert triggers:

- New qualified lead
- Hot lead
- Checkout started
- Payment failed
- Checkout abandoned
- Counselling requested
- Human handoff
- High-intent Instagram enquiry
- High-intent WhatsApp enquiry

---

## Rule 9.2 — Alert Rate Limiting

The system must prevent alert spam.

Example:

```text
Same lead
Same event
Within configured time window
        ↓
Do not send duplicate alert
```

---

## Rule 9.3 — Alert Format

Example:

```text
🔔 High Intent Lead

Name: Rahul Sharma
Course: CA Foundation
Source: Website
Event: Checkout Started
Phone: +91 XXXXX XXXXX
Lead Score: 86

Action: Follow up with student.
```

---

# 10. Instagram Rules

## Rule 10.1 — Official API Only

Use Meta's official Instagram APIs and supported messaging capabilities.

Do not use:
- Browser automation
- Selenium
- Puppeteer login automation
- Instagram password automation
- Unofficial scraping

---

## Rule 10.2 — Professional Account

The Instagram account must satisfy Meta's current eligibility and permission requirements.

---

## Rule 10.3 — Incoming DM

Flow:

```text
Instagram DM
 ↓
Meta Webhook
 ↓
Verify Event
 ↓
Identify Conversation
 ↓
AI
 ↓
Response
 ↓
Meta Instagram API
```

---

## Rule 10.4 — Instagram Source

Any lead originating from Instagram should be tagged:

```text
source = instagram
```

---

# 11. WhatsApp Rules

## Rule 11.1 — Official WhatsApp Business Platform

Use Meta's official WhatsApp Business Platform/Cloud API.

Do not use:
- WhatsApp Web automation
- Browser bots
- QR login automation
- Unofficial libraries for production messaging

---

## Rule 11.2 — Webhook Verification

Every incoming webhook must be verified before processing.

---

## Rule 11.3 — Message Policy

The system must respect Meta's current:
- Messaging windows
- Template requirements
- Message categories
- User opt-outs
- Business messaging rules

Never design the system assuming unlimited outbound messaging.

---

## Rule 11.4 — WhatsApp Source

Leads originating from WhatsApp should be tagged:

```text
source = whatsapp
```

---

# 12. Follow-up Rules

## Rule 12.1 — Follow-ups Must Be Configurable

Admin controls:

```text
Enable/Disable
Delay
Maximum attempts
Audience
Message
Quiet hours
Channel
Stop conditions
```

---

## Rule 12.2 — Stop Conditions

Stop automated follow-ups when:
- User responds
- User opts out
- Lead converts
- Human takes over
- Lead is marked closed
- Maximum attempts reached

---

## Rule 12.3 — No Spam

Do not send repetitive messages.

Example sequence:

```text
Day 0 → Initial response
Day 1 → Follow-up
Day 3 → Follow-up
Day 7 → Final follow-up
```

The actual schedule should be admin configurable and platform-policy compliant.

---

# 13. Human Handoff Rules

Immediately offer human support when the user:
- Explicitly asks for a person.
- Has a payment problem.
- Has a refund issue.
- Makes a complaint.
- Has a sensitive case.
- Asks for an exception.
- Asks something outside the knowledge base.
- Requires a decision only staff can make.

---

## Rule 13.1 — Human Takeover State

Conversation states:

```text
AI_ACTIVE
HUMAN_REQUESTED
HUMAN_ACTIVE
AI_RESUMED
CLOSED
```

When `HUMAN_ACTIVE`:

```text
AI should not automatically reply
```

unless the admin explicitly returns the conversation to AI.

---

# 14. Knowledge Management Rules

## Rule 14.1 — Admin Controls Business Knowledge

Admin can:
- Add
- Edit
- Delete
- Draft
- Preview
- Publish
- Unpublish
- Archive

---

## Rule 14.2 — Publish Required

New information should not become customer-facing AI knowledge until published.

```text
Create
 ↓
Draft
 ↓
Preview
 ↓
Publish
 ↓
Index
```

---

## Rule 14.3 — Version History

Every important business information change should record:

```text
Previous value
New value
Updated by
Updated at
Version
Status
```

---

## Rule 14.4 — Immediate Knowledge Updates

When a published course/fee/batch is changed:

```text
Admin Update
 ↓
Database Update
 ↓
Vector Index Update
 ↓
Cache Invalidation
 ↓
AI uses new information
```

---

# 15. Document Rules

Allowed knowledge documents may include:
- PDF
- DOCX
- Course brochures
- Fee structures
- Admission notices
- Policies
- FAQs

Processing:

```text
Upload
 ↓
Validate
 ↓
Extract text
 ↓
Chunk
 ↓
Embed
 ↓
Index
 ↓
Publish
```

Documents should have:
- Title
- Category
- Version
- Status
- Uploaded by
- Uploaded date

---

# 16. AI Response Rules

## Rule 16.1 — Concise but Helpful

Prefer short, clear answers.

Avoid unnecessary paragraphs.

---

## Rule 16.2 — Use Natural Language

The AI should sound like a helpful YAC admission representative, not a technical bot.

---

## Rule 16.3 — Avoid Overpromising

Do not promise:
- Guaranteed results
- Guaranteed admissions
- Guaranteed discounts
- Guaranteed seats
- Guaranteed scholarships

unless explicitly approved.

---

## Rule 16.4 — Language Adaptation

The AI may respond in:
- English
- Hindi
- Hinglish

based on the user's language.

Do not change meaning while translating business information.

---

# 17. Privacy Rules

The system must minimize collection of personal data.

Collect only what is needed for:
- Admission enquiry
- Counselling
- Lead follow-up
- Checkout
- Support

Sensitive information should not be unnecessarily stored in conversation notes.

---

# 18. Admin Permission Rules

Recommended roles:

```text
SUPER_ADMIN
ADMIN
COUNSELLOR
VIEWER
```

### SUPER_ADMIN
Full access.

### ADMIN
Manage knowledge, leads, conversations, automations.

### COUNSELLOR
View assigned leads and handle conversations.

### VIEWER
Read-only analytics/conversations according to permissions.

---

# 19. Audit Rules

Log important admin actions:

```text
Knowledge created
Knowledge updated
Knowledge published
Knowledge unpublished
Lead updated
Lead assigned
Automation changed
AI setting changed
Human takeover
Channel connected
Channel disconnected
```

Audit record:

```text
action
userId
timestamp
resource
previousValue
newValue
```

---

# 20. Error Handling Rules

If an external API fails:

```text
API Error
 ↓
Log error
 ↓
Retry if safe
 ↓
Do not duplicate message
 ↓
If persistent → alert admin
```

The AI should not tell the student:

> "Our Node.js server returned a 500 error."

Instead:

> "I'm having trouble processing that right now. Please try again or I can connect you with the YAC team."

---

# 21. Webhook Rules

All webhooks must:
- Verify authenticity.
- Validate payload.
- Be idempotent.
- Store event/message ID.
- Prevent duplicate processing.
- Return appropriate response quickly.
- Process long-running AI work asynchronously where appropriate.

---

# 22. Duplicate Prevention

Use unique identifiers wherever available.

Examples:

```text
Meta message ID
Webhook event ID
Payment transaction ID
User ID
Phone number
Email
Checkout ID
```

The same event must not create multiple:
- Messages
- Leads
- Payments
- Notifications
- Follow-ups

---

# 23. AI Safety / Hallucination Guardrails

Before responding to business-specific questions:

```text
Is reliable information available?
        │
   ┌────┴────┐
  Yes       No
   │         │
Answer     Safe fallback
```

If confidence/retrieval quality is below the configured threshold:

```text
Do not guess.
Ask clarification or offer human assistance.
```

---

# 24. Automation Priority

When multiple rules trigger:

```text
1. Safety / policy
2. Human handoff
3. Payment / critical issue
4. Conversion event
5. High-intent lead
6. Normal follow-up
7. Analytics-only event
```

A completed payment should override abandoned-checkout automation.

A human takeover should override AI follow-ups.

---

# 25. Channel Independence

Business logic must remain channel-independent.

Do not write separate admission logic like:

```text
InstagramAdmissionLogic
WhatsAppAdmissionLogic
WebsiteAdmissionLogic
```

Instead:

```text
Central Admission Logic
        ↓
Channel Adapter
```

This prevents inconsistent answers.

---

# 26. Recommended Event Naming

Use consistent names:

```text
USER_REGISTERED
USER_LOGGED_IN
COURSE_VIEWED
COURSE_ENQUIRY
CTA_CLICKED
CHECKOUT_STARTED
PAYMENT_FAILED
CHECKOUT_ABANDONED
PAYMENT_COMPLETED
COUNSELLING_REQUESTED
LEAD_CREATED
LEAD_QUALIFIED
HUMAN_HANDOFF
FOLLOWUP_SCHEDULED
FOLLOWUP_SENT
FOLLOWUP_STOPPED
```

---

# 27. Final Golden Rules

The system must always follow these principles:

1. **Never invent YAC business information.**
2. **Use published knowledge as the source of truth.**
3. **One central AI agent serves all channels.**
4. **Use official Meta APIs for Instagram and WhatsApp.**
5. **Never ask the client for social-media passwords.**
6. **Do not spam students or admins.**
7. **Do not alert admins for meaningless activity.**
8. **Meaningful website events should feed the CRM.**
9. **Human takeover overrides AI automation.**
10. **Payment completion stops abandoned-checkout workflows.**
11. **Admin controls business knowledge and automation rules.**
12. **Every important automation should be auditable.**
13. **Every webhook should be verified and idempotent.**
14. **Protect student and lead data.**
15. **When uncertain, the AI should ask, retrieve, or escalate — never guess.**

---

# 28. Reference Architecture

```text
                         YAC ADMIN
                             │
                ┌────────────┴────────────┐
                │                         │
         KNOWLEDGE MANAGEMENT       AUTOMATION RULES
                │                         │
                └────────────┬────────────┘
                             ↓
                     ┌──────────────┐
                     │   BACKEND    │
                     │ Node/Express │
                     └──────┬───────┘
                            │
             ┌──────────────┼──────────────┐
             ↓              ↓              ↓
        AI / RAG         CRM / Events   Automation
             │              │              │
             └──────────────┼──────────────┘
                            │
               ┌────────────┼────────────┐
               ↓            ↓            ↓
            Website     Instagram     WhatsApp
               │            │            │
               └────────────┼────────────┘
                            ↓
                       YAC USERS
```

This rules document should be treated as the baseline operational specification for development, testing, and future admin configuration.
