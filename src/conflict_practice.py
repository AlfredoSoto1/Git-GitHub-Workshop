"""A deliberately tiny file for the merge-conflict exercise."""


# TASK 4 (team exercise): Two teammates should edit this exact line differently
# on separate branches. Merging the branches should produce conflict markers.
TEAM_MESSAGE = "Replace this sentence during the conflict exercise."


def show_conflict_message() -> str:
    """Return the message that teammates will change in the conflict exercise."""
    return f"Team message: {TEAM_MESSAGE}"

