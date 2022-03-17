#include <stdio.h>
#include <math.h>
 
int main()
{
    int n;
 
    float radius, length, width, a, b, c, height;
    
    float perimeter;
    printf("\n Perimeter of triangle n");
    printf("---------------------------n");
    printf("\n Enter the size of all sides of the triangle : ");
    scanf("%f%f%f", &a, &b, &c);
    perimeter = a + b + c;
    printf("Perimeter of triangle is: %.3f", perimeter);
 
    return 0;
}


