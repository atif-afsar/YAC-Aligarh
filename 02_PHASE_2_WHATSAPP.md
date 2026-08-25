# Phase 2 — WhatsApp AI Automation

## Objective
Connect YAC's official WhatsApp Business Platform to the central AI agent.

## Scope
- Meta Business configuration.
- WhatsApp Business Platform/Cloud API setup.
- Webhook verification.
- Incoming message handling.
- Outgoing message service.
- Conversation/message persistence.
- User/lead identification.
- AI response generation.
- Human handoff.
- Error handling and retry logic.
- Message/template compliance.

## Flow
WhatsApp message → Meta webhook → backend → conversation state → RAG/tools → AI response → WhatsApp API → user.

## Requirements
- Use official Meta APIs.
- Secure tokens and webhook verification.
- Idempotent webhook processing.
- Log delivery status/errors.
- Respect WhatsApp messaging policies and applicable template rules.

## Acceptance Criteria
- Test WhatsApp user can message YAC.
- AI replies using approved knowledge.
- Conversation history is stored.
- Lead can be created/updated.
- Human handoff works.
- Failed API calls are retried safely.
