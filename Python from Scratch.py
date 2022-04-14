# Python for Gound level:  


#1.python basics:


#variables in python

a =9
print(a)
harry =6
print(harry)

#numbers:int and float
2
day =8
tem=-9


weight =38.66

print(day+tem)
print(weight+tem)

print(day%tem)

#strings
age=43
height=180.4

age="\n\n\n43"

print("age")


#using variable in string
   
cake = '\n\nchocolate\'s place,is the "best" in town'

print(cake)

#booleans
light_on= True
if light_on:
  print("\n\nthe light is on")
else:
  print("light's off")
#if and else 
marks=55
if marks >= 60:
    print("pass")
else:
    print("fail")


#2.fortune cookies

#picking random number
import random
print(random.randint(1,10))

print(random.random())


answer =random.randint(1,5)

if answer ==1:
  print("True")
if answer ==2:
  print("it's ok")

  
if answer ==3:
  print("False")
if answer ==4:
  print("maybe")

#chossing what fortune to show

lucky_number = random.randint(1,1000)

print("it's your today's lucky number:",lucky_number)


fortune_number = random.randint(1,3)
if fortune_number ==1:
  print("it's a great day",fortune_number)

else:
  print("today will be tough ",fortune_number)



#3.list ,loops and dict.


#lists
fav_cars =["mustang","camarao","charger"]

print(fav_cars)

print(fav_cars[0])
print(fav_cars[1])
print(fav_cars[2])

print(len(fav_cars))

#check length add insert and delete the list

fav_cars.append("shelby")

 

print(fav_cars[3])


print(fav_cars)

fav_cars.insert(1,"chervolt")


print(fav_cars)

del(fav_cars[1])
print(fav_cars)

#for loops

for number in range(5):
  print("heyy you!")
  print(number)


for a in range(5):
  print(a)



for car in fav_cars:
  print("cars")


for car in fav_cars:
  print(car)

#dictionaries
lang = {"python":1,"c":2,"java":3,"cpp":4}

print(lang["c"]) 

lang["c#"] =5

del(lang["c"])

print(lang)

len(lang)


print(len(lang))

#4.lyrics analyzer


#splitting a string:

print("\nEverybody die in the nightmare")

text="""
Tired of feelin' like I'm trapped in my damn mind
Tired of feelin' like I'm wrapped in a damn lie
Tired of feelin' like my life is a damn game
Nigga really wanna die in the night time
Only time I feel pain, when I'm feelin' love
That's why it's tatted on my face that I'm damn numb
Only time I'm in my mind, when I'm all alone
That's why I'm really never alone in the night time
Change hoes like clothes, I can't get attached
'Cause these hoes fire starters like lit matches
I've been feeling really lost, ducking all attachments
I don't really go outside 'cause I hate traffic
I don't wanna go outside, get caught in traffic
Tired of feelin' like I'm trapped in my damn mind
Tired of feelin' like I'm wrapped in a damn lie
Tired of feelin' like my life is a damn game
Nigga really wanna die in the night time
"""

print(text)
print(len(text))

#counting the words
text="""
a b c b e e e"""

print(text.split())

word_count ={}


for word in text.split():
  if word in word_count:
    word_count[word] += 1

  else:
    word_count[word] = 1
print(word_count)
  

text="""
Tired of feelin' like I'm trapped in my damn mind
Tired of feelin' like I'm wrapped in a damn lie
Tired of feelin' like my life is a damn game
Nigga really wanna die in the night time
Only time I feel pain, when I'm feelin' love
That's why it's tatted on my face that I'm damn numb
Only time I'm in my mind, when I'm all alone
That's why I'm really never alone in the night time
Change hoes like clothes, I can't get attached
'Cause these hoes fire starters like lit matches
I've been feeling really lost, ducking all attachments
I don't really go outside 'cause I hate traffic
I don't wanna go outside, get caught in traffic
Tired of feelin' like I'm trapped in my damn mind
Tired of feelin' like I'm wrapped in a damn lie
Tired of feelin' like my life is a damn game
Nigga really wanna die in the night time
"""
print(text.split())

word_count ={}


for word in text.split():
  if word in word_count:
    word_count[word] += 1
    
  else:
    word_count[word] = 1
print(word_count)
  

#5.function and more


#function
def talk():
  print("come!")
  print("come in!")
  print("come over!")
  print("come back!")
  print("come on!")
for x in range(50):
  talk()  

#parameters:

def hey(name):
  print(f"hey {name}!")


hey("carla")

def add_num(num1,num2):
  print(num1+num2)


add_num(4,8)

add_num(7,9)


#return:

def double(number):
  return number * 3

#double(5)
#print(double(5))


new_num = double(5)

print(new_num)


def uppercase(text):
  return text.upper()
print(uppercase("ben"))


#input function :
input('what is your name:\n\n')
age =input("enter your age in words")
age_in_words = input("enter 1 to uppercase and 2 to lower:")


if age_in_words =="1":
  print(age.upper())
else:
  print(age.lower())



#6 Decisions making and Calling function:
print('\n\n\nhey')

intro = input("\n\nwhat's your name:\n")

food = input("what's your fav food\n")

if food == "pizza":
    print("wow!")
else:
    print("it's ok")
      
      
def gret():
    print("hey")
    print("there")
    print("you")
      
      
gret()
gret()
gret()
gret()
gret()
gret()

