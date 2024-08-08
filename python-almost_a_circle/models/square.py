#!/usr/bin/python3
"""comment"""


from models.rectangle import Rectangle


class Square(Rectangle):
    """cooment new sqaure"""

    def __init__(self, size, x=0, y=0, id=None):
        """comment"""
        super().__init__(size, size, x, y, id)

    def __str__(self):
        """comment for this"""
        return "[Square] ({}) {}/{} - {}".format(
                    self.id, self.x, self.y, self.width)

    @property
    def size(self):
        """commnet size"""
        return self.width

    @size.setter
    def size(self, value):
        """setter size"""
        self.width = value
        self.height = value

    def update(self, *args, **kwargs):
        """update size class"""
        if args:
            attr = ["id", "size", "x", "y"]
            for i, v in enumerate(args):
                setattr(self, attr[i], v)
        else:
            for i, v in kwargs.items():
                setattr(self, i, v)

    def to_dictionary(self):
        """comment for dictionary"""
        return {
            "id": self.id,
            "size": self.size,
            "x": self.x,
            "y": self.y,
        }
