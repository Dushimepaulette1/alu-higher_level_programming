#!/usr/bin/python3
def magic_calculation(a, b):
    return 98 + (a ** b)


# Test cases to match expected outputs
def run_tests():
    # Test case 1
    result1 = magic_calculation(2, 3)
    print(result1)  # Expected output: 106

    # Test case 2
    result2 = magic_calculation(1, 100)
    print(result2)  # Expected output: 99 (since 1^100 is 1, so 98+1 is 99)

    # Test case 3
    result3 = magic_calculation(10, 10)
    print(result3)  # Expected output: 10^10 + 98

    # Test case 4
    result4 = magic_calculation(1, 1)
    print(result4)  # Expected output: 99 (since 1^1 is 1, so 98+1 is 99)


if __name__ == "__main__":
    run_tests()
