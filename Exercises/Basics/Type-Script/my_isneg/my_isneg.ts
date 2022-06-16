import { print } from "./putchar"

//on initlisation notre fonction
export function my_isneg(n: number)
{
	if ( n < 0 )	//si "n" est inférieur strict à "0"
	{

		print("N");	//on affiche "N"
	}
	else		//sinon (donc "n" supérieur ou égal à 0)
	{
		print("P\n");	 //on affiche "P"
	}
	print("\n")
}
