#include <stdio.h>

int main()  
{    
    int a, b;
    int sum, sub, multiplication, modulus;
    float quotient;
    
    printf("program Executed by ANSHUL BHARAT");
    printf("UID : 21BCS11596");
    
    printf("Enter first number: ");
    scanf("%d", &a);
    printf("Enter second number: ");
    scanf("%d", &b);
    
    
    sum = a + b;
    
    sub = a - b;
    
    multiplication = a * b;
    
    quotient = (float)a / b;
    
    modulus = a % b;
    
    printf("\nsum = %d", sum);
    printf("\nsub = %d", sub);
    printf("\nmultiplication = %d", multiplication);
    printf("\ndivision = %f", quotient);
    printf("\nmodulus = %f", modulus);
    

    return 0;
}