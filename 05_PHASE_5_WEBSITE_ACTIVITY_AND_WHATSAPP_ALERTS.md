# Phase 5 — Website Activity Tracking & Admin WhatsApp Alerts

## Objective
Turn important website behavior into actionable lead intelligence.

## Track
- Registration
- Login
- Course view
- Enquiry
- CTA click
- Checkout started
- Payment failed
- Checkout abandoned
- Payment completed
- Counselling request

Do not send an alert for every raw scroll event.

## Event Flow
Website event → backend event API → event storage → rules engine → lead scoring/automation → optional WhatsApp admin alert.

## Automation Rules
Admin can enable/disable alerts for:
- New qualified lead
- Checkout started
- Payment failed
- Checkout abandoned
- Counselling request
- AI escalation
- Hot lead

## Example
Student starts checkout → event stored → lead score updated → automation rule evaluated → admin WhatsApp alert sent if enabled.

## Acceptance Criteria
- Authenticated activity can be linked to a lead.
- Checkout events are captured reliably.
- Rules can be configured.
- Alerts are rate-limited.
- Duplicate alerts are prevented.
- Admin can see the source event in CRM.
