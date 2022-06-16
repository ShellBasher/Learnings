#include "my_putchar.c"

void my_print_alpha(void)
{
    int i = 0;

    for (i = 97; i <= 122; i++)
        my_putchar((char) i);

    return 0;
}