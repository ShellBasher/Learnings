/*
** Piscine ETNA, 2022-2025
** Pool Day 31 - C Pool - Part Two
** File Author : FLEURICOURT Tom
** File description :
** 		this function emulates the Core's strcpy
**      copying the input src string, into the input
**      dest string
*/

char *my_strcpy(char *dest, const char *src)
{
    int i = -1;

    do 
    {
        i++;
        dest[i] = src[i];
    }
    while (src[i] != '\0');
    
    return dest;
}