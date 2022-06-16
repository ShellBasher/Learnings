<?php

function is_negative_ternary($val)
{
    $result = $val < 0 ? "True" : "False";
    $result = !is_int($val) ? "Le parametre n'est pas un Int": $result; 
    echo "{$result}\n";
}