import { print } from "./putchar"

//on initlisation notre fonction
export function my_print_digits()
{
    for (let i:number = 0; i <= 9 ; i++)
    {
        print(i)
    }
    print("\n")
}