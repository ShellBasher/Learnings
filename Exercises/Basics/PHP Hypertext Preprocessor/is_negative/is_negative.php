<?php

function is_negative($val)
{
    if( ! is_int($val) )
    {
        echo "Le parametre n'est pas un Int";
    }
    else if ($val < 0)
    {
        echo "True";
    }
    else
    {
        echo "False";
    }
    echo "\n";
}