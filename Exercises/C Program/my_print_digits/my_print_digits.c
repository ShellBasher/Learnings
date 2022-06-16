#include "my_putchar.c"

void my_print_digits(void)
{
    int i = 0;

    for (i = 0; i <= 9; i++)
        my_putchar(i);

    return 0;
}