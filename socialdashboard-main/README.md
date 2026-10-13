# SocialSync – Unified Social Media Dashboard

> **“All Your Socials. One Smart Dashboard.”**  
> A modern, responsive SaaS analytics dashboard engineered to help content creators, students, influencers, and small businesses track, compare, and scale their multi-platform social media performance from one centralized hub.

---

## 🚀 Key Highlights & Overview

Content creators and growth marketers frequently struggle with **analytics fragmentation**: logging into separate studios (YouTube Studio, Meta Business Suite / Instagram Insights, TikTok Analytics, LinkedIn Analytics) with incompatible metrics and messy spreadsheets.

**SocialSync** solves this by unifying your social footprint into a single, cohesive dashboard with standardized engagement rates, cross-channel growth trajectories, and 1-click exportable reports.

---

## ✨ Features

### 1. Landing Page (Public Portal)
- **Modern SaaS Aesthetics:** Clean white and light-purple visual identity with blue and violet gradients, glassmorphism, rounded cards, and smooth micro-animations.
- **Hero & Interactive Preview:** Live simulated analytics widget previewing real-time follower trends.
- **Problem vs. Solution:** Side-by-side comparison of past siloed fragmentation vs. unified clarity.
- **Feature Matrix:** 6 core value cards showcasing normalization math, virality scoring, and multi-network aggregation.
- **How It Works (3 Steps):** 
  1. *Connect Accounts* (Simulated OAuth flow with scope transparency).
  2. *Track Performance* (Consolidated KPIs & real-time charts).
  3. *Grow Smarter* (Format benchmarks & algorithmic peak-hour recommendations).
- **Target Audience Segments:** Tailored value propositions for **Creators**, **Students & Learners**, **Influencers**, and **Small Businesses**.
- **Interactive Pricing:** Starter/Student (Free), Creator Pro ($19/mo demo), and Business/Agency ($49/mo demo) with Monthly / Annual toggle and demo sandbox checkout.
- **Creator Testimonials & FAQ:** Realistic cohort feedback and collapsible FAQ accordion.
- **Contact Form & About:** Functional form validation with instantaneous toast alerts and status feedback.

### 2. Interactive Analytics Dashboard
- **Responsive Layout:** Fixed desktop sidebar + smooth mobile slide-out navigation.
- **Dynamic Date Range Filtering:** Toggle between **7 Days**, **30 Days**, and **90 Days** — immediately updating all 6 KPI cards, timelines, and platform distributions.
- **6 KPI Metric Cards:**
  - *Total Followers*
  - *Total Likes*
  - *Total Comments*
  - *Total Views / Impressions*
  - *Total Posts Published*
  - *Average Engagement Rate*
- **Interactive Charts (Recharts):**
  - *Follower Growth Timeline:* Smooth multi-line/area curves with tooltips isolating Instagram, YouTube, TikTok, and aggregate totals.
  - *Cross-Platform Engagement Bar Chart:* Benchmark comparison (% interaction per view).
  - *Audience Distribution Donut Chart:* Platform share breakdown with colored badges.
- **Top-Performing Content Rankings:** Content ranked by ROI score, virality velocity, and reach ratio.
- **Recent Content Feed:** Consolidated multi-network table with thumbnail previews, tags, and engagement indicators.
- **1-Click CSV Report Export:** Generates and downloads real, structured `.csv` analytics files directly in your browser.
- **Account Management ("My Accounts"):**
  - Supports **Instagram**, **YouTube**, **TikTok**, **LinkedIn**, and **Facebook**.
  - Dynamic Connect/Disconnect/Re-sync toggling.
  - Interactive "Connect Channel" modal with 3-stage simulated OAuth granting and permissions checklist.
  - LocalStorage persistence: customized handles and connections persist across page refreshes.
- **Deep-Dive & Growth Reports:**
  - Content format velocity (Shorts/Reels vs. Long-form vs. Carousels vs. Text).
  - Geographic origin metrics with national flags.
  - Demographic age segments.
  - Recommended posting windows for peak algorithm reach.
- **Settings & Demo Controls:**
  - Profile preferences customization.
  - Simulated developer API keys and OAuth tokens.
  - "Restore Default Sample Data" button.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) + Custom Glassmorphism & Gradient System |
| **Charts** | [Recharts](https://recharts.org/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Delight / FX** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **State & Storage** | React Context API + Browser `localStorage` |

---

## 📦 Installation & Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended; verified on Node v22)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Step 1: Clone or Navigate to the Project Folder
```bash
cd "c:\Users\RENUKA DEVI\OneDrive\Desktop\SocialSync"
```

### Step 2: Install Dependencies
```bash
npm install --legacy-peer-deps
```

### Step 3: Run the Development Server
```bash
npm run dev
```

The application will start on:
```
http://localhost:5173/
```

### Step 4: Build for Production
To create an optimized production bundle:
```bash
npm run build
```
You can preview the production build with:
```bash
npm run preview
```

---

## 🔒 Security & Live API Integration Architecture

In this demonstration build, all accounts, metrics, and chart series are modeled using realistic sample data schemas to allow immediate exploration without requiring real third-party social media developer accounts.

### Production Roadmap: Official Platform API Setup
When upgrading SocialSync to ingest live third-party accounts, implement the following server-side architecture:

1. **OAuth 2.0 Credentials:**
   - **Instagram / Facebook:** Register an App on Meta for Developers, obtain `client_id` & `client_secret`, and implement `instagram_basic` and `pages_read_engagement` scopes.
   - **YouTube:** Enable *YouTube Data API v3* in Google Cloud Console with `https://www.googleapis.com/auth/youtube.readonly`.
   - **TikTok:** Register on TikTok for Developers and configure Login Kit with `video.list` and `user.info.basic`.
   - **LinkedIn:** Register an Application on LinkedIn Developer Portal with `r_organization_social`.

2. **Backend Server (`Node.js + Express`):**
   - Store all `CLIENT_SECRET` keys in `.env` files — **never expose credentials in frontend code**.
   - Establish callback endpoints (`/api/auth/[platform]/callback`) to exchange authorization codes for encrypted refresh tokens.
   - Encrypt database tokens using AES-256 before storing them.

---

## 📁 Project Structure

```
SocialSync/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── ToastContainer.jsx        # Animated floating notification toasts
│   │   ├── landing/
│   │   │   ├── Navbar.jsx                # Responsive navbar & mobile menu
│   │   │   ├── HeroSection.jsx           # Hero, taglines & live preview card
│   │   │   ├── ProblemSolutionSection.jsx# Before vs. After comparison
│   │   │   ├── FeaturesSection.jsx       # 6 core feature cards
│   │   │   ├── HowItWorksSection.jsx     # 3-step setup walkthrough
│   │   │   ├── TargetAudienceSection.jsx # Creators, Students, Influencers, Businesses
│   │   │   ├── PricingSection.jsx        # Free, Pro, and Business demo tiers
│   │   │   ├── TestimonialsSection.jsx   # Sample cohort testimonials
│   │   │   ├── FaqSection.jsx            # Interactive accordion FAQ
│   │   │   ├── ContactSection.jsx        # Validated contact form & info
│   │   │   └── Footer.jsx                # Social links, status & disclaimer
│   │   ├── dashboard/
│   │   │   ├── DashboardLayout.jsx       # Shell wrapping sidebar, header & views
│   │   │   ├── DashboardSidebar.jsx      # Navigation tabs, quota badge & quick connect
│   │   │   └── DashboardHeader.jsx       # Search, date range selector & CSV export
│   │   └── modals/
│   │       ├── AuthModal.jsx             # Sign In / Sign Up & 1-click Demo bypass
│   │       ├── ConnectAccountModal.jsx   # 3-stage simulated OAuth connect flow
│   │       └── PlanModal.jsx             # Demo plan upgrade & celebratory confetti
│   ├── context/
│   │   └── AppContext.jsx                # Global state, persistence & CSV generator
│   ├── data/
│   │   └── mockData.js                   # Comprehensive 7d/30d/90d analytics data
│   ├── pages/
│   │   ├── LandingPage.jsx               # Complete assembled homepage
│   │   └── dashboard/
│   │       ├── DashboardOverview.jsx     # 6 KPIs, Recharts area/donut/bar & posts
│   │       ├── MyAccountsView.jsx        # Channel cards, search, filters & sync
│   │       ├── AnalyticsDeepDive.jsx     # Platform benchmarks & format matrix
│   │       ├── GrowthReportsView.jsx     # Demographics, flags & peak hours
│   │       └── SettingsView.jsx          # Profile preferences & demo data reset
│   ├── App.jsx                           # Root router & view manager
│   ├── index.css                         # Custom gradients, scrollbars & glassmorphism
│   └── main.jsx                          # React 19 entry point
├── index.html                            # SEO tags, Plus Jakarta Sans & favicon
├── package.json
├── tailwind.config.js                    # Brand colors, typography & glow shadows
└── README.md
```

---

## 📜 License & Disclaimers

- **Demo Disclaimer:** SocialSync is an independent startup project created for analytics dashboard demonstration and portfolio showcase. It is not officially affiliated with or endorsed by Meta Platforms, Google LLC, ByteDance, or Microsoft.
- All sample data and metrics are simulated for demonstration purposes.
