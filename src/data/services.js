export const services = [
  {
    slug: "walkieTalkie",
    title: "WalkieTalkie",
    tagline: "Private Real-Time Instant Messaging & Media Sharing Platform",
    liveUrl: "https://talkwithme-phi.vercel.app/",
    description: `WalkieTalkie is a private, real-time instant messaging and file sharing web application engineered for zero-friction ephemeral communication. Built around an 8-character room code system, users can generate a new room instantly or join an active session with a custom display name — requiring no registration or account setup.

The platform delivers a comprehensive real-time chat experience with low-latency text messaging, Cloudinary-powered image and document attachment uploads, complete room message history auto-reloads upon joining, live typing status indicators, and user join/leave broadcast events.`,
    architecture: `The backend is built following a clean Router-Controller-Service-Repository (RCSR) architecture pattern:
- Routers: Define endpoint routes for REST APIs (rooms, messages, media) and Socket.IO events.
- Controllers: Handle HTTP request parsing, payload validation, error mapping, and response formatting.
- Services: Contain core business logic, room generation, and media upload coordination.
- Repositories: Abstract MySQL database persistence for room metadata and historical message records.`,
    highlights: [
      "Instant room creation with auto-generated unique 8-character alphanumeric room codes",
      "Real-time bidirectional messaging engine powered by Socket.IO v4",
      "Asynchronous media and document attachment upload pipeline via Express Multer & Cloudinary CDN",
      "Persistent room message history auto-loaded upon joining using MySQL repository abstractions",
      "Live typing indicators ('User is typing...') and real-time room join/leave notification events",
      "Interactive full-screen image viewer lightbox modal and attachment download helpers",
      "Theme-aware responsive UI with built-in Light and Dark mode toggling",
      "Production health check endpoint (/api/health) for zero-downtime monitoring on Render.com"
    ],
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MySQL",
      "Cloudinary",
      "Multer",
      "REST API",
      "Render",
      "Vercel"
    ]
  },
  {
    slug: "eazyOTP",
    title: "EazyOTP Microservice",
    tagline: "Developer-Friendly Email OTP Verification Gateway & SDK",
    liveUrl: "https://eazy-otp-official.vercel.app/",
    description: `EazyOTP is a high-performance, developer-focused One-Time Password (OTP) verification microservice and published Node.js SDK ('eazyotp' on npm) built to simplify email authentication and identity validation. Operating as a decoupled authentication gateway, EazyOTP enables downstream applications to generate, dispatch, and verify 6-digit email OTPs without building custom mailing pipelines or complex database infrastructure.

The service incorporates cryptographic verification security, bcrypt password hashing, automatic code expiration, and a published TypeScript-ready client SDK for zero-boilerplate integration.`,
    architecture: `The system consists of three interconnected layers:
- Microservice Gateway: Express.js + TypeScript backend enforcing API Key authorization (?apiKey=...) for all send and verify endpoints.
- Database & Hashing Layer: MongoDB (Mongoose) with bcrypt hashing for stored OTPs so true verification codes are never stored in cleartext.
- Client SDK & Web Portal: Official 'eazyotp' npm SDK for programmatic Node.js integration alongside a React + Vite web application for documentation and service onboarding.`,
    highlights: [
      "Decoupled microservice gateway insulating parent applications from OTP lifecycle complexity",
      "Official 'eazyotp' npm SDK supporting Promise-based sendOtp() and verifyOtp() methods",
      "Bcrypt-hashed OTP storage in MongoDB ensuring zero cleartext pin code exposure",
      "Automated 5-minute code expiration enforcement with proactive deletion of previous unused OTPs",
      "Nodemailer SMTP email delivery engine with customizable company branding templates",
      "Protected endpoints requiring query-parameter API Key verification to block unauthorized access",
      "Full TypeScript support with exported type declarations and client-side email format validation",
      "Web documentation portal hosted on Vercel at eazy-otp-official.vercel.app"
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Bcrypt",
      "Nodemailer",
      "npm SDK",
      "React",
      "Vite",
      "Vercel"
    ]
  }
];
