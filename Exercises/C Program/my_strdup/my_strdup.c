/*
** Piscine ETNA, 2022-2025
** Pool Day 31 - C Pool - Part Two
** File Author : FLEURICOURT Tom
** File description :
** 		this function emulates the Core's strdup
**      Allocating a memory space upon which is 
**      copied an Input String
*/

#include <stdlib.h>

char *my_strdup(const char *src);
char *my_strcpy(char *dest, const char *src);
int my_strlen(const char *str);

char *my_strdup(const char *src)
{
    int src_length = 0;
    char *dest = 0;
    
    src_length = my_strlen(src);
    dest = (char *)malloc(src_length);

    dest = my_strcpy(dest, src);

    return dest;
}

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

int my_strlen(const char *str)
{
    int count = 0;

    while(str[count] != '\0')
        count++;

    return count;
}