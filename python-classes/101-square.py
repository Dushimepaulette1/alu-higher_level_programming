#!/usr/bin/python3

"""
Define a square with size and position attributes.
"""


class Square:
    """
    Represents a square with size and position.

    Attributes:
        size (int): Size of the square's side length.
        position (tuple): Position coordinates of the square.
    """

    def __init__(self, size=0, position=(0, 0)):
        """Initialize the square with size and position."""
        self.size = size
        self.position = position

    def area(self):
        """Calculate and return the area of the square."""
        return self.size ** 2

    @property
    def size(self):
        """Getter method for the size of the square."""
        return self.__size

    @size.setter
    def size(self, value):
        """Setter method for the size of the square."""
        self.__size = value
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")

    def my_print(self):
        """Print the square using '#' characters based on size and position."""
        if self.size == 0:
            print("")
        else:
            for _ in range(self.position[1]):
                print("")
            for _ in range(self.size):
                print(" " * self.position[0] + "#" * self.size)

    @property
    def position(self):
        """Getter method for the position coordinates of the square."""
        return self.__position

    @position.setter
    def position(self, value):
        """Setter method for the position coordinates of the square."""
        if not isinstance(value, tuple) or len(value) != 2:
            raise TypeError("position must be a tuple of 2 positive integers")
        if any(not isinstance(i, int) or i < 0 for i in value):
            raise TypeError("position must be a tuple of 2 positive integers")
        self.__position = value

    def __str__(self):
        """Return a string representation of the square, similar to my_print"""
        result = ""
        if self.size == 0:
            return result

        for _ in range(self.position[1]):
            result += "\n"

        for _ in range(self.size):
            result += " " * self.position[0] + "#" * self.size + "\n"

        return result.rstrip()  # Remove trailing newline in the last line


if __name__ == "__main__":
    # Example usage
    square = Square(5, (2, 3))
    print("Area:", square.area())
    square.my_print()
