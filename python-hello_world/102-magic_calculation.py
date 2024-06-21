#!/usr/bin/python3
def magic_calculation(a, b):
    return 98 + (a ** b)


def run_tests():
    result1 = magic_calculation(2, 3)
    print(result1)


    result2 = magic_calculation(1, 100)
    print(result2)


    result3 = magic_calculation(10, 10)
    print(result3)


    result4 = magic_calculation(1, 1)
    print(result4)


if __name__ == "__main__":
    run_tests()
