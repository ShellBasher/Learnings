<?php

$res = 0;
function calc($Op = '', $val = 0)
{
    global $res;

    if( is_int($val) && is_string($Op) )
    {
        switch ($Op) 
        {
            case '+':
                $res += $val;
                break;
        
            case '-':
                $res -= $val;
                break;
        
            case '*':
                $res *= $val;
                break;

            case '/':
                if ($val != 0)
                {
                    $res /= $val; 
                }
                else 
                {
                    echo "Division par 0!\n"; 
                }
                break;

            case '=':
                $res = $val;
                break;

            default:
                return $res; 
        }

    }

    return $res;

}