import sys

"""ceci est un fichier de plusieurs fonctions"""
__author__ = "fleuri_t"


def printer(text: str, err: bool = False) -> int:
    """this function prints the input text and its length"""

    if bool is True:
        sys.stderr.write(text)
    else:
        sys.stdout.write(text)

    return len(text)


def my_map(function: callable, data: list[any]) -> list[any]:

    result = []
    for i in data:
        result.append(function(i))

    return result


def my_filter(function: callable, data: list[any]) -> list[any]:

    result = []
    for i in data:
        if function(i) is True:
            result.append(function(i))

    return result


def my_reduce(function: callable, data: list[any]) -> any:

    result = 0
    for i,j in data(list[::],list[1::]):
        result = function(i,j)
        
    return result

print(printer("hello world",True)) 