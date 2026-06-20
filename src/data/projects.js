export const projects = [
{
slug: "threadly",
title: "Threadly",
tagline: "A real-time social platform built from scratch with messaging, stories, and content sharing",
description: `Threadly is a full-stack social media platform developed as a long-term solo project focused on real-time communication and community interaction.

Built with a layered TypeScript backend and a native Android client, Threadly includes posts, reels, stories, comments, likes, follows, private accounts, notifications, and a complete messaging system. The platform uses Socket.IO for real-time communication, Redis for caching, Cloudinary for media management, and Firebase Cloud Messaging for push notifications.

## The Problem

Most personal projects stop at authentication and CRUD operations. Threadly was built as an attempt to understand the challenges behind production-grade social applications including messaging, media delivery, notifications, moderation, and scalability.

## Approach

The backend follows a strict Controller → Service → Repository architecture, keeping business logic separated from transport and database layers. Real-time communication is handled through WebSockets while Redis improves performance for frequently accessed data.

## Technical Highlights

* Real-time messaging powered by Socket.IO
* Stories, posts, reels, comments, and follow systems
* Redis caching and session management
* Cloudinary media processing pipeline
* Firebase push notification integration
* Layered architecture with strict separation of concerns
* JWT authentication and account privacy controls

## Outcome

A large-scale social platform built over months of iterative development. The project serves as a practical exploration of backend architecture, mobile development, real-time systems, and scalable social networking features.`,
tags: [
"TypeScript",
"Node.js",
"MySQL",
"Redis",
"Socket.IO",
"Android"
],
coverImage: "/images/threadly-cover.jpg",
screenshots: [
"/images/threadly-1.jpg",
"/images/threadly-2.jpg",
"/images/threadly-3.jpg",
"/images/threadly-4.jpg",
],
videoUrl: null,
links: {
github: "",
live: "",
},
featured: true,
year: "2024–Present",
role: "Solo Developer",
highlights: [
"Complete social networking platform",
"Real-time messaging infrastructure",
"Redis + Socket.IO architecture",
"Stories, reels, comments, follows and notifications",
"Full-stack project built from scratch",
],
},

{
slug: "samar",
title: "Samar",
tagline: "An autonomous AI agent framework designed for memory, tools, and self-directed workflows",
description: `Samar is an experimental AI agent framework focused on building autonomous systems capable of reasoning, using tools, maintaining memory, and executing multi-step workflows.

Built with FastAPI, LangGraph, LangChain, and DeepSeek, the framework allows agents to interact with external systems, persist conversational state, and dynamically choose tools to accomplish goals.

## The Vision

Traditional chatbots answer questions. Samar explores what happens when an AI can plan, act, remember, and evolve through interaction.

## Architecture

The platform combines a LangGraph state machine, persistent memory, tool routing, and a modular service architecture. Tools allow interaction with external systems while persistent checkpoints enable long-running conversations.

## Features

* LangGraph-based agent workflow
* Persistent memory using SQLite
* Tool-based execution engine
* FastAPI backend
* DeepSeek LLM integration
* Modular architecture for future expansion

## Outcome

An evolving AI platform that serves as the foundation for future autonomous systems and experimentation in agentic AI workflows.`,
tags: [
"Python",
"FastAPI",
"LangGraph",
"LangChain",
"AI",
"Agents"
],
coverImage: "/images/samar-cover.jpg",
screenshots: [
"/images/samar-1.jpg",
"/images/samar-2.jpg",
"/images/samar-3.jpg",
"/images/samar-4.jpg",
],
videoUrl: null,
links: {
github: "",
live: "",
},
featured: true,
year: "2025–Present",
role: "Founder & Developer",
highlights: [
"Autonomous multi-step task execution",
"Persistent memory architecture",
"LangGraph workflow engine",
"Tool-calling framework",
"Built for future AI experimentation",
],
},

{
slug: "eazyshare",
title: "EazyShare",
tagline: "LAN file sharing without cables, accounts, internet, or app installations",
description: `EazyShare is a peer-to-peer file transfer platform that enables instant file sharing between Windows PCs and mobile devices over a local Wi-Fi network.

Users simply scan a QR code and begin transferring files immediately. The system uses WebRTC DataChannels for direct device communication and supports pause/resume, transfer recovery, persistence, and multi-device broadcasting.

## The Problem

Transferring files between devices often requires cables, cloud storage, or installing dedicated applications.

## Solution

EazyShare eliminates those steps by using local networking, browser-based mobile access, and direct peer-to-peer communication.

## Technical Highlights

* WebRTC DataChannels
* Electron desktop application
* QR-based device pairing
* Transfer persistence and recovery
* Multi-device architecture
* LAN-only secure communication

## Outcome

A lightweight productivity tool built to make local file transfers effortless and reliable.`,
tags: [
"Electron",
"Node.js",
"WebRTC",
"WebSocket",
"Desktop"
],
coverImage: "/images/eazyshare-cover.jpg",
screenshots: [
"/images/eazyshare-1.jpg",
"/images/eazyshare-2.jpg",
"/images/eazyshare-3.jpg",
"/images/eazyshare-4.jpg",
],
videoUrl: null,
links: {
github: "",
live: "",
},
featured: true,
year: "2025",
role: "Solo Developer",
highlights: [
"Peer-to-peer transfers using WebRTC",
"Zero-install mobile experience",
"Pause and resume support",
"Automatic transfer recovery",
"Multi-device broadcasting",
],
},

{
slug: "eazyotp",
title: "EazyOTP",
tagline: "Developer-friendly OTP infrastructure for secure authentication workflows",
description: `EazyOTP consists of a TypeScript-powered OTP microservice and a companion SDK that enables developers to integrate email verification into their applications with minimal setup.

The service handles OTP generation, delivery, storage, expiration, verification, and security controls while exposing a simple developer experience.

## Features

* Secure OTP generation
* Email delivery system
* Bcrypt-based OTP storage
* Automatic expiration management
* SDK for quick integration
* API key protection

## Outcome

A reusable authentication component designed to remove the complexity of implementing verification systems from scratch.`,
tags: [
"TypeScript",
"Node.js",
"Authentication",
"SDK",
"API"
],
coverImage: "/images/eazyotp-cover.jpg",
screenshots: [
"/images/eazyotp-1.jpg",
"/images/eazyotp-2.jpg",
"/images/eazyotp-3.jpg",
"/images/eazyotp-4.jpg",
],
videoUrl: null,
links: {
github: "",
npm: "",
live: "",
},
featured: true,
year: "2024",
role: "Solo Developer",
highlights: [
"OTP microservice architecture",
"Reusable npm package",
"Email verification workflows",
"Bcrypt-secured OTP storage",
"Developer-focused API design",
],
},

{
slug: "eazywalls",
title: "EazyWalls",
tagline: "Wallpaper discovery platform with cloud-powered media management",
description: `EazyWalls is a wallpaper ecosystem consisting of a native Android application and a TypeScript backend platform.

The platform supports wallpaper discovery, categories, favorites, authentication, search functionality, and cloud-based image management through Cloudinary.

## Technical Highlights

* Native Android application
* TypeScript backend
* MongoDB database
* Cloudinary media delivery
* OTP-based account verification
* Layered service architecture

## Outcome

A complete content-driven platform that explores media delivery, mobile experiences, and scalable backend design.`,
tags: [
"Android",
"TypeScript",
"MongoDB",
"Cloudinary",
"Express"
],
coverImage: "/images/eazywalls-cover.jpg",
screenshots: [
"/images/eazywalls-1.jpg",
"/images/eazywalls-2.jpg",
"/images/eazywalls-3.jpg",
"/images/eazywalls-4.jpg",
],
videoUrl: null,
links: {
github: "",
live: "",
},
featured: false,
year: "2024",
role: "Solo Developer",
highlights: [
"Native Android client",
"Cloud-based media platform",
"MongoDB-powered backend",
"Authentication and favorites",
"Category-driven discovery",
],
},

{
slug: "embedding-service",
title: "Embedding Service",
tagline: "Lightweight vector embedding API for semantic search and RAG systems",
description: `A FastAPI microservice that converts text into vector embeddings for use in AI applications such as semantic search, recommendation systems, and retrieval-augmented generation pipelines.

Built as a reusable infrastructure component, the service exposes a simple API for generating embeddings while remaining lightweight enough to deploy on low-cost environments.

It serves as a foundational building block for AI-powered products and experimentation.`,
tags: [
"Python",
"FastAPI",
"Embeddings",
"AI",
"Vector Search"
],
coverImage: "/images/embedding-cover.jpg",
screenshots: [],
videoUrl: null,
links: {
github: "",
live: "",
},
featured: false,
year: "2025",
role: "Solo Developer",
highlights: [
"Vector embedding generation",
"RAG-ready architecture",
"Semantic search support",
"FastAPI microservice",
"Reusable AI infrastructure",
],
},
];
