#!/usr/bin/python3

# Define the variables
a = 10
b = 5

# Import the functions from calculator_1
import calculator_1 as m

# Perform the calculations
result_add = m.add(a, b)
result_sub = m.sub(a, b)
result_mul = m.mul(a, b)
result_div = m.div(a, b)

# Print the results
print("{} + {} = {}".format(a, b, result_add))
print("{} - {} = {}".format(a, b, result_sub))
print("{} * {} = {}".format(a, b, result_mul))
print("{} / {} = {}".format(a, b, result_div))

if __name__ == "__main__":
    pass
