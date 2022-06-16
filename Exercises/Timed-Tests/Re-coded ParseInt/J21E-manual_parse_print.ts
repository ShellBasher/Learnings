import { stdin, stdout } from 'process';

export function print(n: any)
{
	stdout.write( (''+n) [0] )
}
function parse_print(nbr: string) 
{
	let i:number = 0	

	while( nbr.charCodeAt(i) > 47 && nbr.charCodeAt(i) < 58 )
	{
        print( nbr.charCodeAt(i) - 48 )
		i++
	}
    print("\n")
}