export function my_strcapitalize(str: string)   //initialisation de la fonction "String:Capitalize" qui prends un string "str" en paramètre
{//===========DECLARATIONS================================================================================================================|
        //un entier "i", indexation de nos boucles
	let i:number    = 0
        //un string "nstr" (new string), qui sera notre résultat
    let nstr:string = ""

        //un nombre "code", qui prendra le code ascii de la lettre indexé de "str"
        //ainsi que deux bouléens "C_upper" (is code uppercase?) et "C_letter" (is code a letter?) pour facilité nos conditions
    let code = 0;   let C_upper:boolean  = false;   let C_letter:boolean = false

        //un nombre "last", qui prendra le dernier code ascii de la lettre indexé dans "code"
        //ainsi que deux bouléens "C_upper" (is code uppercase?) et "C_letter" (is code a letter?) pour facilité nos conditions
    let last = 0;   let L_upper:boolean  = false;   let L_letter:boolean = false

//============EXECUTIONS================================================================================================================|
    while (str[i])  //tant que la lettre indéxé existe, soit tant que "str" à des lettres a pourvoir
	{
        code = str.charCodeAt(i)    //on enregistre le code ascii de cette lettre dans "code"

            // Paramétrage des Drapeaux/Booléens...
                //... de la lettre précédente, d'on le code est "last"...
        if      ( last > 64 && last < 91 )  { L_upper = true;  L_letter = true  }   //si "last" est le code d'une majuscule (donc une lettre)
        else if ( last > 32 && last < 127)  { L_upper = false; L_letter = true  }   //si "last" est le code d'un charactère valable (lettre)
        else                                { L_upper = false; L_letter = false }   //si "last" n'est pas une lettre
		
                //... de la lettre actuelle, d'on le code est "code"...
        if      ( code > 64 && code < 91  ) { C_upper = true;  C_letter = true  }   //si "code" est le code d'une majuscule (donc une lettre)
        else if ( code > 96 && code < 123 ) { C_upper = false; C_letter = true  }   //si "code" est le code d'une minuscule (donc pas maj.)
        else                                { C_upper = false; C_letter = false }   //si "code" n'est pas une lettre

            //Formattage du String de Sortie

        if (!L_letter && C_letter && !C_upper )     //si la lettre actuelle est précédé de rien, et qu'elle est minuscule
            nstr += String.fromCharCode(code - 32)      //alors on passe cette lettre en majuscule, puis l'enregistre dans "nstr"
                
        else if ( L_letter && C_upper )             //si la lettre actuelle est précédé d'une lettre, et qu'elle est majuscule
            nstr += String.fromCharCode(code + 32)      //alors on passe cette lettre en minuscule, puis l'enregistre dans "nstr"
    
        else                                        //sinon, la lettre actuelle ne requiert aucun changements
            nstr += String.fromCharCode(code)           //alors on l'enregistre sans changements dans "nstr"

        last = code     //on passe le code de la lettre actuelle pour celui de la lettre précédente
        i++             //avant d'incrémenté à la lettre suivante de notre string
	}
	return nstr
}
