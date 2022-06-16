import { print } from "./putchar"

export function my_iseven(n: number)
{
	if (n % 2 == 0)
		print("E")
	else
		print("O")
	print("\n")
}