#!/usr/bin/python3

import sys

if __name__ == "__main__":
    # Retrieve the arguments
    argv = sys.argv[1:]  # Exclude the script name itself

    # Count the number of arguments
    num_args = len(argv)

    # Print the number of arguments
    if num_args == 0:
        print("0 arguments.")
    else:
        if num_args == 1:
            print("1 argument:")
        else:
            print(f"{num_args} arguments:")

        # Print each argument with its position
        for i, arg in enumerate(argv, start=1):
            print(f"{i}: {arg}")
