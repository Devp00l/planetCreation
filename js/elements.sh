#!/bin/bash
c=""
e=$(grep -o "element color|[^}]*" elements.txt | grep -o "[^|]*$" | sort | uniq | sed "s/ /_/g");

for i in $e; do
    i=$(echo $i | sed "s/_/ /g")
    name=$(echo $i|sed "s/[ -_]\(.\)/\U\1/g")
    a="$name = ["
    b=$(cat elements.txt| grep -o "$i[^\|]*|[^\|]*" | grep -o "[a-Z]* $" | sed "s/^/\"/;s/ $/\", /" | tr -d '\n' | sed "s/, $/],/")
    c="$c\n$a$b"
done
echo -e $c
echo -e $c | xsel -b
