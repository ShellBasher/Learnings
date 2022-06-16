/*
** Piscine ETNA, 2022-2025
** Pool Day 31 - C Pool - Part Two
** File Author : FLEURICOURT Tom
** File description :
** 		this function emulates the Core's strstr
**      searching for a substring within a larger
**      string
*/

#include <stdbool.h>

char *my_strstr(char *str, const char *to_find);
int my_strcmp(const char *s1, const char *s2);
int my_strlen(const char *str);

char *my_strstr(char *str, const char *to_find)
{
    int L_to_find, L_str = 0;
    int A, B = 0;

    char * cmp_str = 0;
    char * result = 0;
    int res_pos = 0;

    
    L_to_find = my_strlen(to_find);
    L_str = my_strlen(str);

    for (A = 0 ; A <= L_str ; A++)
    {
        for(B = 0 ; B <= L_to_find ; B++)
        {
            cmp_str += str[A + B];

            if (my_strcmp(cmp_str, to_find) == 0)
            {
                res_pos = A + B;

                while (str[res_pos] != ' ' || str[res_pos] != '\0')
                    res_pos--;
    
                while(str[res_pos] != ' ' || str[res_pos] != '\0')
                {
                    result += str[res_pos];
                    res_pos++;
                }
            return result;
            }
        }
    }
    return 0;
}

int my_strlen(const char *str)
{
    int counter = 0;
    while(str != '\0')
        counter++;

    return counter;
}

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