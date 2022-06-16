import { print } from "./putchar"

export function my_print_comb()
{
    let A:number = 0
    let B:number = 0
    let C:number = 0
    while ( A <= 7 && B <= 8 && C <= 9)
    {
        while (B <= 8 && C <= 9)
        {
            while (C <= 9)
            {
                if (A < B && B < C)
                {
                    print(A)
                    print(B)
                    print(C)
                    if ( A * B * C != 504 )
                    {
                        print(",")
                        print(" ")
                    }
                }
                C++
            }
            B++
            C=0
        }
        A++
        B=0
    }
    print("\n")
}