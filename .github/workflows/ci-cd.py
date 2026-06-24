<<<<<<< HEAD
def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero.")
    return a / b


def calculate(expression):
    parts = expression.strip().split()
    if len(parts) != 3:
        raise ValueError("Invalid expression. Use format: <num> <operator> <num>")

    a = float(parts[0])
    operator = parts[1]
    b = float(parts[2])

    if operator == "+":
        return add(a, b)
    elif operator == "-":
        return subtract(a, b)
    elif operator == "*":
        return multiply(a, b)
    elif operator == "/":
        return divide(a, b)
    else:
        raise ValueError(f"Unknown operator: {operator}")


def main():
    print("Simple Calculator")
    print("Enter expression (e.g. 5 + 3) or 'q' to quit:")

    while True:
        try:
            user_input = input("> ").strip()
            if user_input.lower() == "q":
                print("Goodbye!")
                break
            result = calculate(user_input)
            print(f"Result: {result}")
        except ValueError as e:
            print(f"Error: {e}")
        except EOFError:
            # Handles non-interactive input (e.g. echo "5 + 3" | python calculator.py)
            break


if __name__ == "__main__":
    main()
=======
name: Python CI

on:
  push:
    branches: [ "main", "master" ]
  pull_request:
    branches: [ "main", "master" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Check out the repository code
      - name: Checkout code
        uses: actions/checkout@v4

      # Step 2: Set up Python
      - name: Set up Python 3.11
        uses: actions/setup-python@v5
        with:
          python-version: "3.11"

      # Step 3: Install dependencies
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install flake8

      # Step 4: Lint the code with flake8
      - name: Lint with flake8
        run: |
          flake8 calculator.py --max-line-length=100

      # Step 5: Verify the script runs without errors
      - name: Run calculator smoke test
        run: |
          echo "5" | python calculator.py
>>>>>>> 4f32c6e1a726652769923976ac69190545622cf1
