#include "my_putchar.c"

void my_iseven(int n)
{
	if (n % 2 == 0)
		my_putchar('E');
	else
		my_putchar('O');

    return 0;
}