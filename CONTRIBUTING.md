# Contribution Guidelines: Official FURO Labs Website

This repository serves as the primary digital presence for FURO Labs. Given its visibility and brand impact, we maintain rigorous standards for code quality, security, and architectural integrity.

> [!CAUTION]
> **Proprietary Notice:** Access to this repository is restricted to authorized FURO Labs employees, owners, and designated administrators. External contributions are not accepted. Unauthorized pull requests will be closed without review.

---

## Deployment Workflow

The official website follows a strict multi-tier promotion strategy to ensure production stability. Development occurs on the `dev` branch before being promoted to `main` for release.

1. **Synchronization:** Ensure your local `dev` branch is synchronized with the upstream origin.
2. **Branching:** Create a feature branch originating from `dev` using descriptive prefixes.
* Example: `git checkout -b feat/team-update dev`


3. **Implementation:** Develop changes following the established [Technical Specifications](#technical-specifications).
4. **Verification:** Execute all local validation checks, including linting, type-checking, and build tests.
5. **Submission:** Open a Pull Request targeting the **`dev`** branch.

---

## Technical Quality Standards

Before submitting a Pull Request, all contributors must verify that the following criteria are met:

* **Build Integrity:** The application must compile successfully via `npm run dev` or `npm run build` without console warnings or errors.
* **Type Safety:** Strict TypeScript compliance is required. The use of `any` types is prohibited. Run `npm run typecheck` to verify.
* **Code Linting:** All code must pass ESLint configurations via `npm run lint`.
* **Credential Security:** Verify that no Firebase API keys, service accounts, or `.env` variables are included in the commit history.
* **Design Alignment:** UI components and animations must adhere to the defined brand identity and utilize `framer-motion` for interaction consistency.

---

## Brand Identity and Design Systems

All interface modifications must comply with the FURO Labs visual identity:

* **Color Palette:**
* Primary: Futuristic Cyan (`#3BE2FF`)
* Accent: Electric Purple (`#C452FF`)
* Background: Dark Navy (`#121E29`)


* **Typography:** 'Space Grotesk' for headlines; standard sans-serif for body text.
* **Iconography:** Strictly limited to `lucide-react` or `@tabler/icons-react`.

---

## Technical Specifications

* **Framework:** Next.js (App Router) utilizing TypeScript.
* **Styling:** Tailwind CSS integrated with Radix UI primitives.
* **Backend:** Firebase Firestore (managed via environment-driven configurations).
* **AI Architecture:** Genkit flows must be contained within the `src/ai` directory.
* **Static Content:** Team-related metadata and bios are managed in `src/components/sections/team.tsx`.

---

## Security and Confidentiality

While this repository is public for infrastructure optimization, the contents remain the proprietary intellectual property of FURO Labs.

* **Environment Management:** Use `.env.local` for development. Never commit sensitive credentials to source control.
* **Secret Mitigation:** In the event of a credential leak, notify a Repository Administrator immediately to initiate rotation.
* **Vulnerability Reporting:** Do not open public issues for security flaws. Direct all sensitive reports to [furolabs@gmail.com](mailto:furolabs@gmail.com).

---

## Pull Request Requirements

* **Branch Targeting:** All PRs must target the `dev` branch. Direct merges to `main` are reserved for official releases by Administrators.
* **Documentation:** PR descriptions must include a clear summary of changes and, where applicable, visual evidence (screenshots or screen recordings) of UI modifications.
* **Review Process:** Assign at least one Lead Engineer or Owner for review.
* **Approval Policy:** A minimum of one formal approval is required for a merge.

---

## Access and Inquiries

For contributor access or technical questions regarding this repository, please contact the administration team at [furolabs@gmail.com](mailto:furolabs@gmail.com) with your GitHub username and organizational role.