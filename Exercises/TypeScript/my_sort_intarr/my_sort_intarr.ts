import { print } from "./putchar"

export function my_sort_intarr(array:number[], size:number)
{
    let tmp:number = 0
    for (let j = 0; j < size; j++)
    {
        for( let i = j; i < size; i++)
        {
            if (array[j] > array[i])
            {
                tmp = array[j]
                array[j] = array[i]
                array[i] = tmp
            }
        }
    }
    return array
}