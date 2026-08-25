# Phase 6 — Advanced AI Agent, Lead Qualification & Follow-ups

## Objective
Move from reactive chatbot behavior to proactive admissions automation.

## AI Tools
- getCourseDetails
- getFeeDetails
- getBatchDetails
- getCenterDetails
- getFacultyDetails
- createLead
- updateLead
- requestCounselling
- requestHumanAgent

## Lead Qualification
AI identifies:
- Course interest
- Admission intent
- Timeline
- Location
- Preferred mode
- Contact information
- Engagement signals

Generate configurable Hot/Warm/Cold scores.

## Follow-ups
Support scheduled follow-ups for eligible leads.

Examples:
- Enquiry follow-up
- Counselling reminder
- Checkout abandonment
- Application reminder

Follow-ups must respect channel policies, consent, timing rules, and opt-out requirements.

## Admin Controls
- Enable/disable automation.
- Configure delay.
- Configure message.
- Select audience/status.
- Set maximum attempts.
- Set quiet hours.
- Stop follow-up after conversion or opt-out.

## Acceptance Criteria
- AI can qualify leads.
- Qualified leads enter appropriate CRM status.
- Approved follow-ups can be scheduled.
- Follow-ups stop when conditions require.
- Human handoff overrides automated AI behavior.
