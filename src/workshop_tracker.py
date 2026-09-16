"""A tiny study-group progress tracker for Git practice.

The functions are intentionally straightforward. Students can focus on seeing
how code changes move through commits, branches, and merges.
"""


# TASK 1 (intro): Change this title, run ``python main.py``, and commit the edit.
WORKSHOP_TITLE = "Study Group Tracker"


def make_student(name: str, completed_tasks: int = 0) -> dict[str, object]:
    """Create a small record for one student."""
    return {"name": name.strip(), "completed_tasks": completed_tasks}


def completion_percent(student: dict[str, object], total_tasks: int = 4) -> int:
    """Return the student's completion percentage as a whole number.

    The value is kept between 0 and 100 so that one accidental number does not
    make the display confusing.
    """
    if total_tasks <= 0:
        raise ValueError("total_tasks must be greater than zero")

    completed = int(student["completed_tasks"])
    completed = max(0, min(completed, total_tasks))
    return round(completed / total_tasks * 100)


def status_message(student: dict[str, object], total_tasks: int = 4) -> str:
    """Return a friendly one-line progress message."""
    percent = completion_percent(student, total_tasks)

    # TASK 2 (intro): Add a special message for a student at 100% completion.
    # Keep the existing message for all other percentages.
    return f"{student['name']}: {percent}% complete"


def demo() -> str:
    """Build the sample output shown by ``main.py``."""
    students = [
        make_student("Ada", 4),
        make_student("Grace", 2),
        make_student("Linus", 1),
    ]
    lines = [WORKSHOP_TITLE]
    lines.extend(status_message(student) for student in students)
    return "\n".join(lines)


# TASK 3 (advanced): Add ``unfinished_students(students)``. It should return
# only the records whose completed task count is less than four. Add at least
# two tests in tests/test_workshop_tracker.py before committing your solution.

