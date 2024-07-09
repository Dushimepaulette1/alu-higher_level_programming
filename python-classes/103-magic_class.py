#!/usr/bin/python3

"""
Define a MagicClass for circle calculations.
"""

import math


class MagicClass:
    """
    Represents a circle with methods for area and circumference.

    Attributes:
        __radius (int, float): Radius of the circle.
    """

    def __init__(self, radius=0):
        """
        Initialize the circle with a radius.

        Parameters:
            radius (int, float): Radius of the circle.

        Raises:
            TypeError: If radius is not a number.
        """
        self.__radius = 0
        if not isinstance(radius, (int, float)):
            raise TypeError('radius must be a number')
        self.__radius = radius

    def area(self):
        """
        Calculate and return the area of the circle.

        Returns:
            float: Area of the circle.
        """
        return self.__radius ** 2 * math.pi

    def circumference(self):
        """
        Calculate and return the circumference of the circle.

        Returns:
            float: Circumference of the circle.
        """
        return 2 * math.pi * self.__radius
