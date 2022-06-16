export function my_strncmp(first:string, second:string, length:number)
{
    let A:number = 1
    let B:number = 1
    
    let i:number = 0
    let res:number = 0
    
    let stop:boolean = false
    
    while ( stop == false && ( A && B ) && i < length)
    {
        A = first.charCodeAt(i)
        B = second.charCodeAt(i)

        if ( A != B )
        {
            res = A - B
            stop = true
        } 
        
        if ( A && !B )
            res = A

        if ( !A && B )
            res = -B

        if ( !A && !B )
            res = 0
        i++
    }
    return res
}