#!/usr/bin/python3

import re, json

pattern = r"\{\{([A-Za-z0-9_.]+)\}\}"
template = open("template.html", "r")

for string in template:
    new_string = string[:]
    for entry in re.finditer(pattern, string):
        new_string = new_string.replace(entry.group(0), "bla-bla")
    print(new_string)


template.close()