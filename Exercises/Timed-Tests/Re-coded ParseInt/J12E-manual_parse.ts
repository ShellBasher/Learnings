function parse(nbr: string) 
{
	let res:number = 0/0
	let i:number = 0	

	while( nbr.charCodeAt(i) > 47 && nbr.charCodeAt(i) < 58 )
	{
        if (!res) 
            res = 0 

        res *= 10
		res += nbr.charCodeAt(i) - 48
		i++
	}
    return res
}