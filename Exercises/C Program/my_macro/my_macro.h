/*
** Piscine ETNA, 2022-2025
** Pool Day 32 - C Pool - Part three
** File Author : FLEURICOURT Tom
** File description :
** 		this function is a Header file
**      containing a macro that returns
**      an absolute value fro an argument
*/

#ifndef my_macro
#define my_macro

int ABS(float input)
{
    int result = 0;
    if (input >= 0)
        result = input * 1;
    else
        result = input * (-1);
    return result;
}

#endif