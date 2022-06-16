#!/bin/bash
cd lib; cd my
File="lib"
Lines=$(cat $File)
mv lib libmy.a
for Line in $Lines
do
    touch $Line.c
    gcc -Wall -Wextra -Werror -std=c11 $line.c
done
cd .. ; cd ..