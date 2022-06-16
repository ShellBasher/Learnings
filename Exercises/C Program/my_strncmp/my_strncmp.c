/*
** Piscine ETNA, 2022-2025
** Pool Day 31 - C Pool - Part Two
** File Author : FLEURICOURT Tom
** File description :
** 		this function emulates the Core's strncmp
**      Command, comparing two strings for the first 
**      'N' bytes of both and returnin the first 
**      difference found as an int
*/

int my_strncmp(const char *s1, const char *s2, int n)
{
    int A, B = 0;
    int res = 0;
    int cnt = 0;
    int d_flag = 0;

    while( !d_flag && (s1[cnt] || s2[cnt]) && cnt < n )
    {
        A = s1[cnt];
        B = s2[cnt];

        cnt++;

        if (A != B)
        {
            res = A - B;
            d_flag = 1;
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