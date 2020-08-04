all: data/eng.json data/ru.json template.html
	mustache data/eng.json template.html > index_eng.html
	mustache data/ru.json template.html > index.html