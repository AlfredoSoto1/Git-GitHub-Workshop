# Workshop tasks

These prompts are intentionally small. Ask students to make one change at a time, inspect the diff, and commit after the tests pass.

## Task 1 — First edit (introductory)

In `src/workshop_tracker.py`, change `WORKSHOP_TITLE` to a title chosen by the class. Run the program and make one commit.

Suggested commit message: `Update the workshop title`

Questions to discuss:

- What changed in `git diff`?
- What is the difference between a working-tree change and a commit?
- How can `git log --oneline` show the new commit?

## Task 2 — Feature branch (introductory)

Create a branch named `feature/add-progress-label`. Update `status_message` so a student with 100% completion receives a special message, such as `Ada: finished!`. Keep the existing percentage format for students who are not finished.

Add a test for the new behavior, run all tests, commit, and push the branch.

## Task 3 — Add a feature (advanced)

Implement `unfinished_students(students)` in `src/workshop_tracker.py`. It should return a new list containing the records with fewer than four completed tasks. Do not change the original list.

Add tests for:

1. A list containing both finished and unfinished students.
2. An empty list.
3. A list where every student is finished.

Optional extension: accept `total_tasks` as a parameter instead of assuming four.

## Task 4 — Intentional merge conflict (team exercise)

Work with a partner. Both partners must begin from the same up-to-date `main` branch.

Partner A:

```bash
git switch main
git pull origin main
git switch -c conflict/partner-a
```

Edit the `TEAM_MESSAGE` line in `src/conflict_practice.py` to:

```python
TEAM_MESSAGE = "Message written by partner A."
```

Commit and push the branch. Merge it into `main` on GitHub, or have the instructor merge it.

Partner B, who has not yet merged the new `main` into their branch:

```bash
git switch main
git pull origin main
git switch -c conflict/partner-b
```

Edit the same `TEAM_MESSAGE` line to a different sentence:

```python
TEAM_MESSAGE = "Message written by partner B."
```

Commit the change, then update and merge `main` into the branch:

```bash
git add src/conflict_practice.py
git commit -m "Write a team message"
git switch main
git pull origin main
git switch conflict/partner-b
git merge main
```

Git should report a conflict. Open the file and find the markers:

```text
<<<<<<< HEAD
your branch's version
=======
the version from main
>>>>>>> main
```

Delete the markers and keep one sentence—or combine the ideas into a new sentence. Then finish the merge:

```bash
git add src/conflict_practice.py
python -m unittest discover -s tests -v
git commit -m "Resolve team message conflict"
git push -u origin conflict/partner-b
```

Discuss why Git could not decide which sentence was correct and why the person resolving the conflict must understand the intended behavior.

## Optional investigation tasks

- Use `git show <commit>` to inspect one commit.
- Use `git diff main..feature/add-progress-label` to compare branches.
- Create a branch, make two commits, and use `git log --graph --oneline --all` to visualize the history.
- Intentionally break a test, commit the broken version on a temporary branch, and use `git revert` to undo that commit.

