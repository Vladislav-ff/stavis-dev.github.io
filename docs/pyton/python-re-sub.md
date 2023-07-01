---
author: pykili.github.io
title: Замена текста рeгулярными выражениями
date: "2022-02-09"
description: "Замена текста с помощью регулярных выражений в python"
math: true
tags: ["regex", "re", "регулярные выражения"]
categories: ["python", "regex"]
---

## Замены в регулярных выражениях

В стандартных строках Python есть функция `.replace(old, new)`, которую можно успешно использовать для замены одной строки на другую:

```python
string = 'Алёна мыла ёлку!'
print(string.replace('ё', 'е'))
Алена мыла елку!
```

Но, что, делать в более сложных случаях? Ну не писать же несколько раз вызов функции `.replace()` с разными аргументами

```python
string = 'Ёлку мыла Алёна...'
print(string.replace('ё', 'е').replace('Ё', 'Е'))
Елку мыла Алена...
```

На помощь приходят регулярные выражения и модуль `re` со своей функцией `re.sub()`.

Сигнатура методы такая: `re.sub(pattern, repl, string)`, где

* **pattern** - это регулярное выражение - шаблон для поиска строки, которую нужно заменить
* **repl** - строка, на которую нужно произвести замену
* **string** - сама строка, над которой нужно произвести манипуляции

Метод `re.sub()` ищет шаблон `pattern` в строке `string` и заменяет его на `repl`.
Метод возвращает **новую** строку. Если шаблон не найден в строке, то текст возвращается без изменений.


```python
 # Задача: заменить все числа на слово NUM
#
import re
string = 'Мой дядя родился в 48 году и в 2000 ему было 52'
pattern = '[0-9]+'
print(re.sub(pattern, 'NUM', string))
Мой дядя родился в NUM году и в NUM ему было NUM
```

> Пример с Алёной и заглавной и строчной буквой ё нельзя запрограммировать одной регуляркой. Подумайте, как можно сделать такую функцию, используя регулярки.


## Использование групп при заменах

Представьте, что вам нужно написать функцию, которая будет менять американский формат записи даты `MM/DD/YYYY` на русский `DD.MM.YYYY`. Сейчас не будем говорить, про то, что дни могут быть только в диапазоне от 1 до 31, а месяцы от 1 до 12.

Функция может иметь следующий вид:

```python
def convert_dates(text):

    pattern = '([0-9]{2})/([0-9]{2})/([0-9]{4})'
    result = re.search(pattern, text)

    if result:
        mm = result.group(1)
        dd = result.group(2)
        yyyy = result.group(3)
        new_date = dd + '/' + mm + '/' + yyyy
        start, stop = result.span()
        text = text[:start] + new_date + text[stop:]

    return text
```

И работать так:

```python
convert_dates('Я влюбился в тебя 03/21/2017.')
'Я влюбился в тебя 21/03/2017.'
```

Но, что если, дат в тексте будет больше, чем одна. Да и вообще, неужели нужно писать столь сложный код для такой логики?

На помощь приходят группы. Функцию выше можно переписать так:

```python
def convert_dates(text):

    pattern = '([0-9]{2})/([0-9]{2})/([0-9]{4})'
    repl = r'\2/\1/\3'

    return re.sub(pattern, repl, text)
```

А использовать так же:

```python
convert_dates('Я влюбился в тебя 03/21/2017. Мои родители познакомились 03/21/1999')
'Я влюбился в тебя 21/03/2017. Мои родители познакомились 21/03/1999'
```

Здесь `repl` - это еще один шаблон, который говорит функции `re.sub()` куда вставить ту или иную группы из шаблона `pattern`. Выглядит конечно страшно, но куда деваться.

Как, наверное, можно догадаться, `\N` - это указание на конкретную группу из шаблона `pattern`, которую нужно подставить. `N` - это номер группы.


## Именованные группы

Когда количество групп в шаблонах увеличивается, то становится трудно с ними работать. Можно легко запутаться в индексах и допустить ошибку. Здесь на помощь приходят именованные группы, с помощью которых можно дать каждой группе своё имя. Осталось только привыкнуть к синтаксису.

Что, если, в наш пример с датой добавится еще и время...

```python
def convert_dates(text):

    pattern = '(?P<m>[0-9]{2})/(?P<d>[0-9]{2})/(?P<y>[0-9]{4}) (?P<hm>[0-9]{2}:[0-9]{2})'
    repl = r'\g<d>/\g<m>/\g<y> в \g<hm>'

    return re.sub(pattern, repl, text)
```

```python
convert_dates('Я влюбился в тебя 03/21/2017 23:45 по московскому времени')
'Я влюбился в тебя 21/03/2017 в 23:45 по московскому времени'
```

`(?P<m>[0-9]{2})` - `?P<m>` - специальный синтаксис задания имени группы. Имя здесь только то, что заключено в скобки.

Обращение к группе происходит тоже с помощью специального синтаксиса: `\g<d>`

Имена групп можно использовать в методе `.group()`

```python
def get_mail_provider(email):

    pattern = '(?P<login>[a-zA-Z0-9_]+)@(?P<provider>(?P<name>[a-zA-Z0-9_]+)\.(?P<domain>[a-zA-Z]+))'
    result = re.search(pattern, email)

    if result:
        return result.group('provider')

    return None
```

```python
get_mail_provider('ivan@yandex.ru')
'yandex.ru'
```

>[Оригинал статьи](https://github.com/pykili/pykili.github.io/blob/master/_docs/prog/18-regexp-sub.md)