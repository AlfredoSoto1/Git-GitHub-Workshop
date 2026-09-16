# Merge-conflict walkthrough

This is the short version of Task 4. It assumes two partners and a shared GitHub repository.

1. Both partners update to the same `main` commit. Partner A creates `conflict/partner-a`, changes the `TEAM_MESSAGE` line, commits, and pushes the branch.
2. Before Partner A's branch is merged, Partner B creates `conflict/partner-b` from that same starting commit, changes the exact same line to a different value, commits, and pushes.
3. Partner A's branch is merged into `main` on GitHub. Partner B runs `git switch main`, `git pull origin main`, switches back to `conflict/partner-b`, and runs `git merge main`.
4. Git stops and reports a conflict because both branches changed the same line.
5. Partner B opens `src/conflict_practice.py`, chooses or combines the two messages, and removes all `<<<<<<<`, `=======`, and `>>>>>>>` marker lines.
6. Partner B runs the tests, stages the resolved file, commits the merge, and pushes the branch.

Useful commands while resolving:

```bash
git status
git diff
python -m unittest discover -s tests -v
git add src/conflict_practice.py
git commit -m "Resolve team message conflict"
```

To cancel the merge demonstration and return to the state before `git merge main`, run:

```bash
git merge --abort
```

Only use `git merge --abort` while a merge is in progress and before staging a resolution.
