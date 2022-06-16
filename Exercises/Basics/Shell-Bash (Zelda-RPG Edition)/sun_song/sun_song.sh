#!/bin/bash
SR=$(curl "https://api.sunrise-sunset.org/json?lat=48.813975&lng=2.392521" | cut -c 24-33)
SS=$(curl "https://api.sunrise-sunset.org/json?lat=48.813975&lng=2.392521" | cut -c 46-55)

echo "Sunrise is expected at $SR and sunset at $SS."
