import { print } from './putchar'           //on importe la fonction "print", notre seule methode d'affichage

export function my_firtree(size:number)     //on prototype "mon sapin" qui prends une taille en nombre
{
    let N_lignes:number = 0                 //on défini "N_lignes", nombre de ligne qu'aura notre sapin (sans le tronc car il est de longeur "size")
    let V_larg:number = (2 * 4*(size) - 3)  //on défini "V_larg", la largeur du triangle a sa base
    let C_Point:number = V_larg / 2         //on défini "C_Point", le point centrale de notre arbre
    let Ecart:number = (size / 2 + size % 2 )   // on défini "Ecart", la valeur d'écart entre le centre du tronc et sa "paroi"

    let i:number = 0                //on introduit "i", "j", "k" & "l", des incrémenteur que l'on va utiliser et ré-utiliser
    let j:number = 0
    let k:number = 0
    let l:number = 0

    /* Calcul de valeurs utiles  */
    for (i = 0; i < size; i++)  //on sait que le plus petit triangle de notre sapin a 4 lignes...
        N_lignes += 4 + i       //...et que chaque triangle consécutif s'ajoutes aux précédents est sont plus grand de une ligne                            

    l = N_lignes            //on va utiliser l'incrémenteur "l" pour compter le nombre d'espaces à afficher, d'où l'affectation
    
    /* affichage des feuilles de l'arbre */
    for (i = 0; i < N_lignes; i++)      //cette fonction permet d'afficher un triangle
    {
        for (k = l; k > 0; k--)         //pour k allant de l à 0, le premier étant décrémenté à chaque passage
            print (" ")                 //on affiche les espaces requis avant les feuilles

        for (j = 0; j < ( 2 * i + 1 ); j++)     //puis pour j allant de 0 jusqu'à la valeur impaire suivante
            print("*")                          //on affiche une feuille
            
        print("\n"); l--        //on remet à la ligne pour imprimer la suivante et on décrémente l pour imprimer moins d'espaces
    }
    
    /* affichage du tronc de l'arbre */
    for (i = 0; i < size; i++)      //on affiche maintenant la base de l'arbre
    {
        for(k = C_Point - Ecart ; k > 0; k--)   //on doit afficher le tronc au centre de l'arbre 
            print(" ")                              // d'où on commence l'ajout des espaces
        
        for (j = 0; j < size ; j++) //on peut après chaque ligne d'espace correspondant
            print("|")                  //afficher le carrée de tronc
        
        print("\n")         // <ue l'on ponctue d'un retour à la ligne, passant à la suivante
    }
}