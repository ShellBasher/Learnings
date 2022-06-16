/*
** Piscine ETNA, 2022-2025
** Pool Day 31 - C Pool - Part Two
** File Author : FLEURICOURT Tom
** File description :
** 		this function emulates the Core's strcmp
**      Command, comparing two strings and returning
**      the first difference found as an int
*/

#include <stdbool.h>

int my_strcmp(const char *s1, const char *s2)
{
    int res = 0;
    int cnt = 0;
    bool diff = false;

    while( !diff && (s1[cnt] || s2[cnt]) )
    {
        int A = s1[cnt];
        int B = s2[cnt];
        
        cnt++;

        if (A != B)
        {
            res = A - B;
            diff = true;
        }

        if (A && !B)
            res = A;

        if (!A && B)
            res = -B;

        if (!A && !B)
            res = 0;
    }
    return res;
}