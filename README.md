# Our Development Team

This repository contains a super-simple, single-page team portfolio for an HTML, CSS, and JavaScript Git workshop. Students personalize the page, work in separate branches, and then combine their work through GitHub.

The page includes:

- A team header and About Us section
- Separate Partner A and Partner B profile cards
- A shared skills list
- A shared Project Ideas section
- A small JavaScript theme toggle

There is no framework, package manager, or build step.

## Workshop flow

### 1. Solo warm-up

Open `app.js`, change the `TEAM_INFO` tagline, refresh the page, and inspect the change:

```bash
git status
git diff
```

Make the first commit only after students can explain what changed.

### 2. Partner A and Partner B

Partner A edits only the `PARTNER_A` object. Partner B edits only the `PARTNER_B` object. Each partner creates a branch, tests their change in the browser, commits, pushes, and opens a pull request.

The detailed assignment is in [docs/tasks.md](docs/tasks.md).

### 3. Pull, merge, and conflict resolution

After the profile branches, each partner can make a separate styling or skills change. The intentional conflict exercise uses the placeholder object in `PROJECT_IDEAS`: both partners replace that same object with different project ideas on separate branches.

Read [docs/merge-conflict.md](docs/merge-conflict.md) for the exact sequence. The important timing is that Partner B creates their branch before Partner A's branch is merged into `main`.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | One-page portfolio structure |
| `styles.css` | Portfolio layout, colors, responsive design, and dark theme |
| `app.js` | Team content, rendering, theme toggle, and task comments |
| `docs/tasks.md` | Separate solo, Partner A, Partner B, and team tasks |
| `docs/merge-conflict.md` | Intentional same-code-block conflict walkthrough |

## Useful commands

```bash
git status
git diff
git log --oneline --graph --all
git branch --all
git remote -v
```

This working copy intentionally has no new automatic commit from the redesign. Review the changes, then stage and commit them when you are ready.

