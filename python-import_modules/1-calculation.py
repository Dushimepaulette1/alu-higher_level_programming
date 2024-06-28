#!/usr/bin/python3

if __name__ == "__main__":
    """
    Imports functions from a module, does some Maths.
    """
    from calculator_1 import add, sub, mul, div
    
    # Define the variables
    a = 10
    b = 5
    
    # Perform the calculations and print the results
    print("{} + {} = {}".format(a, b, add(a, b)))
    print("{} - {} = {}".format(a, b, sub(a, b)))
    print("{} * {} = {}".format(a, b, mul(a, b)))
    print("{} / {} = {}".format(a, b, div(a, b)))
