import { print } from "./putchar"

export function my_print_alpha()
{
    for (let i = 97; i <= 122 ; i++)
    {
        print(String.fromCharCode(i))
    }
    print("\n")
}