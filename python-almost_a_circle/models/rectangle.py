#!/usr/bin/python3
"""
documentation file here
"""


from models.base import Base


class Rectangle(Base):
    """documentation"""

    def __init__(self, width, height, x=0, y=0, id=None):
        """init def"""
        super().__init__(id)
        self.width = width
        self.height = height
        self.x = x
        self.y = y

    @property
    def width(self):
        """comment width"""
        return self._width

    @width.setter
    def width(self, value):
        """comment width"""
        if not isinstance(value, int):
            raise TypeError("width must be an integer")
        if value <= 0:
            raise ValueError("width must be > 0")
        self._width = value

    @property
    def height(self):
        """Comment heigh"""
        return self._height

    @height.setter
    def height(self, value):
        """Comment heigh"""
        if not isinstance(value, int):
            raise TypeError("height must be an integer")
        if value <= 0:
            raise ValueError("height must be > 0")
        self._height = value

    @property
    def x(self):
        """comment x"""
        return self._x

    @x.setter
    def x(self, value):
        """comment x"""
        if not isinstance(value, int):
            raise TypeError("x must be an integer")
        if value < 0:
            raise ValueError("x must be >= 0")
        self._x = value

    @property
    def y(self):
        """comment y"""
        return self._y

    @y.setter
    def y(self, value):
        """comment y"""
        if not isinstance(value, int):
            raise TypeError("y must be an integer")
        if value < 0:
            raise ValueError("y must be >= 0")
        self._y = value

    def area(self):
        """to get the area of rectangle"""
        return self.width * self.height

    def display(self):
        """prints out"""
        for _ in range(self.y):
            print()
        for _ in range(self.height):
            print(" " * self.x + "#" * self.width)

    def __str__(self) -> str:
        return "[Rectangle] ({}) {}/{} - {}/{}".format(
            self.id, self.x, self.y, self.width, self.height
        )

    def update(self, *args, **kwargs):
        """update using args"""
        if args:
            attr = ["id", "width", "height", "x", "y"]
            for i, v in enumerate(args):
                setattr(self, attr[i], v)
        else:
            for key, value in kwargs.items():
                setattr(self, key, value)

    def to_dictionary(self):
        """commment dict"""
        return {
            "id": self.id,
            "width": self.width,
            "height": self.height,
            "x": self.x,
            "y": self.y,
        }
