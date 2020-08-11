#!/usr/bin/python3

import re, json

def read_json(path):
    with open(path, "r") as f:
        return json.loads(f.read())

pattern = r"\{\{([A-Za-z0-9_.]+)\}\}"
template = open("template.html", "r")

res_eng = open("index_eng.html", "w")
json_eng = read_json("data/eng/eng.json")
res_ru = open("index.html", "w")
json_ru = read_json("data/ru/ru.json")

for string in template:
    new_string_ru = string[:]
    new_string_eng = string[:]
    for entry in re.finditer(pattern, string):
        full, body = entry.group(0), entry.group(1)
        if body[-4:] == "html":
            with open('data/eng/' + body, 'r') as content:
                new_string_eng = new_string_eng.replace(full, content.read())
            with open('data/ru/' + body, 'r') as content:
                new_string_ru = new_string_ru.replace(full, content.read())
        else:
            new_string_eng = new_string_eng.replace(full, json_eng[body])
            new_string_ru = new_string_ru.replace(full, json_ru[body])

    res_ru.write(new_string_ru)
    res_eng.write(new_string_eng)


template.close()
res_ru.close()
res_eng.close()