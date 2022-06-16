/*==============================================================DEBUT DE PROGRAMME==============================================================*/
export function luhn(flg:string, nbr:string)    // introduction de la fonction qui prendra pour paramètre "flg" et "nbr" sous strings
{   //Début fonction "luhn"

        //DECLARATIONS 
    let i:number = 0        //on déclare deux variable "i" 
    let j:number = 0        //et "j" d'incrémentation de boucles

    let digit:number = 0    //on déclare "digit", la variable qui va prendre la valeur décimal de nos "lettres"
    let chksum:number = 0   //on introduit une variable de "chksum", d'on le but est de verifier la somme en partie 1

    let resp:string = ""    //on déclare "resp" notre variable de réponse verbose
    let val:number = 0      //on déclare "val" notre variable de réponse numérique

        //EXECUTIONS
    
    //on calcul d'abord le checksum, car il est requit quel que soit l'option choisie    
        //on parcours une première fois la boucle pour avoir sa longueure

    while(nbr[i])   //Tant que "nbr" indexé à "i" existe...
        i++             //...on incrémente "i" jusqu'a atteindre sa longueure
                    
    j = i - 1       //on affecte dans "j", la longueure de "nbr" (en n'oubliant pas de le décalé)
    i = 1           //on remet "i" à 1 pour comparer l'index du checksum au nombre paires
                
        //on peut Calculer le Checksum du nombre
    while(nbr[j])       // tant que "nbr" à a un "chiffre" a donner
    {
        digit = nbr.charCodeAt(j) - 48  //on recupère dans "digit" le code des lettres
            
        if (i % 2 == 0)             //Si : l'index du chiffre est pair
            digit = digit * 2       //Alors : on double le chiffre
                        
        if (digit > 9)              //Si: le digit est supérieur strict à 9 (deux chiffres)
            digit = digit - 9       //Alors : on retire 9 (le nombre max de digit est 18 = 9 x 2)
                        
        chksum = chksum + digit     //puis on ajoute le chiffre dans le Checksum
            
        j--; i++        //on oublie pas d'incrémenter les indexes de la boucle
    }

        //on verifie imédiatement si le checksum est valide

    if ( chksum % 10 == 0 )     //Si : le modulo 10 de Checksum est nul
        resp = "OK"             //Alors : le checksum est valide

    if ( chksum % 10 != 0 )     //Sinon : donc le modulo 10 du checksum n'est pas nul
    {
        resp = "KO"             //Alors : le checksum est invalide...
        val = chksum % 10           //...et on affecte le reste dans "val", au cas ou il faille le rendre ou afficher
    }

        //on choisie maintenant les actions en fonction du mode selectionner

    if ( flg == "-c" )      //Si: "flg" égal à "-c", on nous a demandé de verifier la validité du checksum
    {   
        return resp         //Alors: on affiche la réponse à la question quant à la valadité du nombr et son checksum
    }

    if ( flg == "-f" )      //Si: "flg" égal à "-f", on nous demande d'y ajouter un numéro de contrôle
    {                       //Alors: on doit afficher le chiffre manquant s'il existe

        if (resp == "OK")       //Si: le checksum est valide
        {
                //Alors : la clé est déja valide, il ne lui manque aucun nombre (rajouter/remplacer par "0" la rendrais fausse)
            return "input Key is valid, no missing number"  
        }
        else                    //Sinon: le checksum est invalide
        {   
                //Alors : il manque à la clé le chiffre de contrôle, d'on on a calculer la valeur, soit "val"
            return val  
        }
    }
}   //Fin fonction "Luhn"
/*==============================================================FIN DE PROGRAMME==============================================================*/
