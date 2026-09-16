import unittest

from src.workshop_tracker import completion_percent, make_student, status_message


class WorkshopTrackerTests(unittest.TestCase):
    def test_make_student_strips_the_name(self):
        student = make_student("  Ada  ", 2)

        self.assertEqual(student, {"name": "Ada", "completed_tasks": 2})

    def test_completion_percent(self):
        student = make_student("Grace", 2)

        self.assertEqual(completion_percent(student), 50)

    def test_completion_percent_stays_in_range(self):
        self.assertEqual(completion_percent(make_student("Ada", 8)), 100)
        self.assertEqual(completion_percent(make_student("Linus", -1)), 0)

    def test_status_message(self):
        student = make_student("Linus", 1)

        self.assertEqual(status_message(student), "Linus: 25% complete")

    def test_zero_total_tasks_is_invalid(self):
        with self.assertRaises(ValueError):
            completion_percent(make_student("Ada"), 0)


if __name__ == "__main__":
    unittest.main()

