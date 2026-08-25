# Phase 1 — AI Brain, RAG & Knowledge Management

## Objective
Build the central AI system and admin-controlled knowledge base before connecting external channels.

## Scope
- Fix/rebuild existing website AI API.
- Create AI service.
- Create conversation memory.
- Create RAG pipeline.
- Create structured knowledge models.
- Create admin knowledge-management UI.
- Add course/fee/batch/faculty/center/FAQ management.
- Add PDF/DOCX knowledge upload.
- Add draft/preview/publish workflow.
- Add AI fallback and no-guessing rules.

## Core Data Models
- Course
- Fee
- Batch
- Faculty
- Center
- FAQ
- KnowledgeDocument
- KnowledgeChunk
- AIInstruction
- Conversation
- Message

## Admin Flow
Admin → Add/Edit information → Save Draft → Preview AI → Publish → Index/Update Vector Search.

## AI Flow
User question → conversation context → retrieve relevant knowledge → optional tool call → generate answer → store message.

## Acceptance Criteria
- Admin can publish a new course.
- Published course is retrievable by AI.
- AI can answer course/fee/batch questions.
- Draft information is not exposed.
- Unsupported questions produce a safe fallback.
- Existing website assistant can consume the new backend.
