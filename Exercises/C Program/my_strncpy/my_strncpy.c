/*
** Piscine ETNA, 2022-2025
** Pool Day 31 - C Pool - Part Two
** File Author : FLEURICOURT Tom
** File description :
** 		this function emulates the Core's strcpy
**      copying the input src string, into the input
**      dest string
*/

char *my_strncpy(char *dest, const char *src, int n)
{
    int i = 0;

    for (i = 0; i < n; i++)
    {
        dest[i] = src[i];

        if ( !src[i] )
            dest[i] = '\0'; 
    }
    
    return dest;
}