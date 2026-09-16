# TrailQuest: Git Workshop Starter

TrailQuest is a small browser adventure for learning Git and GitHub. Students collect progress by completing missions, customize their explorer, and add new content to the map. The project uses plain HTML, CSS, and JavaScript, so there is no framework, package manager, or build step to distract from the Git work.

The workshop follows the same path as the presentation:

```text
local repository -> commits -> GitHub -> branches -> push/pull -> merge conflict -> pull request
```

## Run it in a browser

The quickest option is to open `index.html` in a browser. For a local server that behaves more like a hosted site, run this in the repository folder:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). Stop the server with `Ctrl+C`.

The app saves the explorer name, completed missions, theme, and custom missions in the browser's local storage. A refresh should keep the progress.

## Solo phase

Students first work alone in a local clone.

1. Run `git status`, open the app, and explore the mission board.
2. Complete **Task 1** in `app.js` by changing the visible subtitle. Refresh the browser, inspect `git diff`, and make a focused commit.
3. Create a branch for **Task 2** and add a new mission to the route. Verify that it appears in the browser, then commit and push the branch.
4. Try **Task 3** if the class is ready for a slightly harder JavaScript change.

Useful commands:

```bash
git status
git diff
git add app.js
git commit -m "Update the TrailQuest subtitle"
git log --oneline
git switch -c feature/add-mission
git push -u origin feature/add-mission
```

## Team phase

Partner A creates an empty GitHub repository and adds the local repository as `origin`. Partner B accepts the collaborator invitation and clones it.

```bash
git remote add origin <github-repository-url>
git push -u origin main
git clone <github-repository-url>
```

Have each partner work on a separate branch. Before starting a new task, update local `main` with `git pull origin main`. Push branches to GitHub and use a pull request when the class is ready to discuss review.

## Intentional conflict

The file `app.js` contains one marked team line named `TEAM_QUOTE`. The full [merge-conflict walkthrough](docs/merge-conflict.md) has the exact sequence, but the important timing is:

1. Both partners create branches from the same starting `main` commit.
2. Partner A changes `TEAM_QUOTE`, commits, pushes, and merges into `main`.
3. Partner B changes that same line differently on the older branch.
4. Partner B pulls the updated `main` and runs `git merge main`.
5. Git pauses. The team resolves the markers, tests the browser app, commits the merge, and pushes the branch.

## Files to explore

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and accessible controls |
| `styles.css` | Visual design, responsive layout, and dark theme |
| `app.js` | State, rendering, browser interactions, and workshop tasks |
| `docs/tasks.md` | Solo and team exercise prompts |
| `docs/merge-conflict.md` | Step-by-step conflict exercise |

## A clean starting point

Students should make small commits and keep `main` working. If the class wants to repeat an exercise, clone a fresh copy or create a new branch from the initial workshop commit.

