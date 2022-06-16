export function my_strncat(dest: string, src: string, nb: number)
{
    return (dest + src.slice(0, nb))
}