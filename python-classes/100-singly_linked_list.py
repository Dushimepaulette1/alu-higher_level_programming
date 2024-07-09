#!/usr/bin/python3
"""Define classes for a singly linked list."""


class Node:
    """
    Define a node of a singly linked list.

    Attributes:
    data (int): Data stored in the node.
    next_node (Node or None): Reference to the next node in the linked list.
    """

    def __init__(self, data, next_node=None):
        """
        Initialize a new node with data and optional next node reference.

        Parameters:
        data (int): Data to be stored in the node.
        next_node (Node, optional):Defaults to None.

        Raises:
        TypeError: If data is not an integer.
        """
        self.data = data
        self.next_node = next_node

    @property
    def data(self):
        """
        Get/set the current data of the node.

        Returns:
        int: Data stored in the node.
        """
        return self.__data

    @data.setter
    def data(self, value):
        """
        Set the data of the node.

        Parameters:
        value (int): Data to set in the node.

        Raises:
        TypeError: If value is not an integer.
        """
        if not isinstance(value, int):
            raise TypeError("data must be an integer")
        self.__data = value

    @property
    def next_node(self):
        """
        Get/set the current next_node of the node.

        Returns:
        Node or None: Reference to the next node in the linked list.
        """
        return self.__next_node

    @next_node.setter
    def next_node(self, value):
        """
        Set the next_node of the node.

        Parameters:
        value (Node or None): Reference to the next node in the linked list.

        Raises:
        TypeError: If value is not a Node object.
        """
        if value is not None and not isinstance(value, Node):
            raise TypeError("next_node must be a Node object")
        self.__next_node = value


class SinglyLinkedList:
    """
    Define a singly linked list.

    Attributes:
    __head (Node or None): Reference to the head of the linked list.
    """

    def __init__(self):
        """
        Initialize an empty singly linked list.
        """
        self.__head = None

    def sorted_insert(self, value):
        """
        Insert a new node with the given value into the linked list.

        Parameters:
        value (int)
        """
        new_node = Node(value)
        tmp = self.__head
        add_stat = False

        if not self.__head:
            self.__head = new_node
            new_node.next_node = None
        else:
            if value < self.__head.data:
                add_stat = True
            while tmp.next_node and value > tmp.next_node.data and not add_stat:
                tmp = tmp.next_node
            if not add_stat:
                new_node.next_node = tmp.next_node
                tmp.next_node = new_node
            else:
                new_node.next_node = tmp
                self.__head = new_node
            new_node.data = value

    def __str__(self):
        """
        Return a string representation of the linked list.

        Returns:
        str: String representation of the linked list.
        """
        s = ""
        current = self.__head

        while current:
            s += str(current.data) + '\n'
            current = current.next_node
        return s[:-1]  # Removes the last newline character
