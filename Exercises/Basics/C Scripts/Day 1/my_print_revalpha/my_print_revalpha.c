#include "my_putchar.c"

void my_print_revalpha(void)
{
    int i = 0; 

    for (i = 122; i >= 97; i--)
        my_putchar((char) i);

    return 0;
}