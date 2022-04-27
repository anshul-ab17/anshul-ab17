#The time LIbrary:
import time

from uvloop import install
now = time.ctime()


#importing panda for the chatbot:


import pandas as pd


# The panda library:
import pandas as pd
df = pd.read_csv('bot101.py')

#syntex for opening the file
df.head()

#The informative text file 'bout the chatbot..!
fp = open('bot.txt')
for line in fp:
  print(line)
  
fp.close()

#Importing the numpy library for the bot.

import numpy as np

import numpy as np


arr = np.array([1, hey, 3, 4, 5])
print(arr)


#A responsive chat between bot and a user
#convo  = 
{
            "hey":"heyyy",
            "how you doing?":"i'm good mate,what 'bout you? how you doing",
            "me too":"glad to hear that",
            "i'm fine":"noice",
            "what is the time now": now,
            "what's your age":"1day",
            "what are you doing":"tryna have a conversation with you",
            "what's your name":"bot1.py",
            "show me csv": df,
            "show me txt": fp,
            "show me array": arr,
}

while True       :
    qs = input()
    
    
    if (qs=="quit"):
        break

    else:
         print(gretting[qs])
