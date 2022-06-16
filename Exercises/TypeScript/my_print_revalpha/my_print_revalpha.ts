import { print } from "./putchar"

//on initlisation notre fonction
export function my_print_revalpha()
{
    for (let i = 122; i >= 97 ; i = i - 1)
    {
        print(String.fromCharCode(i))
    }
    print("\n")
}