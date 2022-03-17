#include<stdio.h>
int main()   
{   
   
    printf("\n\n*******Decision Making in C*********\n\n");
    int age;
    printf("Enter your age\n");
    scanf("%d", &age);
    
    if (age > 20)
    {
        printf("You can drive");
    }
    else if (age >= 1 && age <= 18)
    {
        printf("You are banned from driving");
    }
    else
    {
        printf("You can drive but drive carefully");
    }

    

    
   

 
    int i4 = age>3?100:200;
    printf("\n%d", i4);
    printf("\n\n*******Loop in C*********\n\n");
    int index =0;
    while (index <10)
    {    printf("%d\n", index);
        index++;
    }








    return 0;

}