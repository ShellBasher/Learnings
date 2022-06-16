#!/bin/bash

Link=$1

Lat=$(curl "$1" | cut -c 77-85)
Lon=$(curl "$1" | cut -c 53-60)
Dis=$(curl "$1" | cut -c 102-107)
Vit=$(curl "$1" | cut -c 121-124)

Sec=$(( Dis * 1000 / Vit ))
Day=$(( Sec / 86400 )); Sec=$(( Sec - Day * 84600 ))
Hou=$(( Sec / 3600 )); Sec=$(( Sec - Hou * 3600 ))
if (( Hou = 24 )); then
    Hou=$(( Hou-1))
fi
Min=$(( Sec / 60 | bc )); Sec=$(( Sec - Min * 60 | bc ))

echo "The Angry Moon is located at lat: $Lat, lng: $Lon."
echo "It is $Dis""km away from us, but it is going to fall at a speed of $Vit""m/s."
echo "We have exactly $Day days, $Hou hours, $Min minutes and $Sec seconds to react."
