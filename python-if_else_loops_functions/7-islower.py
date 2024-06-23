#!/usr/bin/python3
def islower(c):
    if len(c) != 1:
        return "{} => upper".format(repr(c))
    elif 'a' <= c <= 'z':
        return "{} => lower".format(repr(c))
    else:
        return "{} => upper".format(repr(c))

# Test cases
print("a is {}".format(islower("a")))
print("H is {}".format(islower("H")))
print("A is {}".format(islower("A")))
print("3 is {}".format(islower("3")))
print("g is {}".format(islower("g")))
