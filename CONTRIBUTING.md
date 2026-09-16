# Contributing during the workshop

Use one branch per exercise. Keep each commit focused on one idea and use a message that explains the change.

```bash
git switch main
git pull origin main
git switch -c feature/short-description

# edit files
python -m unittest discover -s tests -v
git status
git diff
git add <file>
git commit -m "Describe the change"
git push -u origin feature/short-description
```

Before starting another task, update `main` so that your branch starts from the latest shared work. If Git reports a conflict, pause and resolve it with the instructions in [docs/merge-conflict.md](docs/merge-conflict.md).

## Commit checklist

- Does the program still run?
- Do the tests pass?
- Does the commit contain only the intended files?
- Does the commit message describe the change?

