#!/usr/bin/python3

# Define the variables
a = 10
b = 5

# Import the functions from calculator_1
import calculator_1

# Perform the calculations
result_add = calculator_1.add(a, b)
result_sub = calculator_1.sub(a, b)
result_mul = calculator_1.mul(a, b)
result_div = calculator_1.div(a, b)

# Print the results
print("{} + {} = {}".format(a, b, result_add))
print("{} - {} = {}".format(a, b, result_sub))
print("{} * {} = {}".format(a, b, result_mul))
print("{} / {} = {}".format(a, b, result_div))

if __name__ == "__main__":
    pass
