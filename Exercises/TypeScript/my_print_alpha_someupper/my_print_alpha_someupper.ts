import { print } from "./putchar"

export function my_print_alpha_someupper()
{
    for (let i = 97; i <= 122 ; i++)
    {
        if ( i % 2 != 0 )
           print(String.fromCharCode(i))
        else 
           print(String.fromCharCode(i-32))
    }
    print("\n")
}
