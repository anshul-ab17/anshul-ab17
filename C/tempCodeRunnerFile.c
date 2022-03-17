#include<stdio.h>
int main()
{
    int age;
    printf("Enter your age\n");
    scanf("%d", &age);
    int i4 = age > 3 ? 100 : 200; //short hand if else
    printf(" %d ", i4);

    printf("\n\n*******Loop in C*********\n\n");
    int index = 0;
    while (index < 100000000000)
    {
        printf("%d\n", index);
        index++;
    }

   

    
}