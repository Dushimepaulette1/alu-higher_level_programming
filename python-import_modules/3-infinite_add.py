#!/usr/bin/python3

import sys

if __name__ == "__main__":
    # Retrieve the arguments
    args = sys.argv[1:]  # Exclude the script name itself
    
    # Convert arguments to integers and calculate the sum
    total_sum = sum(int(arg) for arg in args)
    
    # Print the result
    print(total_sum)
