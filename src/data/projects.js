export const projects = [
  {
    slug: "threadly",
    title: "Threadly",
    tagline: "A real-time social platform built for meaningful conversations",
    description: `Threadly is a full-stack social platform designed around threaded conversations — not infinite feeds. Built solo over 7 months, it handles real-time messaging, nested comment threads, user profiles, media uploads, and notification systems.

## The Problem

Most social platforms optimize for engagement metrics, not genuine conversation. Threadly was built to prove that a single developer could ship a production-grade social experience that prioritizes depth over virality.

## Approach

The architecture separates concerns cleanly: a Node.js/Express API layer handles business logic and auth, PostgreSQL manages relational data (users, threads, relationships), Redis powers real-time features and caching, and a React frontend delivers the UI.

## Notable Technical Decisions

- **WebSocket-based real-time engine** — built from scratch rather than using Firebase, giving full control over event routing and connection management
- **Custom notification pipeline** — fan-out architecture that handles @mentions, thread replies, and follow notifications without third-party services
- **Media processing pipeline** — server-side image optimization with sharp, supporting uploads up to 10MB with automatic WebP conversion
- **Rate limiting & abuse prevention** — token-bucket rate limiter + content hashing to prevent spam floods

## Outcome

842 files across frontend and backend. The platform handles concurrent users, nested threads 10+ levels deep, and real-time updates with sub-200ms latency. Currently in private beta with a small user group.`,
    tags: ["Full-Stack", "React", "Node.js", "PostgreSQL", "WebSocket", "Redis"],
    coverImage: "/images/threadly-cover.jpg",
    screenshots: [
      "/images/threadly-1.jpg",
      "/images/threadly-2.jpg",
      "/images/threadly-3.jpg",
      "/images/threadly-4.jpg",
    ],
    videoUrl: null,
    links: {
      github: "https://github.com/rasidekbal/threadly",
    },
    featured: true,
    year: "2024–2025",
    role: "Solo developer",
    highlights: [
      "842 files across full-stack codebase",
      "7-month solo build from scratch",
      "Real-time WebSocket engine with sub-200ms latency",
      "Custom notification fan-out pipeline",
      "Private beta with active user group",
    ],
  },
  {
    slug: "eazyotp",
    title: "EazyOTP",
    tagline: "Plug-and-play OTP verification service used by external apps in production",
    description: `EazyOTP is a developer-facing OTP (One-Time Password) verification service — a clean API that any app can integrate to add phone/email verification without building the infrastructure themselves.

## The Problem

OTP verification is a solved problem conceptually, but building it properly involves SMS gateway integration, rate limiting, expiry management, retry logic, and abuse prevention. Most indie developers either roll a fragile custom solution or pay for expensive third-party services.

## Approach

Built as a lightweight, self-hostable service with a simple REST API. Developers integrate with 2 API calls: one to send an OTP, one to verify it. Everything else — code generation, delivery, expiry, rate limiting — is handled internally.

## Technical Architecture

- **API Layer**: Express.js with strict input validation and API key authentication
- **OTP Engine**: Cryptographically secure code generation, configurable length (4-8 digits), time-based expiry with automatic cleanup
- **Delivery**: Pluggable transport layer — currently supports SMS (via Twilio) and email (via SendGrid/SMTP)
- **Security**: Per-key rate limiting, IP-based throttling, brute-force detection (lockout after N failed attempts per phone/email)
- **Storage**: Redis for OTP state (fast reads, automatic TTL-based expiry)

## Outcome

Adopted by 2 external applications in production. The service handles verification flows reliably with configurable retry policies and clean error responses.`,
    tags: ["Backend", "API", "Node.js", "Redis", "Open Source"],
    coverImage: "/images/eazyotp-cover.jpg",
    screenshots: [
      "/images/eazyotp-1.jpg",
      "/images/eazyotp-2.jpg",
      "/images/eazyotp-3.jpg",
      "/images/eazyotp-4.jpg",
    ],
    videoUrl: null,
    links: {
      github: "https://github.com/rasidekbal/eazyotp",
      npm: "https://npmjs.com/package/eazyotp",
    },
    featured: true,
    year: "2024",
    role: "Solo developer",
    highlights: [
      "Live OTP service with external users in production",
      "2 external apps adopted it",
      "Cryptographically secure code generation",
      "Sub-100ms verification response times",
      "Pluggable SMS/email transport layer",
    ],
  },
  {
    slug: "samar",
    title: "Samar",
    tagline: "Autonomous AI agent framework for multi-step task execution",
    description: `Samar is an AI agent system that goes beyond simple prompt-response — it plans, executes multi-step tasks, uses tools, and maintains context across complex workflows.

## The Problem

LLM wrappers that take a prompt and return a response are useful but limited. Real-world tasks — research, code generation, data processing — require planning, tool use, error recovery, and memory. Building this infrastructure from scratch for every AI project is wasteful.

## Approach

Samar provides a framework for building autonomous agents that can decompose goals into steps, select and use tools (web search, code execution, file I/O, API calls), handle failures gracefully, and maintain conversational context.

## Architecture

- **Agent Core**: Goal decomposition engine that breaks high-level tasks into executable steps
- **Tool System**: Pluggable tool interface — agents discover available tools and select the right one for each step
- **Memory Layer**: Short-term (conversation context) and long-term (persistent knowledge) memory systems
- **Execution Engine**: Step-by-step execution with error detection, retry logic, and plan revision when steps fail
- **Python SDK**: Clean API for defining custom agents, tools, and workflows

## Outcome

Powers internal automation workflows. The framework handles multi-step research tasks, code generation with iterative refinement, and data pipeline orchestration — tasks that would require manual intervention with simple LLM APIs.`,
    tags: ["AI/Agents", "Python", "LLM", "Framework", "Open Source"],
    coverImage: "/images/samar-cover.jpg",
    screenshots: [
      "/images/samar-1.jpg",
      "/images/samar-2.jpg",
      "/images/samar-3.jpg",
      "/images/samar-4.jpg",
    ],
    videoUrl: null,
    links: {
      github: "https://github.com/rasidekbal/samar",
    },
    featured: true,
    year: "2025",
    role: "Solo developer & architect",
    highlights: [
      "Multi-step autonomous task execution",
      "Pluggable tool system with auto-discovery",
      "Short-term + long-term memory architecture",
      "Error recovery with automatic plan revision",
      "Powers internal automation workflows",
    ],
  },
];
