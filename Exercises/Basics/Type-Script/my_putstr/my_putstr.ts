import { print } from './putchar'

export function my_revstr(str: string)
{
	let i:number = 0
	while (str.charCodeAt(i) > 0)
	{
		print(str[i])
		i++
	}
}	