#include<stdio.h>


int main()

{
 printf("program Executed by ANSHUL BHARAT");
 printf("UID : 21BCS11596");

    float km, m, cm, f, in;
    
    printf("Enter distance in kilometers: ");
    
    scanf("%f", &km);
    
    
    m = km * 1000;
    
    cm = km * 1000 * 100;
    f = km * 3280.84;
    in = km * 39370.08;

    printf("The distance in Feet: %f\n", f);
    printf("The distance in Inches: %f\n", in);
    printf("The distance in Meters: %f\n", m);
    printf("The distance in Centimeters: %f\n", cm);
    
    return (0);
}