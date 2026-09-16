# Intentional merge-conflict walkthrough

This exercise makes Git stop on purpose. It mirrors the presentation's example where two branches edit the same line in different ways.

## Before starting

Both partners need the same clean `main` commit. Do not start the exercise with uncommitted changes. Partner B must create their branch before Partner A merges into `main`.

## Create the two competing changes

Partner A:

```bash
git switch main
git pull origin main
git switch -c conflict/partner-a
```

In `app.js`, change only the `TEAM_QUOTE` line to:

```javascript
const TEAM_QUOTE = "Partner A says every trail should have a clear signpost.";
```

Commit and push the branch, but wait before merging:

```bash
git add app.js
git commit -m "Add partner A team message"
git push -u origin conflict/partner-a
```

Partner B now creates their branch from the same original `main` commit. If both partners use the same clone, Partner B should create the branch before Partner A's branch is merged:

```bash
git switch main
git switch -c conflict/partner-b
```

In `app.js`, change the same `TEAM_QUOTE` line to:

```javascript
const TEAM_QUOTE = "Partner B says the best routes leave room for others.";
```

Commit and push:

```bash
git add app.js
git commit -m "Add partner B team message"
git push -u origin conflict/partner-b
```

## Trigger the conflict

Partner A merges `conflict/partner-a` into `main` on GitHub, or the instructor merges it. Partner B then updates local `main` and merges it into the older branch:

```bash
git switch main
git pull origin main
git switch conflict/partner-b
git merge main
```

Git should report a conflict because both branches changed the same line differently.

## Resolve and verify

Open `app.js`. Git will show the two competing lines between markers labeled `<<<<<<< HEAD`, `=======`, and `>>>>>>> main`.

Choose one message or write a third message that combines the idea. Delete all marker lines. Save the file, refresh the browser, and confirm the quote in the orange Team Signal section is readable.

Finish the merge:

```bash
git status
git diff
git add app.js
git commit -m "Resolve team message conflict"
git push origin conflict/partner-b
```

If the class wants to cancel the demonstration before resolving it:

```bash
git merge --abort
```

Only use `git merge --abort` while the merge is still in progress.
