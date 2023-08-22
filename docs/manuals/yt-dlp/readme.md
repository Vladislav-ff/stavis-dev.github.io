---
sidebar_label: "Команды yt-dlp"

author: Stavis
date: "2022-12-24"

title: "yt-dlp управление"
description: "yt-dlp как качать любое видео из интернета"
tags: ["yt-dlp", "youtube-dl"]

image: "yt-dlp-header.webp"

---

![TDD Banner](yt-dlp-header.webp)


## Опции {#options}

Настройки: ключей. Полный список в [реозитории](https://github.com/yt-dlp/yt-dlp#general-options). 

| Name | Short | Description |
| --- | --- | --- |
| `--list-formats` | `-F` |  Отобразить список доступных форматов медиа фалов. |
| `--format` | `-f` | Указать необходимый формат ролика |
| `--write-link` | | Сохранит ссылку на источник |
Со сторонних сайтов искать плейлисты в формате `m3u8`.

### Форматы видео 

Установка формата медиа файла производится ключом `-f` или `--format`.

Как я понял, самый универсальный формат это **mp4**. Так как он понимаются
наибольшим числом плееров. 

Выбрать лучший **mp4** формат.

```bash
-f 22/bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best
```

Так же хорош формат **webm**, позволяет сильно сжимать файлы. Правда сам контейнер чуть менее понятен для
некоторых проигрывателей. Пока имеет смысл видео формата `webm` упаковывать в `mp4` контейнер.

```bash
-f bestvideo[height<=720]+bestaudio[ext=webm] --merge-output-format mp4
```

> [Примеры](https://github.com/yt-dlp/yt-dlp#format-selection-examples) установки форматов видео в репозитории.

А так же, что при скачивании с `youtube` не обязательно сохранять номер видеоролика. Достаточно названия файла и его расширения.

## Одиночное видео

```bash

film='link'
yt-dlp -o '%(title)s.%(ext)s' --format "bestvideo+bestaudio[ext=m4a]/bestvideo+bestaudio/best" --merge-output-format mp4 $film

```

Пример с машей и медведем.

```bash
yt-dlp -o '%(title)s.%(ext)s' --yes-playlist https://youtube.com/playlist?list=PLXnIohISHNIur5SkRfvOLo1YJjw7NwQx6
```

Команды которые я часто использую.

Загрузка видеороликов из списка в файле

```bash
yt-dlp -f best -a list.txt
```

```bash
youtube-dl -ct --simulate --batch-file='/path/to/batch-file.txt'
```

## Плейлисты

Программа поддерживает автоматическое скачивание плейлистов, с youtube во всяком случае. И при передаче ссылки на него начнет скачивать все ролики.

Для плейлиста, иногда имеет смысл скачивать так же и номер ролика.  
Делается это добавлением параметра:

```bash
-o '%(playlist_index)s.%(title)s.%(ext)s'
```

Полезная опция при скачивании плейлистов
Установка начала и конца плейлиста, или шаг для скачки. Опция похожа на слайсы в питоне.

```bash
-I, --playlist-items ITEM_SPEC  Comma separated playlist_index of the items
                                to download. You can specify a range using
                                "[START]:[STOP][:STEP]". For backward
                                compatibility, START-STOP is also supported.
                                Use negative indices to count from the right
                                and negative STEP to download in reverse
                                order. E.g. "-I 1:3,7,-5::2" used on a
                                playlist of size 15 will download the items
                                at index 1,2,3,7,11,13,15
```
Если работа со слайсами не понятна, можно делать по старинке

```bash
--playlist-start NUMBER          -I NUMBER:
--playlist-end NUMBER            -I :NUMBER
```

## Скачивание аудио

С кодеком [Youtube VP9](https://en.wikipedia.org/wiki/VP9) этот файл, скорее всего, будет расширение `.webm` или `.opus`.

Первый спороб это скачать нужный формат. Выбрав его после получения всего списка форматов `-F`.  
Предположим аудиострим находится под `ID 2`

```bash
yt-dlp -f 2 -o 'songname.%(ext)s'
```

Второй способ, доверится автоматическому определению. Выбрав опцию `-x`

```bash
yt-dlp -f 'ba' -x --audio-format mp3 https://www.youtube.com/watch?v=dQw4w9WgXcQ  -o '%(id)s.%(ext)s'
```

## Thumbnails

Изображения заставки.
Изображения скачиваются флагом `--write-thumbnail`

```sh
yt-dlp --skip-download --write-thumbnail --convert-thumbnails jpg 
```

## Файл конфигурации

В случае регулярного использования команд можно задать файл конфигурации`yt-dlp.conf`

:::tip My tip

Use this awesome feature option

:::

Пример для скачивания `youtube` роликов через сервис [colab](https://colab.research.google.com/drive/1VYZOzBjoacWr7s9Al-J932byqaylRunW)

```shell title="yt-dlp.conf"

# Lines starting with # are comments
# Formats

# Best "mp4"
-f 22/bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best

# Templafe folder
-P "./videos/"
# Save all videos under YouTube directory in your home directory
-o %(title)s/%(title)s.%(ext)s

# Embed datas to video
--embed-chapters 
--embed-thumbnail 
--add-metadata

# Convert thumbnails to jpg
--convert-thumbnails "jpg"

# Save thumbnail with 'folder.jpg' name
--write-thumbnail -o "thumbnail:%(title)s/folder.%(ext)s"

# links
# - [yt-dlp - репа](https://github.com/yt-dlp/yt-dlp)
# - [yt-dlp - опции](https://github.com/yt-dlp/yt-dlp#usage-and-options)
# - [yt-dlp - примеры](https://github.com/yt-dlp/yt-dlp#output-template-examples)
```

## links

- [yt-dlp - репа](https://github.com/yt-dlp/yt-dlp)
- [yt-dlp - опции](https://github.com/yt-dlp/yt-dlp#usage-and-options)
- [yt-dlp - примеры](https://github.com/yt-dlp/yt-dlp#output-template-examples)