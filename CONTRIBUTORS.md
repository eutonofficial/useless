# 💩 UselessOS™ Contributor Hall of Infamy & Guide

> *"Are you a developer? Do you secretly want to write bad code?"*

Live Playground: [useless.euton.co](https://useless.euton.co)  
Main Agency: [euton.co](https://euton.co)

---

## 📢 Calling All Over-Engineered Souls

At your day job, you are held hostage by:
- Linters screaming over trailing whitespace.
- Pull request reviewers debating if a variable should be camelCase or PascalCase.
- Senior architects preaching DRY, clean architecture, and micro-optimizations.
- 45-minute daily standups discussing 3 lines of CSS.

**Welcome home.**

In UselessOS, we celebrate bad code, 1,000-branch manual lookup tables, artificial server delays, 15-layer div soups, and zero utility. 

---

## 🚨 The Iron Contributor Commandments

Before submitting a Pull Request, please memorize these non-negotiable rules:

### 1. Instant Rejection for Code Improvements
If your Pull Request:
- Optimizes an O(N) lookup,
- Fixes intentional asymmetrical margins,
- Makes the user interface clean or intuitive,
- Simplifies complex logic into fewer lines,

**It will be immediately, ruthlessly, and automatically rejected.**

### 2. Strictly Zero Semicolons
Semicolons (`;`) are strictly forbidden across all `.ts` and `.tsx` files.  
Let Automatic Semicolon Insertion (ASI) live dangerously on the edge.  
Run `npm run lint:cursed` to test your code.

### 3. Commit Message Regulations
Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`, `test:`, etc.) are **banned**.  
Any commit containing professional conventional tags will fail CI (`npm run lint:commit`).

**Acceptable commit messages:**
- `made the button louder`
- `fixed nothing`
- `aaaaaaaaaaaa`
- `why does this work`
- `commit`
- `added 200 lines of pure chaos`
- `idk what i am doing`
- `i am sorry`

### 4. Test Suite Protection (Anti-Nerf Policy)
- You may **NOT** modify or delete existing core tests (`tests/even-odd.test.ts`, `tests/entropy.test.ts`, `tests/weekend.test.ts`).
- You cannot nerf assertions to make tests easier.
- **You ARE welcomed and encouraged to write brand new tests for brand new useless modules!**
- Verified via `npm run test:integrity`.

---

## 🧩 How to Submit a Digital Crime

1. **Fork the repository**.
2. **Create a cursed module** in `components/modules/YourAwfulModule.tsx`.
3. **Make it work 100% reliably** (modulo must calculate truth, buttons must function, results must be mathematically or logically sound).
4. **Wire up telemetry events** (`onIncrementClicks`, `onModuleCompleted`).
5. **Write tests** in `tests/your-module.test.ts`.
6. Verify locally:
   ```bash
   npm run lint:cursed
   npm run lint:commit
   npm run test:integrity
   npm test
   ```
7. Open a PR using our [Confession Booth Template](.github/pull_request_template.md).
8. Ensure all CI checks defined in [Rulesets](.github/RULESETS.md) pass before review.

---

## 🪙 Still Want to Pay Us Anyway? xD

If you survived this operating system and genuinely feel compelled to send crypto into the ether:

- **Solana (SOL) Address**:  
  `3PnBmtLsoMSDRfYhYCZj9zf71C3fxgPRcxK9K3fGm8AH`

---

## 🏢 Looking for Serious Software?

If you ever need real, high-performance web development, digital product design, and serious engineering:  
Visit our real agency: **[euton.co](https://euton.co)**
