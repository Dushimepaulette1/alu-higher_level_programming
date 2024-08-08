#!/usr/bin/python3
"""comment"""

import json
import os


class Base:
    """Commnet"""

    __nb_objects = 0

    def __init__(self, id=None):
        """intro"""
        if id is not None:
            self.id = id
        else:
            Base.__nb_objects += 1
            self.id = Base.__nb_objects

    @staticmethod
    def to_json_string(list_dictionaries):
        """comment json"""
        if list_dictionaries is None:
            return "[]"
        return json.dumps(list_dictionaries)

    @classmethod
    def save_to_file(cls, list_objs):
        """Comment for saving"""
        filename = f"{cls.__name__}.json"
        if list_objs is None:
            list_dictionaries = []
        else:
            list_dictionaries = [obj.to_dictionary() for obj in list_objs]
        json_string = cls.to_json_string(list_dictionaries)
        with open(filename, "w") as f:
            f.write(json_string)

    @staticmethod
    def from_json_string(json_string):
        """comment json string"""
        if json_string is None:
            return []
        return json.loads(json_string)

    @classmethod
    def create(cls, **dictionary):
        """create"""
        if cls.__name__ == "Rectangle":
            data = cls(3, 2)
        if cls.__name__ == "Square":
            data = cls(3)
        data.update(**dictionary)
        return data

    @classmethod
    def load_from_file(cls):
        """Load a list"""
        data_list = []
        try:
            with open("{}.json".format(cls.__name__), "r") as file:
                data = file.read()
        except FileNotFoundError:
            return []
        prev_data = cls.from_json_string(data)
        for instance_dict in prev_data:
            data_list.append(cls.create(**instance_dict))
        return data_list
