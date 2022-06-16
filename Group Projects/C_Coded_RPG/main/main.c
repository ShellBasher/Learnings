/*
** ETNA PROJECT, 15/04/2022 by fleuri_t
** /home/tomfleur
** File description:
**      main function and loop
*/

#include "main.h"

void main (void)
{   
    //initialisation
        //call initialisation of all variables 
        //Print initialisation messages
    
    //Executions 
        //start main loop 
    combat_menu();

}

void combat_menu(void)
{
    char user_input = '0';
    bool exit_flag = false;
    
    while (exit_flag)
    {
            //prompt action menu from the player
        printf("\n[A] Attack     [H] Heal\n");
        printf("\n[D] Defend     [R] Run\n");

        user_input = getchar();

        switch(user_input)  //switch-case action menu 
        {
            case 'A':
            case 'a':
                break;

            case 'D':
            case 'd':
                break;
            
            case 'H':
            case 'h':
                break;
            
            case 'R':
            case 'r':
                break;               
            
            default :

        }
    }
}