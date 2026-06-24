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
