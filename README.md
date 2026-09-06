<div align="center">

# TRIAGE

### AI-powered debugging workspace for modern software teams.

**Investigate errors. Understand context. Find the root cause. Ship with confidence.**

Triage is being built as an AI-native debugging platform that brings code,
errors, screenshots, files, and repository context into one focused investigation workspace.

<br />

[![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/Status-In_Development-F59E0B)](#project-status)
[![License](https://img.shields.io/badge/License-TBD-64748B)](#license)

<br />

**Product · Debugging · Repository Context · AI Investigation**

</div>

---

## What is Triage?

Software debugging rarely starts with a clean question.

It starts with an exception.

A screenshot.

A broken component.

A stack trace.

A repository nobody completely understands.

And then developers begin jumping between their editor, browser, documentation,
terminal, search engine, issue tracker, repository, and AI tools trying to reconstruct
the context of the problem.

**Triage is being built to make that investigation a single workflow.**

Instead of treating debugging as a generic chat conversation, Triage is designed
around the lifecycle of a software investigation:

```text
Problem
   ↓
Context
   ↓
Investigation
   ↓
Root Cause
   ↓
Explanation
   ↓
Suggested Resolution
```

The long-term goal is simple:

> Give developers an AI debugging workspace that understands the problem
> together with the technical context surrounding it.

---

## Why Triage?

AI can generate code quickly.

Understanding **why existing code failed** is a different problem.

A useful debugging system needs more than a prompt. It needs context.

That context may exist across:

- source code
- stack traces
- screenshots
- configuration
- logs
- uploaded files
- repository structure
- previous investigation messages

Triage is being designed around this idea:

### **Context should be part of the debugging system — not something developers repeatedly reconstruct by hand.**

---

## Product Experience

Triage uses an investigation-oriented interface rather than a traditional support
dashboard.

The current frontend includes:

| Area | Purpose |
| --- | --- |
| **Investigation Workspace** | Central debugging conversation |
| **New Investigation** | Start debugging a new problem |
| **Search** | Find previous investigations |
| **Pinned Chats** | Keep important investigations accessible |
| **Recents** | Return to recent debugging sessions |
| **Code Context** | Attach code directly to an investigation |
| **Screenshots** | Provide visual error context |
| **Files** | Attach supporting debugging material |
| **GitHub Repository Input** | UI foundation for repository-aware investigation |
| **Responsive Workspace** | Desktop and mobile dashboard experience |

---

## Context Inputs

Triage's interface is designed to support multiple forms of debugging context.

```text
                    ┌─────────────────────┐
                    │       TRIAGE        │
                    │   Investigation     │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
          Source             Visual          Repository
           Code              Context          Context
             │                 │                 │
       ┌─────┴─────┐      ┌────┴────┐      ┌────┴─────┐
       │           │      │         │      │          │
      Code       Files Screenshot  Error  GitHub    Project
     Snippet                              Repository Structure
```

The frontend currently provides the interaction layer for these inputs.

Repository retrieval, persistent storage, file processing, and AI analysis belong
to the upcoming backend and intelligence layers.

---

## Architecture Direction

Triage is being developed in layers so that the interface, application backend,
context retrieval, and AI reasoning remain clearly separated.

```text
┌─────────────────────────────────────────────────────────────┐
│                         TRIAGE                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    EXPERIENCE LAYER                         │
│                                                             │
│          React · Vite · Tailwind CSS · Router              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    APPLICATION LAYER                        │
│                                                             │
│       Authentication · Chats · Messages · Uploads           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                      CONTEXT LAYER                          │
│                                                             │
│     Files · Code · Screenshots · Repository Context         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                   INTELLIGENCE LAYER                        │
│                                                             │
│       LLM · Retrieval · Tool Calling · Investigation        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

> The lower layers shown above describe the planned architecture and should not
> be interpreted as completed production functionality.

---

## Technology

### Current frontend

| Technology | Responsibility |
| --- | --- |
| **React** | Component-driven application UI |
| **Vite** | Development and production build tooling |
| **Tailwind CSS** | Design system and responsive styling |
| **React Router** | Client-side navigation |
| **Lucide React** | Interface iconography |
| **React Icons** | Additional UI icons |

### Planned application stack

Triage is intended to evolve into a full-stack JavaScript application with:

```text
Frontend
   React

        ↓

Application API
   Node.js + Express

        ↓

Persistence
   MongoDB

        ↓

Context Processing
   Repository / Files / Code

        ↓

AI Investigation
   LLM + Retrieval + Tools
```

The implementation will be introduced incrementally as the backend is developed.

---

## Repository Structure

```text
Triage/
│
├── frontend/
│   │
│   ├── public/
│   │   ├── logo/
│   │   └── video/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   └── landing/
│   │   │
│   │   ├── pages/
│   │   │   ├── Landing.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── ResetPassword.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Pricing.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

The repository structure will expand as the backend and AI infrastructure are added.

---

## Current Dashboard

The dashboard is the foundation of the Triage product experience.

```text
┌───────────────┬─────────────────────────────────────────────┐
│               │               Investigation                 │
│   TRIAGE      ├─────────────────────────────────────────────┤
│               │                                             │
│ + New Chat    │                                             │
│               │           Debugging conversation            │
│ Search        │                                             │
│               │                                             │
│ Pinned        │                                             │
│               │                                             │
│ Recents       │                                             │
│               ├─────────────────────────────────────────────┤
│               │  +   Describe the problem...          Send │
├───────────────┤                                             │
│ User          │                                             │
│ Upgrade       │                                             │
└───────────────┴─────────────────────────────────────────────┘
```

The composer supports UI flows for:

```text
+ Code
+ Files
+ Screenshots
+ GitHub repository
```

These context sources will later connect to the backend investigation pipeline.

---

## Project Status

Triage is currently under active development.

### Frontend

```text
Landing Experience        ██████████  Complete
Authentication UI         ██████████  Complete
Dashboard UI              ██████████  Complete
Responsive Experience     ██████████  Complete
Chat Interaction UI       ██████████  Complete
Context Attachment UI     ██████████  Complete
```

### Platform

```text
Authentication Backend    ░░░░░░░░░░  Planned
Chat Persistence          ░░░░░░░░░░  Planned
File Processing           ░░░░░░░░░░  Planned
GitHub Integration        ░░░░░░░░░░  Planned
AI Investigation          ░░░░░░░░░░  Planned
Retrieval Layer           ░░░░░░░░░░  Planned
```

This distinction is intentional.

**Triage does not claim backend or AI capabilities that have not yet been implemented.**

---

## Roadmap

Development is progressing through several engineering stages.

```text
PHASE 01
Product Experience
    ✓ Landing
    ✓ Authentication UI
    ✓ Dashboard
    ✓ Responsive interface
    ✓ Investigation composer

                 ↓

PHASE 02
Application Backend
    Authentication
    Users
    Chats
    Messages
    Persistence
    Search
    Pin / Delete

                 ↓

PHASE 03
Context Infrastructure
    File uploads
    Screenshot handling
    Code ingestion
    GitHub integration
    Repository processing

                 ↓

PHASE 04
AI Investigation
    LLM integration
    Context retrieval
    Repository-aware answers
    Tool calling
    Source grounding

                 ↓

PHASE 05
Production Engineering
    Security
    Observability
    Performance
    Testing
    Reliability
```

---

## Local Development

### Prerequisites

Install:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/vishalgoswami2007/Triage.git
```

### 2. Enter the frontend

```bash
cd Triage/frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development server

```bash
npm run dev
```

Vite will provide the local development address in the terminal.

---

## Production Build

Create an optimized frontend build with:

```bash
npm run build
```

Preview it locally with:

```bash
npm run preview
```

The production output is generated inside:

```text
frontend/dist/
```

---

## Engineering Principles

Triage is being developed around several principles.

### 01 — Context before answers

Debugging recommendations should be based on the available technical context,
not invented assumptions.

### 02 — Never fabricate source references

Future repository-aware responses should only reference files, code, or locations
that were actually retrieved and analyzed.

### 03 — Investigation over generic chat

The product should help developers move from symptom → evidence → cause → resolution.

### 04 — Progressive complexity

Infrastructure should be introduced when the product requires it rather than
adding unnecessary architectural complexity early.

### 05 — Explainable implementation

The codebase should remain understandable enough that important technical decisions
can be explained, reviewed, and maintained.

### 06 — Clear product boundaries

Incomplete functionality should be identified as planned rather than represented
as production-ready.

---

## What Triage Is Not

Triage is not intended to become another generic AI chat wrapper.

The product direction is specifically focused on:

**software investigation + debugging context + developer workflows.**

That distinction influences the interface, data model, repository integration,
retrieval strategy, and future AI architecture.

---

## Security Direction

As backend development begins, security-sensitive functionality will be designed
with production requirements in mind, including:

- authentication and authorization boundaries
- secure credential handling
- server-side validation
- upload validation
- repository access controls
- secret protection
- API rate limiting
- safe error responses

No credentials or private keys should ever be committed to this repository.

---

## Contributing

Triage is currently in an early development stage.

If contribution workflows are opened publicly later, development should follow
a conventional branch-based workflow:

```bash
git checkout -b feature/your-feature
```

Make focused changes and use meaningful commits:

```bash
git commit -m "feat: add feature description"
```

Then push the branch and open a pull request.

---

## Vision

Developer tools are moving from passive utilities toward systems that can reason
over increasingly large amounts of software context.

Triage is an exploration of what debugging looks like when the AI does not only
receive a question—

**it receives the investigation context.**

The goal is not to remove developers from debugging.

The goal is to remove the repetitive work required to assemble enough context
to begin debugging effectively.

---

## License

A public license has not yet been selected for Triage.

Until a license is explicitly added, the repository should not be assumed to grant
open-source usage rights.

---

<div align="center">

### Built by Vishal Goswami

**Triage — Debug the cause, not just the symptom.**

<br />

If you find the direction interesting, consider starring the repository as the project evolves.

</div>
