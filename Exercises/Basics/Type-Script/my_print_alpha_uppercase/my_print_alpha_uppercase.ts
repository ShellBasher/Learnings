import { print } from "./putchar"

export function my_print_alpha_uppercase()
{
    for (let i = 97; i <= 122 ; i++)
    {
        print(String.fromCharCode(i-32))
    }
    print("\n")
}
