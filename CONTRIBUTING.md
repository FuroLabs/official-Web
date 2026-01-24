# Contributing to the FURO Labs Official Web

Welcome to the heart of our digital presence. Because this repository represents the **FURO Labs** brand to the world, we maintain a high standard for quality, security, and design.

> [!CAUTION]
> **🛑 INTERNAL ONLY:** This repository is restricted to authorized FURO Labs employees, owners, and administrators. External pull requests are not accepted unless specifically requested by leadership.

---

## 🏗️ The Workflow

Unlike our other repositories, the Official Web uses a strict **`dev` → `main**` promotion strategy to ensure production stability.

1. **Sync:** Ensure your local `dev` branch is up to date.
2. **Branch:** Create a feature branch from `dev`.
* `git checkout -b feat/team-update dev`
3. **Build:** Implement changes following our [Tech Stack](https://www.google.com/search?q=%23-tech-stack) guidelines.
4. **Verify:** Run local checks (Linting & Type-checking).
5. **PR:** Open a Pull Request targeting the **`dev`** branch.

---

## ✅ Pre-Flight Checklist

Before submitting your PR, ensure it passes the FURO Labs "Senior-Led" standard:

* [ ] **Build Check:** `npm run dev` starts without console errors.
* [ ] **Type Safety:** `npm run typecheck` passes (No `any` types allowed).
* [ ] **Linting:** `npm run lint` passes perfectly.
* [ ] **Secrets:** Verified that no Firebase keys or `.env` values are tracked by Git.
* [ ] **UI Sync:** Animations (`framer-motion`) and styles align with the [Brand Identity](https://www.google.com/search?q=%23-brand-identity).

---

## 🎨 Brand Identity

Every pixel on the official site must adhere to our visual language:

* **Primary Cyan:** `#3BE2FF` (Futuristic & Clean)
* **Accent Purple:** `#C452FF` (Electric & Bold)
* **Deep Navy:** `#121E29` (Background)
* **Typography:** 'Space Grotesk' for headlines; clean sans-serif for body.
* **Icons:** Exclusively use `lucide-react` or `@tabler/icons-react`.

---

## 🛠️ Tech Stack & Patterns

* **Framework:** Next.js (App Router) + TypeScript.
* **Styling:** Tailwind CSS + Radix UI primitives.
* **Backend:** Firebase/Firestore (Environment-driven config).
* **AI Integration:** Genkit flows should live under `src/ai`.
* **Team Management:** Updates to team bios happen in `src/components/sections/team.tsx`.

---

## 🔐 Secrets & Security

This repository is **Public** for infrastructure benefits, but the data is **Proprietary**.

* **Environment Variables:** Use `.env.local` for development. Never commit real credentials.
* **Secret Leakage:** If you accidentally commit a secret, notify a Repository Admin immediately and rotate the key.
* **Vulnerabilities:** Reported security issues should be sent directly to `furolabs@gmail.com`—do not open a public issue.

---

## 🔀 Pull Request Requirements

* **Target Branch:** All PRs must target `dev`. Only Admins/Owners merge `dev` into `main`.
* **Description:** Include screenshots/screen-recordings for any UI changes.
* **Reviewers:** Tag at least one Owner or Lead Engineer for review.
* **Approval:** At least one "Approve" is required to merge.

---

## 👥 Access & Questions

If you are a new team member and need contributor access, please email `furolabs@gmail.com` with your GitHub username and role.

### 🚀 Let’s build a digital experience that reflects our engineering excellence.