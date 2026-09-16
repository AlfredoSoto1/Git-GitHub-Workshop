# Git Workshop: Study Group Tracker

This repository is a small Python project for practicing the everyday Git workflow:

```text
clone -> edit -> test -> commit -> push -> pull -> branch -> merge
```

The code is deliberately small so that the Git changes stay easy to see. It works for an introductory programming class, and the optional tasks add a little more design and testing practice for advanced students.

## What students will practice

- Reading a repository and running an existing program
- Making small, focused commits
- Creating, switching, and deleting branches
- Pulling changes made by someone else
- Pushing a branch to GitHub
- Merging branches
- Resolving a real merge conflict
- Writing or extending simple tests

## Quick start

Students can use the GitHub **Code** button to copy the clone URL, then run:

```bash
git clone <repository-url>
cd git-workshop
python main.py
python -m unittest discover -s tests -v
```

If the repository has a different name after cloning, use that folder name in the `cd` command. Python 3.9 or newer is recommended. The project uses only the Python standard library.

## Suggested workshop sequence

### 1. Explore and make a first commit

```bash
git status
git log --oneline
python main.py
```

Open `src/workshop_tracker.py` and complete **Task 1** by changing the workshop title. Then:

```bash
git diff
git add src/workshop_tracker.py
git commit -m "Update the workshop title"
git log --oneline
```

### 2. Practice a feature branch

Create a branch before doing **Task 2**:

```bash
git switch -c feature/add-progress-label
```

Make the change, run the tests, and commit it. Students with GitHub access can publish the branch with:

```bash
git push -u origin feature/add-progress-label
```

Return to `main` and compare the results:

```bash
git switch main
git log --oneline --all --decorate
git switch feature/add-progress-label
```

### 3. Practice pulling a teammate's work

One student pushes a branch or merges a small change into the shared GitHub repository. The other student updates their local `main` branch:

```bash
git switch main
git pull origin main
```

Have students inspect the new commit with `git log --oneline` and run the tests again.

### 4. Resolve the intentional conflict

Follow [docs/merge-conflict.md](docs/merge-conflict.md). Both partners edit the same line in `src/conflict_practice.py` in different ways. Git will be unable to choose one version, which gives the class a safe, small conflict to resolve.

## Exercise map

| Exercise | File | Main idea |
| --- | --- | --- |
| Task 1 | `src/workshop_tracker.py` | Make a small edit and commit it |
| Task 2 | `src/workshop_tracker.py` | Work on a feature branch |
| Task 3 | `src/workshop_tracker.py` | Add a function and its tests |
| Task 4 | `src/conflict_practice.py` | Resolve a merge conflict |
| Advanced | `src/workshop_tracker.py` | Improve validation and edge-case tests |

The full task prompts are in [docs/tasks.md](docs/tasks.md).

## Resetting between demonstrations

If the class changes the files and you want a clean copy, the safest option is to delete the clone and clone it again. If a student has uncommitted work, save it first with a commit or `git diff > my-work.patch`.

