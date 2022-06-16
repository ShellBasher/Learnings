/*
Autheurs : Mamadou MBAYE & Tom FLEURICOURT
Programme : Matchstick.ts, un "jeux des allumettes" programmé
*/

//import { stdin, stdout } from 'process'

export function RandomInt(min:number, max:number)
{
    Math.floor(Math.random() * (max - min + 1) + min)
}

export function Display(array:number[], lines:number)
{
    for (let i=0; i < lines ; i++)
    { 
        for ( let j=0; j < array[i] ; j++ )
        {
            console.log('|')
        }
        console.log('\n')
    }
}

export function Matchstick(nb_lines:number, nb_matches:number)
{       //DECLARATIONS 
    let input_line:number = 0
    let input_matches:number = 0
    let player_nb:number = 1
    let valid_input:boolean = false
    let end_flag:boolean = false

        // déclaration, initlisation de Array
    var array:number[] = []
    for (let i=0; i < nb_lines ; i++)
        array[i] = 2*i+1 

        //EXECUTIONS
    while(!end_flag)    //début de la boucle principale
    {   
        Display(array, nb_lines)
        while (!valid_input)
        {           //prompt à l'utilisateur pour n°ligne & nb allumettess à retirer
            console.log("\nPlayer ", player_nb, "'s turn :")

            console.log("Line : ")
            input_line = 1      //appel d'input console/user

            console.log("Matches : ")
            input_matches = 1   //appel d'input console/user

            if ( ( array[ input_line ] > 0 ) && ( input_matches > 1 && input_matches < 2 ) ) 
            {
                valid_input = true
                array[input_line] -= input_matches          
            } else
            {
                console.log("\n Error : Input Invalid")
                if (array[input_line] <= 0)
                {
                    //Incomplêt: ajouter d'autres conditions et messages composés si possible
                }
            }
        }
        valid_input = false

            //Confirmation de l'entrée utilisateur
        console.log("Player ", player_nb, "removed ", input_matches, "match(es) from line ", input_line,".")        


        {   //sous-fonction qui "flip" la valeur du joueur, tour par tour    
            if (player_nb == 1)
                player_nb++
            else
                player_nb--
        }

            //Evaluation de la condition de sortie de boucle principale
        for(let i = 0 ; array[i]>=0; i++)
        {
            if (array[i] > 0)
                end_flag = true
        }    
    }   //Sortie ssi objectif accompli
}
