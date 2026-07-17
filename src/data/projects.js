export const projects = [
{
slug: "threadly",
title: "Threadly",
tagline: "A production-grade social media platform with real-time messaging, stories, reels, and a full social graph — built solo from the ground up",
description: `Threadly is a feature-complete, full-stack social media application built entirely from scratch as a long-term solo engineering project. It spans a native Android client, a TypeScript REST + WebSocket backend, a React-based admin panel, and a public launch website — each component developed and maintained independently.

The goal was not to build a demo, but to confront the real engineering challenges that production social platforms face: session security, real-time message delivery guarantees, privacy-aware data queries, asynchronous media pipelines, and a scalable layered architecture.

## Architecture

The backend follows a strict Controller → Service → Repository layered pattern with a clean dependency injection registry. No controller ever touches the database directly — all persistence is abstracted through repository classes, and all business logic lives in service classes. This makes the codebase testable, maintainable, and straightforward to extend without breaking existing contracts.

Real-time communication is built on a three-tier message delivery pipeline: Socket.IO for online users, Firebase Cloud Messaging (FCM) as the offline push fallback, and a persistent database queue for guaranteed delivery when neither channel is reachable. Messages are only marked as delivered once the receiving client explicitly acknowledges receipt, giving accurate delivery status at every stage.

## Backend — Node.js / TypeScript

- **Runtime & Framework**: Node.js with Express.js v5, written in strict TypeScript throughout
- **Database**: MySQL via mysql2, with a structured relational schema covering users, posts, stories, follows, messages, comments, likes, and sessions
- **Session Management**: JWT tokens embed both a user ID and a sessionId. Sessions are validated against Redis (fast path) with MySQL as a fallback — enabling instant, single-device logout without waiting for token expiry. Logout sets the sessionId to NULL in the database and deletes the Redis key simultaneously
- **Real-time**: Socket.IO v4 for bidirectional live messaging
- **Push Notifications**: Firebase Admin SDK (FCM) fires on new messages, follow events, and social interactions when the recipient is offline
- **Media Storage**: Cloudinary with background upload workers. The API responds 201 immediately after receiving a file while Cloudinary processing continues asynchronously — preventing mobile timeouts on slow networks. Upload source is controlled by a PRODUCTION env flag (RAM buffer on Vercel, disk path in local dev)
- **Authentication**: OTP-gated registration via email or mobile. After OTP verification, the server issues a short-lived signed JWT containing the verified identity. The registration endpoint reads the email/phone from the decoded token — not from the request body — preventing spoofing
- **Privacy**: All post feeds, profile lookups, and social graph queries enforce account privacy at the SQL level using LEFT JOINs on the followers table with isApproved checks — no application-layer filtering needed
- **Containerisation**: Docker, deployed to Vercel

## Android Client — Java / MVVM

- **Architecture**: MVVM (Model-View-ViewModel) with LiveData, ViewBinding, and a Repository pattern that mirrors the backend's separation of concerns
- **Networking**: Fast Android Networking library for all REST API calls
- **Real-time**: Socket.IO Android client for live chat
- **Media Playback**: ExoPlayer (Media3) for smooth reels and video post playback with caching
- **Camera**: CameraX for a custom camera implementation used in story and post creation
- **Image Loading**: Glide with memory and disk caching for feed performance
- **Offline Support**: Room Database caches feed content, enabling browsing without internet
- **Push Notifications**: Firebase Cloud Messaging (FCM) with google-services integration

## Admin Panel — React

A separate React web application providing platform oversight: user management (ban/unban), content moderation (posts, stories, comments), and engagement analytics with week-over-week trend comparisons including total users, likes, comments, and post view counts.

## Key Features

- OTP-gated registration via email or mobile number with spoofing-proof token flow
- Multi-mode login: phone number, email address, or custom User ID
- Posts (image and video), stories, reels, with like, comment, and nested reply threads
- Real-time 1-on-1 messaging with three-tier delivery pipeline and delivery/read receipts
- Follow system with private account support and manual approval flow for follow requests
- Profile management: display name, User ID, bio, and profile picture
- Session invalidation on logout — no waiting for JWT expiry, instant across all devices
- Admin panel with user moderation and engagement analytics

## Outcome

Threadly is the most comprehensive project in this portfolio. Built over many months of iterative development, it represents a hands-on understanding of what it actually takes to engineer a production social platform — from database schema design and real-time infrastructure to mobile UX and cloud media delivery pipelines.`,
tags: [
"TypeScript",
"Node.js",
"MySQL",
"Redis",
"Socket.IO",
"Android",
"Java",
"MVVM",
"FCM",
"Cloudinary"
],
coverImage: "/images/threadly-cover.jpg",
screenshots: [

"/images/threadly-2.jpg",
"/images/threadly-3.jpg",
"/images/threadly-4.jpg",
"/images/threadly-5.jpg",
"/images/threadly-6.jpg",
"/images/threadly-7.jpg",
"/images/threadly-8.jpg",
"/images/threadly-9.jpg",
"/images/threadly-10.jpg",
"/images/threadly-11.jpg",
"/images/threadly-12.jpg",
"/images/threadly-admin-1.png",
"/images/threadly-admin-2.png",
"/images/threadly-admin-3.png",
"/images/threadly-admin-4.png",
"/images/threadly-admin-5.png",
"/images/threadly-admin-6.png",
"/images/threadly-admin-7.png",
"/images/threadly-admin-8.png",
"/images/threadly-admin-9.png",
"/images/threadly-admin-10.png",
"/images/threadly-admin-11.png",
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
"Full social platform: posts, reels, stories, comments, likes, and follows",
"Three-tier real-time message delivery: Socket.IO → FCM → DB queue",
"Redis-backed session management with instant logout invalidation",
"Privacy-aware SQL queries — account privacy enforced at the database level",
"Async Cloudinary media pipeline — API responds immediately, upload runs in background",
"Native Android MVVM client with ExoPlayer, CameraX, Glide, and Room",
"OTP-gated registration with short-lived signed JWT proof tokens to prevent spoofing",
"React admin panel with user moderation and week-over-week engagement analytics",
],
},

{
slug: "eazyshare",
title: "EazyShare",
tagline: "Zero-install LAN file sharing between your PC and any phone — no internet, no accounts, no cables",
description: `EazyShare is a Windows desktop application that enables instant, peer-to-peer file transfers between a PC and any number of mobile devices over a local Wi-Fi network. There is nothing to install on the phone — users scan a QR code, a web app opens in the browser, and transfers begin immediately.

The project was built to solve a genuine frustration: moving files between a laptop and a phone without reaching for a cable, signing into a cloud service, or installing a dedicated app. EazyShare handles all of that through local networking and a direct WebRTC data channel.

## Architecture

The desktop application is built with Electron and runs two internal servers side by side:

- An **Express HTTP server** (port 7523) that serves the mobile web app to the phone's browser — the phone never needs to install anything
- A **WebSocket signaling server** (port 7524) built with the ws library, handling the WebRTC offer/answer/ICE candidate exchange between the PC and each connected phone

Once signaling is complete, a direct **WebRTC DataChannel** opens between the PC and the phone. No data ever touches an external server — the entire transfer is local. No STUN or TURN servers are used; ICE candidates are LAN IPs only.

Files are split into **64 KB chunks**, and every chunk is individually acknowledged by the receiver. This ACK-driven protocol is what makes precise pause, resume, and crash recovery possible: the receiver always knows exactly which chunk it last confirmed, and the sender can resume from that exact byte offset on reconnect without re-reading the beginning of the file.

## Key Libraries

- **Electron** — desktop application shell with a main/renderer multi-process model and a preload context bridge for IPC between processes
- **Express** — serves the mobile web app from the PC's local network address
- **ws** — lightweight WebSocket server for WebRTC signaling, routing messages by target peerId
- **qrcode** — generates the connection QR code shown in the app sidebar as a data URL
- **uuid** — unique identifiers for tracking individual file transfers across reconnects
- **electron-builder** — packages the app as a standard Windows NSIS installer (~96 MB) with Desktop and Start Menu shortcuts

## Features

- Bidirectional transfers: PC to phone and phone to PC simultaneously
- Pause and resume any active transfer mid-flight — resumes from the exact byte
- Automatic resume on reconnect — phone drops Wi-Fi, reconnects, transfers pick up from the last confirmed chunk
- Persist across app restarts — incomplete transfers are saved to %APPDATA%/eazyShare/eazy_transfers.json and restored on the next launch without re-selecting files
- Multi-device support — each phone gets its own RTCPeerConnection, DataChannel, transfer queue, and download folder at Downloads/EazyShare/DeviceName/
- Broadcast mode — select multiple devices and drop files once to send to all simultaneously
- Recursive folder transfer with directory structure fully preserved
- Windows Firewall auto-configuration on first run with automatic clean removal on uninstall via NSIS hook
- Back-pressure management: the sender pauses when dc.bufferedAmount > 4 MB to prevent buffer overflow on the receiver side

## Security & Privacy

EazyShare is 100% local. No STUN or TURN servers are used — connections never traverse the internet. WebRTC DataChannels are DTLS-encrypted by specification. There are no accounts, no telemetry, and no data leaving the local network.

## Outcome

A polished, production-ready productivity tool distributed as a Windows installer. EazyShare demonstrates a deep understanding of peer-to-peer networking, the WebRTC DataChannel API, Electron's multi-process architecture, and the engineering required to build reliable, resumable file transfer systems.`,
tags: [
"Electron",
"Node.js",
"WebRTC",
"WebSocket",
"Express",
"Desktop",
"Windows"
],
coverImage: "/images/eazyshare-cover.png",
screenshots: [
"/images/eazyshare-1.png",
"/images/eazyshare-2.png",
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
"Direct WebRTC DataChannel — no external servers, fully LAN-local and DTLS-encrypted",
"ACK-driven 64 KB chunking protocol enables precise pause and byte-accurate resume",
"Transfer state persisted to disk — recovers perfectly after app restart, no re-selection needed",
"Multi-device: independent RTCPeerConnection, queue, and download folder per phone",
"Broadcast mode: drop files once, deliver to all selected devices simultaneously",
"Zero-install mobile experience via browser-served web app over Express",
"Windows Firewall auto-configured on first run, cleanly removed on uninstall",
"Packaged as a full NSIS Windows installer via electron-builder",
],
},


{
slug: "eazywalls",
title: "EazyWalls",
tagline: "A wallpaper discovery platform with a native Android client, cloud media delivery, and a fully layered TypeScript backend",
description: `EazyWalls is a complete, multi-component wallpaper platform consisting of a native Android application, a TypeScript REST API backend, a React-based admin client, and a public launch website. The system lets users browse, search, favourite, and download high-quality wallpapers organised by category, with Cloudinary powering all cloud media storage and delivery.

The project was built to explore the full engineering lifecycle of a content-driven mobile product — from schema design and image delivery pipelines to OTP authentication flows and a clean layered backend architecture.

## Backend Architecture — TypeScript / Express 5

The server follows a strict Controller → Service → Repository layered pattern:

  Request → Route → Middleware → Controller → Service → Repository → Database

No controller queries the database directly. All persistence is handled through typed Mongoose repository classes. Business logic lives exclusively in service classes. Controllers handle request validation, error mapping, and response formatting only.

All services are wired together in a single dependency injection registry at src/services/index.sevice.ts, and controllers import only from that registry — not from individual service files directly. This keeps dependencies explicit and the architecture consistent.

## Backend Libraries

- **TypeScript** (strict mode) — fully typed across the entire codebase
- **Express 5** — HTTP framework with async error propagation
- **MongoDB + Mongoose** — primary database with typed schemas for Wallpaper, User, Category, Favourite, and Report models
- **Cloudinary** — image storage, transformation, and CDN delivery. Wallpapers store both a compressed previewUrl for fast loading and a full-resolution originalUrl for download
- **JWT + bcrypt** — stateless authentication with bcrypt-hashed password storage
- **EazyOTP** — custom OTP microservice integration for email-based account verification during registration (a separately built service in this portfolio)
- **Multer** — multipart file upload handling with RAM storage buffer
- **Pino** — structured, high-performance JSON logging
- **unique-username-generator** — automatic username generation on registration

## API Surface

The backend exposes a versioned REST API at /api/v1 covering:

- OTP-gated registration: send OTP → verify (receive signed JWT) → register using that JWT as proof of identity
- JWT login returning token, username, and profile URL
- Wallpaper browsing with category filtering, featured and trending flags
- Favourites management (add, remove, list) for authenticated users
- Full-text search across wallpaper tags and categories
- Admin endpoints (gated by PRODUCTION env flag) for wallpaper and category CRUD, and managing featured/trending sets

## Android Client — Java / MVVM

The Android application is built natively in Java following the MVVM (Model-View-ViewModel) architecture with ViewBinding enabled throughout.

- **Architecture**: MVVM with ViewModel, LiveData, and a Repository layer that mirrors the backend's separation of concerns
- **Networking**: Fast Android Networking (AndroidNetworking) library for all API calls
- **Image Loading**: Glide — handles wallpaper preview grids with memory and disk caching and smooth scroll performance in RecyclerView
- **Local Database**: Room (SQLite) — caches wallpaper and category data for offline browsing
- **UI**: Material Design components, ConstraintLayout, SwipeRefreshLayout, and shimmer loading placeholders for perceived performance while images fetch
- **Build Target**: minSdk 29, targetSdk 36, deployed against a Vercel-hosted backend

## Admin Client — React

A separate React web application for content management: uploading wallpapers via Cloudinary, managing categories, setting featured and trending flags, and reviewing user-reported wallpapers.

## Key Features

- Category-driven wallpaper discovery with featured and trending sections
- Full-text search by tag and category
- OTP-verified account registration and JWT-authenticated sessions
- Favourites system — save and retrieve wallpapers per user account
- Full-resolution wallpaper download with Cloudinary CDN delivery
- Shimmer loading states for smooth perceived performance on mobile
- Admin content pipeline: upload → tag → categorise → feature

## Outcome

EazyWalls demonstrates the ability to design and ship a complete, multi-platform content product — including a typed backend, a native mobile client, and a web-based admin interface — with consistent separation of concerns enforced at every layer of the stack.`,
tags: [
"Android",
"Java",
"MVVM",
"TypeScript",
"Express",
"MongoDB",
"Cloudinary",
"Room",
"Glide"
],
coverImage: "/images/eazywalls-cover.png",
screenshots: [
"/images/eazywalls-1.jpg",
"/images/eazywalls-2.jpg",
"/images/eazywalls-3.jpg",
"/images/eazywalls-4.jpg",
"/images/eazywalls-admin-1.png",
"/images/eazywalls-admin-2.png",
"/images/eazywalls-admin-3.png",
"/images/eazywalls-admin-4.png",
"/images/eazywalls-admin-5.png",
],
videoUrl: null,
links: {
github: "",
live: "",
},
featured: true,
year: "2024",
role: "Solo Developer",
highlights: [
"Strict Controller → Service → Repository backend with a single dependency injection registry",
"Cloudinary media pipeline with dual preview/original URL storage per wallpaper",
"OTP-gated registration using short-lived signed JWT proof tokens to prevent spoofing",
"Native Android MVVM client with Glide, Room, SwipeRefreshLayout, and shimmer loading",
"Featured and trending flags for editorial curation, manageable via admin panel",
"Full-text search across wallpaper tags and categories",
"Admin content pipeline disabled in production via PRODUCTION environment flag",
"Multi-component system: Android app, TypeScript API, React admin panel, launch website",
],
},

{
slug: "eazyotp",
title: "EazyOTP",
tagline: "A secure, developer-friendly OTP microservice for cryptographically-proven identity verification",
description: `EazyOTP is a high-performance, developer-focused OTP (One-Time Password) verification microservice built from the ground up to solve registration spoofing and simplify multi-channel identity validation. Instead of forcing parent applications to manage OTP lifetime, verification state, and SMS/email providers, EazyOTP operates as a decoupled gateway.

The service's core architectural innovation is its **cryptographically signed proof token flow**. When a user requests an OTP, EazyOTP handles the transient storage, throttling, and delivery. Upon successful verification, EazyOTP returns a short-lived, cryptographically signed JWT to the client. The client then presents this JWT to the parent application's registration endpoint, which decodes the token to retrieve the verified email or phone number. This prevents spoofing attacks where malicious users try to register an account with a different email address than the one verified.

## Architecture

EazyOTP is built with a clean, modular structure leveraging Node.js and TypeScript, designed to be highly reliable, low-latency, and horizontally scalable. It divides responsibilities into specialized service providers, decoupling the delivery channel (SMS, Email) from the core verification and rate-limiting logic.

Transient data—such as active OTP codes, attempt counts, and cooldown states—lives in Redis. By leveraging Redis's native Time-To-Live (TTL) feature, EazyOTP guarantees that expired codes are automatically purged from memory without requiring background cleanups.

## Technologies & Infrastructure

- **Language & Runtime**: Node.js with TypeScript in strict mode for complete type safety
- **Framework**: Express.js with custom middleware for rate-limiting, error handling, and request validation
- **Data Store**: Redis for rapid, transient OTP storage with automatic TTL-based expiration
- **Authentication**: JsonWebToken (JWT) for issuing cryptographic proofs of verification
- **Communication Channels**: Nodemailer (SMTP) for email delivery and Twilio API integration for SMS delivery
- **Testing**: Jest and Supertest for unit, integration, and API endpoint testing
- **Deployment**: Docker containerization for instant, reproducible deployments on cloud platforms

## Key Features

- **Cryptographic Verification Proofs**: Returns a signed JWT upon verification, making it impossible for clients to spoof verified identities to the parent API
- **Redis-Backed Lifecycle**: OTP codes are stored in Redis with an automatic TTL match (e.g., 5 minutes), ensuring zero persistent storage overhead
- **Anti-Brute Force Protection**: Automatic IP-based and target-based rate-limiting, capping maximum verification attempts per OTP to 3 before invalidation
- **Request Throttling**: Cooldown enforcement (e.g., 60 seconds between resends) to prevent API abuse and control communication provider costs
- **Channel Abstraction**: Modular provider interface supporting quick swaps between SMTP, Twilio, or mock providers for local development
- **Comprehensive API Documentation**: Clean REST endpoints with JSON schemas for seamless integration into any frontend or backend system
- **Docker-Ready**: Packaged with multi-stage Dockerfiles for optimized production builds and minimal container footprint`,
tags: [
"TypeScript",
"Node.js",
"Redis",
"Express",
"JWT",
"Docker"
],
coverImage: "/images/eazyotp-cover.jpg",
screenshots: [],
videoUrl: null,
links: {
github: "",
live: "",
},
featured: true,
year: "2024",
role: "Solo Developer",
highlights: [
"Cryptographic proof flow: returns a signed JWT upon verification to prevent registration spoofing",
"Redis-backed transient lifecycle management with automatic TTL-based expiry",
"Multi-channel delivery support including SMTP (Nodemailer) and SMS (Twilio)",
"Anti-brute force security: invalidates OTPs after 3 failed verification attempts",
"IP and identifier-based rate limiting to prevent spam and control SMS costs",
"Strict TypeScript implementation with full unit and integration test coverage",
"Fully containerized with Docker for seamless cloud-native deployments",
],
},

];
