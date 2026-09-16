"""Run the study group tracker demo."""

from src.conflict_practice import show_conflict_message
from src.workshop_tracker import demo


def main() -> None:
    print(demo())
    print()
    print(show_conflict_message())


if __name__ == "__main__":
    main()

