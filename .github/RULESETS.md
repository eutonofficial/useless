# 🛡️ UselessOS™ Repository Rulesets Specification

This document outlines the rulesets configured for the `eutonofficial/useless` repository.

---

## 🔒 Branch: `main` Protection

### Target Branches
- `main`

### Rules
1. **Require status checks to pass before merging**:
   - `curse-check` (Actions / Strict Anti-Lint & Commit Cursedness Check)
     - `npm run lint:cursed` (Zero semicolons)
     - `npm run lint:commit` (Chaos commit message check)
   - `auto-screen-pr` (Actions / Automated Anti-Improvement PR Screener)
     - `npm run screen:pr` (Rejects PRs with phrases like "improved performance", "clean code", etc.)
   - `test-ironclad` (Actions / Rigorous Test & Anti-Nerf Integrity)
     - `npm run test:integrity` (Prevents modifying or deleting existing core tests)
     - `npm test` (Vitest must pass 100%)

2. **Block force pushes**:
   - Force pushes to `main` are disabled to preserve every tragic commit in git history.

3. **Require a Pull Request before merging**:
   - All contributions must pass through a pull request and the confession template.

---

## 🚫 Forbidden Contributions
- Any commit starting with `feat:`, `fix:`, `chore:`, `refactor:`, etc.
- Any file containing trailing semicolons.
- Any attempt to optimize code or fix intentional UX friction.

---

## 🚀 Live App & Agency Links
- Parody Playground: [useless.euton.co](https://useless.euton.co)
- Real Software Agency: [euton.co](https://euton.co)
