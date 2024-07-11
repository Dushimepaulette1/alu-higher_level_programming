#!/usr/bin/python3
""" Function that adds a new attribute if possible """


def add_attribute(obj, attr, value):
    """ Adds new attribute to the object if possible """
    if not hasattr(obj, '__dict__'):
        raise TypeError("can't add new attribute")
    elif hasattr(obj, attr):
        raise TypeError("can't add new attribute")
    else:
        setattr(obj, attr, value)
