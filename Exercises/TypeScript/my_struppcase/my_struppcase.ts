export function my_struppcase(str: string)
{
	let i = 0
    let code = 0
    let nstr:string = ""
    while (str[i])
	{
        code = str.charCodeAt(i)

        if( code > 96 && code < 123)
            nstr += String.fromCharCode(code-32)
        
        else
            nstr += String.fromCharCode(code)
		
        i++
	}
	return nstr
}