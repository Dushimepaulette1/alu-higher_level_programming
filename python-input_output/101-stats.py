#!/usr/bin/python3
"""
    This module reads from stdin line by line, computes metrics, and prints them.
"""

import sys

def print_stats(total_size, status_counts):
    """Prints the current statistics"""
    print(f"File size: {total_size}")
    for status in sorted(status_counts.keys()):
        if status_counts[status] > 0:
            print(f"{status}: {status_counts[status]}")

def read_and_out():
    """Read from stdin and process each line"""
    total_size = 0
    status_counts = {200: 0, 301: 0, 400: 0, 401: 0, 403: 0, 404: 0, 405: 0, 500: 0}
    line_count = 0

    try:
        for line in sys.stdin:
            line_count += 1
            parts = line.split()
            if len(parts) >= 9:
                try:
                    file_size = int(parts[-1])
                    total_size += file_size

                    status_code = int(parts[-2])
                    if status_code in status_counts:
                        status_counts[status_code] += 1
                except ValueError:
                    continue  # Skip lines with incorrect format

            if line_count % 10 == 0:
                print_stats(total_size, status_counts)

    except KeyboardInterrupt:
        print_stats(total_size, status_counts)
        raise

    print_stats(total_size, status_counts)

if __name__ == "__main__":
    read_and_out()

