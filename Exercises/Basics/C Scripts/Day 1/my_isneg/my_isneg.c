#include "my_putchar.c"

void my_isneg(int n)
{
	if (n >= 0)
        my_putchar('P');
    else
		my_putchar('N');

    return 0;
}