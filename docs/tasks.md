# TrailQuest workshop tasks

These tasks start with one-person edits and end with a two-person merge. Keep the app open in the browser while working so students can see the result of each commit.

## Solo Task 1 — Change something visible

Open `app.js` and find `APP_CONFIG` near the top. Change the `subtitle` text to something your class likes. Open or refresh `index.html` in the browser.

Then inspect and commit the change:

```bash
git diff
git add app.js
git commit -m "Update the TrailQuest subtitle"
```

Discussion: What changed in the working tree? What did the commit record? Use `git show` to inspect the snapshot.

## Solo Task 2 — Add a mission on a branch

Create a branch before editing:

```bash
git switch -c feature/add-mission
```

In `STARTER_MISSIONS`, add one object with these fields:

```javascript
{
  id: "unique-id",
  icon: "★",
  label: "BONUS ROUTE",
  title: "A short mission name",
  detail: "A sentence that explains the mission.",
  points: 25,
}
```

Refresh the browser and confirm the mission appears. Complete it, observe the progress and XP counters, then commit and publish the branch:

```bash
git add app.js
git commit -m "Add a bonus TrailQuest mission"
git push -u origin feature/add-mission
```

## Solo Task 3 — Extend the interaction (advanced)

Add a fourth object to `BADGES`. Decide what achievement unlocks it and update `renderProfile()` so that the rule is visible in the browser. For example, award it when the explorer has earned at least 60 XP.

Optional extensions:

- Add a difficulty field to missions and display it in each card.
- Add a button that removes only custom missions.
- Add a filter that shows only cleared or uncleared missions.
- Improve the keyboard or screen-reader experience and explain the change in your commit message.

## Team Task 4 — Two branches, one feature each

Partner A and Partner B should clone the same repository and work on separate branches. Choose two independent improvements, such as a visual change in `styles.css` and a new input field in `index.html`. Each partner should:

1. Create a branch with `git switch -c feature/<short-name>`.
2. Make one focused change.
3. Refresh the browser and check the result.
4. Commit and push the branch.
5. Open a pull request or compare the branches with `git diff main..feature/<short-name>`.

Review each other's code before merging. Keep `main` working.

## Team Task 5 — Resolve the intentional conflict

Use the exact sequence in [merge-conflict.md](merge-conflict.md). The conflict is in `app.js`, where both partners edit the same `TEAM_QUOTE` line before one branch reaches `main`.

After the merge conflict appears, remove the conflict markers, keep or combine the messages, refresh the browser, and check that the team quote still renders. Finish with a merge commit and push the resolved branch.

## Git investigation cards

Use these as short demonstrations while students are working:

```bash
git status
git log --oneline --graph --all
git show <commit>
git diff main..feature/add-mission
git branch --all
git remote -v
```

Ask students to predict what each command will show before they run it.
