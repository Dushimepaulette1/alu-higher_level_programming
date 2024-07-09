#!/usr/bin/python3

"""
Define a square with size attribute and comparison methods.
"""


class Square:
    """
    Represents a square with size and comparison methods.

    Attributes:
        size (int): Side length of the square.
    """

    def __init__(self, size=0):
        """
        Initialize the square with size.

        Parameters:
            size (int, optional): Side length of the square. Defaults to 0.

        Raises:
            TypeError: If size is not an integer.
            ValueError: If size is negative.
        """
        self.size = size

    def area(self):
        """
        Calculate and return the area of the square.

        Returns:
            int: Area of the square (size^2).
        """
        return self.size ** 2

    @property
    def size(self):
        """
        Getter method for the size of the square.

        Returns:
            int: Side length of the square.
        """
        return self.__size

    @size.setter
    def size(self, value):
        """
        Setter method for the size of the square.

        Parameters:
            value (int): Side length of the square.

        Raises:
            TypeError: If value is not an integer.
            ValueError: If value is negative.
        """
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def __lt__(self, other):
        """
        Less than comparison.

        Parameters:
            other (Square): Another square to compare with.

        Returns:
            bool: True if this square's area is less than the other's.
        """
        return self.area() < other.area()

    def __le__(self, other):
        """
        Less than or equal comparison.

        Parameters:
            other (Square): Another square to compare with.

        Returns:
            bool: True if this square's area is less or equal to the other's.
        """
        return self.area() <= other.area()

    def __eq__(self, other):
        """
        Equal comparison.

        Parameters:
            other (Square): Another square to compare with.

        Returns:
            bool: True if this square's area is equal to the other's.
        """
        return self.area() == other.area()

    def __ne__(self, other):
        """
        Not equal comparison.

        Parameters:
            other (Square): Another square to compare with.

        Returns:
            bool: True if this square's area is not equal to the other's.
        """
        return self.area() != other.area()

    def __gt__(self, other):
        """
        Greater than comparison.

        Parameters:
            other (Square): Another square to compare with.

        Returns:
            bool: True if this square's area is greater than the other's.
        """
        return self.area() > other.area()

    def __ge__(self, other):
        """
        Greater than or equal comparison.

        Parameters:
            other (Square): Another square to compare with.

        Returns:
            bool: True if this square's area is greater or equal to the other's.
        """
        return self.area() >= other.area()

