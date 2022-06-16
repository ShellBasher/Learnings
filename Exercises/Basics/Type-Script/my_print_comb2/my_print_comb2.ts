import { print } from "./putchar"

export function my_print_comb2()
{
    let A:number = 0
    let B:number = 0
    let C:number = 0
    let D:number = 0
    while (A <= 9 && B <= 9 && C <= 9 && D <= 9)
    {
        while (B <= 9 && C <= 9 && D <= 9) 
        {
            while (C <= 9 && D <= 9)
            {
                while (D <= 9)
                 {  
                    if (A < C || ( A == C && B < D ) )
                    {
                    print(A)
                    print(B)
                    print(" ")
                    print(C)
                    print(D)
                    
                    if (A != 9 || B != 8 || C != 9 || D != 9) 
                    {
                    print(",") 
                    print(" ")
                    }

                    }
                    D++
                }
                C++
                D=0
            }
            B++
            C=0
        }
        A++
        B=0
    }
    print("\n")
}