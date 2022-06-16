#!/bin/bash

   # Declarer A = entrée 1, B = entrée 2
A=$1
B=$2

   # si (A < 10) alors A = 10
if (( A < 10 )); then A=9
fi
   # si (B < 10) alors B = 10
if (( B < 10 )); then B=10
fi

   # si (A > 99) alors A = 99
if (( A > 99 )); then A=99
fi

   # si (B > 99) alors B = 99
if (( B > 99 )); then B=100
fi

# déclarer I = A+1
I="$((A + 1))"
R=0

# Tant que I strict  inférieur à B; faire si I = 42 alors R = R + 1, R = R + 1 
while (( I < B )); do
      if (( I == 42 )); then
	  (( R++ ))
      fi
      (( I++ ))
      (( R++ ))
done

# Afficher R
echo $R
