#!/usr/bin/python3

# Define the variables
a = 10
b = 5

# Import the functions from calculator_1
from calculator_1 import add, sub, mul, div

# Perform the calculations
result_add = add(a, b)
result_sub = sub(a, b)
result_mul = mul(a, b)
result_div = div(a, b)

# Print the results
print("{} + {} = {}".format(a, b, result_add))
print("{} - {} = {}".format(a, b, result_sub))
print("{} * {} = {}".format(a, b, result_mul))
print("{} / {} = {}".format(a, b, result_div))

if __name__ == "__main__":
    pass
