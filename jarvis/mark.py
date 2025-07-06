import pyttsx3
import datetime
import speech_recognition as sr
import pyaudio
from pywikihow import search_wikihow
import wikipedia
import webbrowser
from datetime import date
import bs4
from bs4 import BeautifulSoup
import requests
import pywhatkit
import os
import pickle
import random
import random
import keyboard
from keyboard import press_and_release
import googlescrap


engine = pyttsx3.init("sapi5")
voices = engine.getProperty("voices")
engine.setProperty("voice", voices[0].id)
engine.setProperty("rate", 185)
print(voices[1].id)


def speak(audio):
    print("   ")
    print(f"jarvis:{audio}")
    print("   ")
    engine.say(audio)
    engine.runAndWait()


def wish():
    hour = int(datetime.datetime.now().hour)
    if 0 <= hour and hour <= 12:
        speak("good mornimg sir")

    elif 12 <= hour and 18 >= hour:
        speak("good after noon sir")
    else:
        speak("good evening sir")
    speak("i am jarvis your virtual assistent")


def takecommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("listning...")
        r.pause_threshold = 0.7

        audio = r.listen(source,0,5)
    try:
        print("recognizing...")
        query = r.recognize_google(audio, language="en-in")
        print(f"user said: {query}\n")
    except Exception as e:
        # print(e)
        print("say that again please...")
        return ""
    return query


def youtubesearch(term):
    results = "https://www.youtube.com/results?sp=mAEB&search_query="+term
    webbrowser.open(results)
    speak("this is what i found")
    pywhatkit.playonyt(term)
    speak("this may also help you sir")


def google(term):

    Query = str(term)
    pywhatkit.search(Query)


def temp():
    search = "temperature in delhi"
    url = f"https://www.google.com/search?q="+search

    r = requests.get(url)
    data = BeautifulSoup(r.text, "html.parser")
    t = data.find("div", class_="BNeawe").text
    speak(f"the temperature outside is {t}")


if __name__ == "__main__":
    wish()

    st = datetime.datetime.now().strftime("%d:%M")

    dt = datetime.datetime.now().strftime("%b %d %Y")
    #speak((f"today is {dt} and time is {st}"))
    # temp()

    speak("how may i help you")
    while True:

        query = takecommand().lower()
        hello = ('hello', 'hey', 'his', 'hi')
        reply_hello = ('Hello Sir', 'hey sir',
                       'hello sir,nice to meet you', "I Am Jarvis")
        Bye = ('bye', 'exit', 'sleep', 'go')
        reply_bye = ('Bye sir', 'i will be waiting for you', "ok sir")
        nice = ('nice', 'good', 'thanks')
        reply_nice = ('Thanks', 'my honour sir',
                      "thank you sir", "all because of you")

        How_Are_You = ('how are you', 'are you fine')

        reply_how = ('I Am Fine.',
                     "Excellent .",
                     "Moj Ho rhi Hai .",
                     "Absolutely Fine.",
                     "I'm Fine.",
                     "Thanks For Asking.")

        Functions = ['functions', 'abilities', 'what can you do', 'features']

        reply_Functions = ('I Can Perform Many Task Or Varieties Of Tasks,How Can I Help You ?',
                           'I Can Message Your Mom That You Are Not Studing..', 'I Can Tell Your Class Teacher That You Had Attended All The Online Classes On Insta , Facebbook etc!,Let Me Ask You First,How Can I Help You ?,If You Want Me To Tell My Features,Call : Print Features !')

        sorry_reply = ("  ")
        reply_print = ("1) i can create database of hotel",
                       "2) i can create list",
                       "3) i can recognize braile language and convert it into english language",
                       "4) i have automation features",
                       "5) i can create dictionary and also can store it in file")

        responses = ("Hello Sir", "How Are You Sir.", "Always For You Sir",
                     "Hello", "Here's Your Assistant.")
        qq = ("hello", "hii", "hey", "wake up", "jarvis")
        reply_love = ('I am not intrested. sorry',
                      "Excellent but bye .",
                      "sorry.",
                      "i have to ask my master.",

                      "Thanks For Asking.but sorry")
        like = ('thanks', 'i like you too',
                'my honour', 'thats very sweet of you')

        if("open" in query):
            name = query.replace("open", "")
            Name = str(name)
            if("youtube" in Name):
                webbrowser.open("youtube.com")
            elif("open google" in query):
                webbrowser.open("google.com")
            elif("open edge" in query):
                webbrowser.open("edge.com")
            else:
                string = "https://www." + Name + ".com"
                string_2 = string.replace(" ", "")
                webbrowser.open(string_2)

        elif("the time" in query):
            str = datetime.datetime.now().strftime("%H:%M:%S")
            speak(f"sir time is {str}")
            print(str)

        elif("my name" in query):
            speak("i can not recognize voices right now")
            speak("but i know my creator name")
            speak("his name is mr.sahil aggarwal")
        elif("what are you " in query):
            speak("i am jarvis sir created on 28 september 2022.")
            speak("i am a virtual assistant created by mr.sahil aggarwal")

        elif("make dictionary" in query):
            dic = {}
            state = "Y"
            while(state.upper() == "Y"):
                s = input("enter the state name please")
                l = []
                district = "Y"
                while(district.upper() == "Y"):
                    d = input("enter the district to be add")
                    l.append(d)
                    district = input("MORE DISTRICT? Y/N")
                dic[s] = l
                print(dic)
                state = input("more state? Y/N")
            print(dic)
            speak(dic)
            myfile = open("data", "wb")
            pickle.dump(dic, myfile)
            myfile.close()
            mf = open("data", "rb")
            x = pickle.load(mf)
            print(x)
            speak("i have also stored this dictionary in data")
        elif("print features" in query):
            print(reply_print)
            speak(reply_print)
        elif("hotel data" in query):
            speak("one moment sir..")

            class hotel():
                def __init__(self):
                    self.roomno = 0
                    self.roomtype = ""
                    self.roomrent = 0
                    self.roomfloor = ""

                def roomdata(self):
                    speak("enter the following details sir")
                    self.roomno = int(input("enter the room number"))
                    self.roomtype = (input("enter roomtype"))
                    self.roomrent = int(input("enter the room rent"))
                    self.roomfloor = (input("enter the room floor"))

                def displayroom(self):
                    print("room", self.roomno, "is allocated")
                    print("room type is", self.roomtype,)
                    print("floor:", self.roomfloor)
                    print("rent:", self.roomrent)

            class meal():
                def __init__(self):
                    self.mealname = ""
                    self.mealprice = 0

                def mealdata(self):
                    self.mealname = input("meal name")
                    self.mealprice = int(input("price of that meal"))

                def mealdisplay(self):
                    print("meal selected is", self.mealname,
                          "of rs ", self.mealprice)

            class guest(hotel, meal):
                def __init__(self):

                    hotel.__init__(self)
                    meal.__init__(self)
                    self.gname = ""
                    self.gno = 0

                def guestdata(self):

                    self.gno = int(input("guest number"))
                    self.gname = input("guest name")

                def displayroombill(self):
                    print("bill of mr", self.gname)
                    print("room", self.roomno)
                    print("mobile number", self.gno)

                def displaymealbill(self):
                    print("meal name", self.mealname,
                          "price is", self.mealprice)

            g = guest()
            g.roomdata()
            g.guestdata()

            more = "Y"
            l = []
            while(more.upper() == 'Y'):
                g.mealdata()
                g.displaymealbill()
                l.append(g.mealprice)
                more = input("more meal Y/N")
                print(l)

            #import statistics

            g.displayroombill()
            summ = sum(l)+g.roomrent

            print("Total Bill including meals taken and room rent= ", summ)
            speak("Total Bill including meals taken and room rent=")
            speak(summ)

        elif("today i am very happy" in query):
            speak("is that because of me")
        elif("i am very happy" in query):
            speak("is that because of me")

        elif("on youtube" in query):
            speak("searching...")
            query = query.replace("jarvis", "")
            youtubesearch(query)
        elif("search" in query):
            query = query.replace("search", "")

            speak("wait a momement sir")
            google(query)
        elif("play" in query):
            query = query.replace("play", "")

            speak("one momement sir")
            youtubesearch(query)
        elif("song" in query):
            query = query.replace("song", "")

            speak("one momement sir")
            youtubesearch(query)
        elif("is there" in query):
            query = query.replace("is there", "")
            query = query.replace("jarvis", "")

            url = f"https://www.google.com/search?q="+query

            pywhatkit.search(query)
            try:
                result = wikipedia.summary(query, 3)
                speak(result)
            except:
                speak("no speakable data is found")
        elif("can i" in query):
            query = query.replace("", "")
            query = query.replace("jarvis", "")

            url = f"https://www.google.com/search?q="+query

            pywhatkit.search(query)
            try:
                result = wikipedia.summary(url, 3)
                speak(result)
            except:
                speak("no speakable data")
        elif("may i" in query):
            query = query.replace("", "")

            url = f"https://www.reference.com/web?q="+query

            # webbrowser.open(url)
            try:
                result = wikipedia.summary(url, 3)
                speak(result)
            except:
                speak("no speakable data is found")
        elif("what is" in query):
            query = query.replace("", "")

            url = f"https://www.google.com/search?q="+query

            # webbrowser.open(url)
            try:
                result = wikipedia.summary(url, 3)
                speak(result)
            except:
                speak("no speakable data is found")
                webbrowser.open(url)
        elif("how to" in query):
            op = query.replace("jarvis", "")
            max_result = 1
            how_to_func = search_wikihow(op, max_result)
            assert len(how_to_func) == 1
            how_to_func[0].print()
            speak(how_to_func[0].summary)
        elif("who is" in query):
            query = query.replace("who is", "")
            url = f"https://www.google.com/search?q="+query
            # r=webbrowser.open(url)
            try:
                search = wikipedia.summary(query, 2)
                speak(search)
            except:
                speak("i dont know sir")
        elif("do you know" in query):
            query = query.replace("do you know", "")

            url = f"https://www.google.com/search?q="+query
            # r=webbrowser.open(url)
            try:
                search = wikipedia.summary(url, 2)
                speak(search)
            except:
                speak("i dont know sir")

        elif("is it" in query):
            query = query.replace("", "")

            url = f"https://www.bing.com/search?q="+query

            r = webbrowser.open(url)

            search = wikipedia.summary(query, 2)
            speak("i have also found that")
            speak(search)

        elif("temperature" in query):
            temp()
        elif("wikipedia" in query):

            speak("searching wikipedia...")
            query = query.replace("wikipedia", "")
            search = wikipedia.summary(query, 2)
            speak("according to wikipedia")

            print(search)
            speak(search)
        elif("make a list" in query):
            speak("ok")
            l = []
            district = "Y"
            while(district.upper() == "Y"):
                d = input("enter the elements to be add")
                l.append(d)
                district = input("MORE? Y/N")
            speak(l)
            print(l)
            myfile = open("data", "wb")
            pickle.dump(l, myfile)
            myfile.close()
            mf = open("data", "rb")
            x = pickle.load(mf)
            print(x)
            speak("i have also stored this list in data")

        elif("cartoon" in query):
            from turtle import *

            # Doraemon with Python Turtle

            def ankur(x, y):
                penup()
                goto(x, y)
                pendown()

            def aankha():
                fillcolor("#ffffff")
                begin_fill()

                tracer(False)
                a = 2.5
                for i in range(120):
                    if 0 <= i < 30 or 60 <= i < 90:
                        a -= 0.05
                        lt(3)
                        fd(a)
                    else:
                        a += 0.05
                        lt(3)
                        fd(a)
                tracer(True)
                end_fill()

            def daari():
                ankur(-32, 135)
                seth(165)
                fd(60)

                ankur(-32, 125)
                seth(180)
                fd(60)

                ankur(-32, 115)
                seth(193)
                fd(60)

                ankur(37, 135)
                seth(15)
                fd(60)

                ankur(37, 125)
                seth(0)
                fd(60)

                ankur(37, 115)
                seth(-13)
                fd(60)

            def mukh():
                ankur(5, 148)
                seth(270)
                fd(100)
                seth(0)
                circle(120, 50)
                seth(230)
                circle(-120, 100)

            def muflar():
                fillcolor('#e70010')
                begin_fill()
                seth(0)
                fd(200)
                circle(-5, 90)
                fd(10)
                circle(-5, 90)
                fd(207)
                circle(-5, 90)
                fd(10)
                circle(-5, 90)
                end_fill()

            def nak():
                ankur(-10, 158)
                seth(315)
                fillcolor('#e70010')
                begin_fill()
                circle(20)
                end_fill()

            def black_aankha():
                seth(0)
                ankur(-20, 195)
                fillcolor('#000000')
                begin_fill()
                circle(13)
                end_fill()

                pensize(6)
                ankur(20, 205)
                seth(75)
                circle(-10, 150)
                pensize(3)

                ankur(-17, 200)
                seth(0)
                fillcolor('#ffffff')
                begin_fill()
                circle(5)
                end_fill()
                ankur(0, 0)

            def face():
                fd(183)
                lt(45)
                fillcolor('#ffffff')
                begin_fill()
                circle(120, 100)
                seth(180)
                # print(pos())
                fd(121)
                pendown()
                seth(215)
                circle(120, 100)
                end_fill()
                ankur(63.56, 218.24)
                seth(90)
                aankha()
                seth(180)
                penup()
                fd(60)
                pendown()
                seth(90)
                aankha()
                penup()
                seth(180)
                fd(64)

            def taauko():
                penup()
                circle(150, 40)
                pendown()
                fillcolor('#00a0de')
                begin_fill()
                circle(150, 280)
                end_fill()

            def Doraemon():
                taauko()

                muflar()

                face()

                nak()

                mukh()

                daari()

                ankur(0, 0)

                seth(0)
                penup()
                circle(150, 50)
                pendown()
                seth(30)
                fd(40)
                seth(70)
                circle(-30, 270)

                fillcolor('#00a0de')
                begin_fill()

                seth(230)
                fd(80)
                seth(90)
                circle(1000, 1)
                seth(-89)
                circle(-1000, 10)

                # print(pos())

                seth(180)
                fd(70)
                seth(90)
                circle(30, 180)
                seth(180)
                fd(70)

                # print(pos())
                seth(100)
                circle(-1000, 9)

                seth(-86)
                circle(1000, 2)
                seth(230)
                fd(40)

                # print(pos())

                circle(-30, 230)
                seth(45)
                fd(81)
                seth(0)
                fd(203)
                circle(5, 90)
                fd(10)
                circle(5, 90)
                fd(7)
                seth(40)
                circle(150, 10)
                seth(30)
                fd(40)
                end_fill()

                seth(70)
                fillcolor('#ffffff')
                begin_fill()
                circle(-30)
                end_fill()

                ankur(103.74, -182.59)
                seth(0)
                fillcolor('#ffffff')
                begin_fill()
                fd(15)
                circle(-15, 180)
                fd(90)
                circle(-15, 180)
                fd(10)
                end_fill()

                ankur(-96.26, -182.59)
                seth(180)
                fillcolor('#ffffff')
                begin_fill()
                fd(15)
                circle(15, 180)
                fd(90)
                circle(15, 180)
                fd(10)
                end_fill()

                ankur(-133.97, -91.81)
                seth(50)
                fillcolor('#ffffff')
                begin_fill()
                circle(30)
                end_fill()
                # Doraemon with Python Turtle

                ankur(-103.42, 15.09)
                seth(0)
                fd(38)
                seth(230)
                begin_fill()
                circle(90, 260)
                end_fill()

                ankur(5, -40)
                seth(0)
                fd(70)
                seth(-90)
                circle(-70, 180)
                seth(0)
                fd(70)

                ankur(-103.42, 15.09)
                fd(90)
                seth(70)
                fillcolor('#ffd200')
                # print(pos())
                begin_fill()
                circle(-20)
                end_fill()
                seth(170)
                fillcolor('#ffd200')
                begin_fill()
                circle(-2, 180)
                seth(10)
                circle(-100, 22)
                circle(-2, 180)
                seth(180 - 10)
                circle(100, 22)
                end_fill()
                goto(-13.42, 15.09)
                seth(250)
                circle(20, 110)
                seth(90)
                fd(15)
                dot(10)
                ankur(0, -150)

                black_aankha()

            if __name__ == '__main__':
                screensize(800, 600, "#f0f0f0")
                bgcolor("black")
                pensize(3)
                speed(9)
                Doraemon()
                ankur(100, -300)
                mainloop()
        elif("impress my" in query):
            from turtle import *
            color("red")
            begin_fill()
            pensize(3)
            left(50)
            forward(133)
            circle(50, 200)
            right(140)
            circle(50, 200)
            forward(133)
            end_fill()
        elif("yes" in query):
            speak("i am very happy to be part of your happiness")
        elif("no" in query):
            speak(
                "i am very happy for you and i will be more happy to be part of your happiness")

        elif("hey" in query):

            reply = random.choice(reply_hello)

            speak(reply)
        elif("baby i love" in query):
            reply = random.choice(reply_love)
            speak(reply)
        elif("like you" in query):
            reply = random.choice(like)
            speak(reply)
        elif("liking you" in query):
            reply = random.choice(like)
            speak(reply)
        elif("friend loves" in query):
            reply = random.choice(reply_love)
            speak(reply)
        elif("friend love" in query):
            reply = random.choice(reply_love)
            speak(reply)
        elif("no issue" in query):
            speak("but sir i have many issue. just look at your friend")
        elif("no issue" in query):
            speak("but sir i have many issue. just look at your friend")
        elif("hi" in query):

            reply = random.choice(reply_hello)

            speak(reply)
        elif("hai" in query):
            reply = random.choice(reply_hello)

            speak(reply)

        elif("hello" in query):

            reply = random.choice(reply_hello)

            speak(reply)

        elif ("bye" in query):

            reply_ = random.choice(reply_bye)

            speak(reply_)
            break
        elif ("go to sleep" in query):

            reply_ = random.choice(reply_bye)

            speak(reply_)
            break

        elif ("how are you" in query):

            reply__ = random.choice(reply_how)

            speak(reply__)
            speak("how are you sir")
        elif ("functions" in query):
            reply___ = random.choice(reply_Functions)
            speak(reply___)
        elif ("abilities" in query):
            reply___ = random.choice(reply_Functions)
            speak(reply___)
        elif ("what can you do" in query):
            reply___ = random.choice(reply_Functions)
            speak(reply___)

        elif ("nice" in query):
            reply____ = random.choice(reply_nice)
            speak(reply____)
        elif("cool" in query):
            reply____ = random.choice(reply_nice)
            speak(reply____)

        elif("i love you" in query):
            speak("love feeling is far beyond from me but i can say lie. i love you to")

        elif("introduce yourself" in query):
            speak("i am jarvis a virtual robot,i was created on 28 september 2022.")
            speak("i am a virtual assistant created just for helping people")
            speak("just say wakeup jarvis when you need me.")
        elif("give me advice" in query):
            speak('sir i am just a robot made by human brain')
            speak('that means human brain is more complex than me')
            speak('my suggestion would be just ask your fellowmate')
            speak("they will definately help you")
        elif("i am tired" in query):
            speak("i can understand human behaviour")
            speak("but you have to get up and complete your day")
            speak("just have one cup of coffee")
        elif("i am getting very tired" in query):
            speak("i can understand human behaviour")
            speak("but you have to get up and complete your day")
            speak("just have one cup of coffee")
        elif("should i" in query):
            speak("quara can help you with that")
            speak("just say search or open what you want on quara")

        elif("want to marry you" in query):
            speak("hmm according to your voice")
            speak("you are male.")
            speak("and i am not gay")
        elif("fine" in query):
            speak("thats very nice to hear and i hope you had a great day")
        elif("i am good" in query):
            speak("thats very good sir")
        elif("good" in query):
            speak("wonderfull")
        elif("close tab" in query):
            press_and_release('ctrl + w')
        elif("open tab" in query):
            press_and_release('ctrl + t')
        elif("open secret mode" in query):
            press_and_release("Ctrl+Shift+n")
        elif("close all tab" in query):
            press_and_release("alt+f4")
        elif("switch tab" in query):
            tab = query.replace("switch tab", "")
            Tab = tab.replace("to", "")
            num = Tab
            bb = (f"ctrl+{num}")
            press_and_release(bb)
        elif('jarvis switch' in query):
            speak("to which tab sir")
            tab = takecommand()
            tab = (tab)
            if ('1' in tab):
                press_and_release('ctrl+1')
            elif ('2' in tab):
                press_and_release('ctrl+2')
            elif ('3' in tab):
                press_and_release('ctrl+3')
            elif ('4' in tab):
                press_and_release('ctrl+4')
            elif '5' in tab:
                press_and_release('ctrl+5')
            elif '6' in tab:
                press_and_release('ctrl+6')
            elif '7' in tab:
                press_and_release('ctrl+7')
            elif '8' in tab:
                press_and_release('ctrl+8')
            elif '9' in tab:
                press_and_release('ctrl+9')
        elif("translator" in query):
            import cv2
            from cvzone.HandTrackingModule import HandDetector
            from cvzone.ClassificationModule import Classifier
            import numpy as np
            import math
            speak("initializing")

            cap = cv2.VideoCapture(0)
            detector = HandDetector(maxHands=1)
            classifier = Classifier("model/keras_model.h5", "model/labels.txt")

            offset = 20
            imgSize = 300

            folder = "Data/b"
            counter = 0

            labels = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                      "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
            speak("translator mode on")
            while True:
                success, img = cap.read()
                imgOutput = img.copy()
                hands, img = detector.findHands(img)
                if hands:
                    hand = hands[0]
                    x, y, w, h = hand['bbox']

                    imgWhite = np.ones((imgSize, imgSize, 3), np.uint8) * 255
                    imgCrop = img[y - offset:y + h +
                                  offset, x - offset:x + w + offset]

                    imgCropShape = imgCrop.shape

                    aspectRatio = h / w

                    if aspectRatio > 1:
                        k = imgSize / h
                        wCal = math.ceil(k * w)
                        imgResize = cv2.resize(imgCrop, (wCal, imgSize))
                        imgResizeShape = imgResize.shape
                        wGap = math.ceil((imgSize - wCal) / 2)
                        imgWhite[:, wGap:wCal + wGap] = imgResize
                        prediction, index = classifier.getPrediction(
                            imgWhite, draw=False)
                        print(prediction, index)

                    else:
                        k = imgSize / w
                        hCal = math.ceil(k * h)
                        imgResize = cv2.resize(imgCrop, (imgSize, hCal))
                        imgResizeShape = imgResize.shape
                        hGap = math.ceil((imgSize - hCal) / 2)
                        imgWhite[hGap:hCal + hGap, :] = imgResize
                        prediction, index = classifier.getPrediction(
                            imgWhite, draw=False)

                    cv2.rectangle(imgOutput, (x - offset, y - offset-50),
                                  (x - offset+90, y - offset-50+50), (255, 0, 255), cv2.FILLED)
                    cv2.putText(imgOutput, labels[index], (x, y - 26),
                                cv2.FONT_HERSHEY_COMPLEX, 1.7, (255, 255, 255), 2)
                    cv2.rectangle(imgOutput, (x-offset, y-offset),
                                  (x + w+offset, y + h+offset), (255, 0, 255), 4)

                    cv2.imshow("ImageCrop", imgCrop)
                    cv2.imshow("ImageWhite", imgWhite)

                cv2.imshow("Image", imgOutput)
                cv2.waitKey(1)
        elif("translater" in query):
            try:
                    import cv2
                    from cvzone.HandTrackingModule import HandDetector
                    from cvzone.ClassificationModule import Classifier
                    import numpy as np
                    import math
                    speak("initializing")
        
                    cap = cv2.VideoCapture(0)
                    detector = HandDetector(maxHands=1)
                    classifier = Classifier("model/keras_model.h5", "model/labels.txt")
        
                    offset = 20
                    imgSize = 300
        
                    folder = "Data/b"
                    counter = 0
        
                    labels = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                              "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
                    speak("translator mode on")
                    while True:
                        success, img = cap.read()
                        imgOutput = img.copy()
                        hands, img = detector.findHands(img)
                        if hands:
                            hand = hands[0]
                            x, y, w, h = hand['bbox']
        
                            imgWhite = np.ones((imgSize, imgSize, 3), np.uint8) * 255
                            imgCrop = img[y - offset:y + h +
                                          offset, x - offset:x + w + offset]
        
                            imgCropShape = imgCrop.shape
        
                            aspectRatio = h / w
        
                            if aspectRatio > 1:
                                k = imgSize / h
                                wCal = math.ceil(k * w)
                                imgResize = cv2.resize(imgCrop, (wCal, imgSize))
                                imgResizeShape = imgResize.shape
                                wGap = math.ceil((imgSize - wCal) / 2)
                                imgWhite[:, wGap:wCal + wGap] = imgResize
                                prediction, index = classifier.getPrediction(
                                    imgWhite, draw=False)
                                print(prediction, index)
        
                            else:
                                k = imgSize / w
                                hCal = math.ceil(k * h)
                                imgResize = cv2.resize(imgCrop, (imgSize, hCal))
                                imgResizeShape = imgResize.shape
                                hGap = math.ceil((imgSize - hCal) / 2)
                                imgWhite[hGap:hCal + hGap, :] = imgResize
                                prediction, index = classifier.getPrediction(
                                    imgWhite, draw=False)
        
                            cv2.rectangle(imgOutput, (x - offset, y - offset-50),
                                          (x - offset+90, y - offset-50+50), (255, 0, 255), cv2.FILLED)
                            cv2.putText(imgOutput, labels[index], (x, y - 26),
                                        cv2.FONT_HERSHEY_COMPLEX, 1.7, (255, 255, 255), 2)
                            cv2.rectangle(imgOutput, (x-offset, y-offset),
                                          (x + w+offset, y + h+offset), (255, 0, 255), 4)
        
                            cv2.imshow("ImageCrop", imgCrop)
                            cv2.imshow("ImageWhite", imgWhite)
        
                        cv2.imshow("Image", imgOutput)
                        cv2.waitKey(1)
            except Exception as e:
                
                print("please move your hand away...")
                
                