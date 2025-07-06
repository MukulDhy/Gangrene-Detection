import pyttsx3
import datetime
import speech_recognition as sr
import pyaudio
import wikipedia
import webbrowser
import bs4
from bs4 import BeautifulSoup
import requests
import pywhatkit
import os
import pickle
import random
import json
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Embedding, Dropout
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.layers import Bidirectional, Embedding, LSTM, Dense, Dropout, Attention
from keras.layers import Attention
from keras.layers import Attention, Concatenate, Dense

engine = pyttsx3.init("sapi5")
voices = engine.getProperty("voices")
engine.setProperty("voice", voices[0].id)
engine.setProperty("rate", 185)


def speak(audio):
    print("   ")
    print(f"jarvis:{audio}")
    print("   ")
    engine.say(audio)
    engine.runAndWait()

def takecommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("listening...")
        r.pause_threshold = 0.7
        try:
            audio = r.listen(source, timeout=5)
            print("recognizing...")
            query = r.recognize_google(audio, language="en-in")
            print(f"user said: {query}\n")
            return query.lower()
        except sr.UnknownValueError:
            print("")
        except sr.RequestError as e:
            print(f"Request error; {e}")
        except Exception as e:
            print(f"Error during recognition: {e}")
        return ""

def wish():
    hour = int(datetime.datetime.now().hour)
    if 0 <= hour and hour <= 12:
        speak("good mornimg sir")

    elif 12 <= hour and 18 >= hour:
        speak("good after noon sir")
    else:
        speak("good evening sir")
    speak("i am jarvis your virtual assistent")

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


# Extract data for chatbot training
file_path = 'response.json'
with open(file_path, 'r') as f:
    data = json.load(f)

intents = data["intents"]
all_words = []
tags = []
xy = []

for intent in intents:
    tag = intent['tag']
    tags.append(tag)
    for pattern in intent['patterns']:
        words = pattern.lower().split()
        all_words.extend(words)
        xy.append((words, tag))

all_words = sorted(set(all_words))
tags = sorted(set(tags))
tag_mapping = {tag: i for i, tag in enumerate(tags)}

tokenizer = Tokenizer(oov_token='<OOV>')
tokenizer.fit_on_texts([pattern for pattern, tag in xy])
X_train = tokenizer.texts_to_sequences([pattern for pattern, tag in xy])
X_train = pad_sequences(X_train, padding='post')
y_train = [tag_mapping[tag] for pattern, tag in xy]

vocab_size = len(tokenizer.word_index) + 1
max_sequence_length = max([len(seq) for seq in X_train])

X_train = np.array(X_train)
y_train = np.array(y_train)

embedding_dim = 128  # Set an appropriate value for embedding dimension

# Initialize embedding_matrix with random values
embedding_matrix = np.random.rand(vocab_size, embedding_dim)

# Build your model
model = Sequential()
model.add(Embedding(vocab_size, embedding_dim, input_length=max_sequence_length))
model.add(LSTM(128, return_sequences=True))
query_value_attention = Attention()([model.layers[-1].output, model.layers[-1].output])  # Apply Attention to the LSTM output
attended_output = Concatenate()([model.layers[-1].output, query_value_attention])
model.add(LSTM(64))
model.add(Dense(64, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(len(tags), activation='softmax'))

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])


model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(X_train, y_train, epochs=100, batch_size=8, validation_split=0.1)

predicted_tag = ""
response = "" 
if __name__ == "__main__":
    wish()

    st = datetime.datetime.now().strftime("%d:%M")

    dt = datetime.datetime.now().strftime("%b %d %Y")
    #speak((f"today is {dt} and time is {st}"))
    # temp()

    speak("how may i help you")
    while True:
        
        query = takecommand().lower()

        if query == 'exit':
            print("jarvis: Goodbye!\n")
            break
       


        if query:
            # Generate response using the chatbot model
            input_seq = tokenizer.texts_to_sequences([query])
            input_seq = pad_sequences(input_seq, maxlen=max_sequence_length, padding='post')
            output_seq = model.predict(input_seq)
            predicted_tag_index = np.argmax(output_seq, axis=-1)[0]
            predicted_tag = tags[predicted_tag_index]

            response = "I'm sorry, I didn't understand that."

            for intent in intents:
                if intent["tag"] == predicted_tag:
                   responses = intent["responses"]
                   response = np.random.choice(responses)
                   break
        else:
            # If no valid input is provided, continue the loop without generating a response
            continue
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

        elif("my name" in query):
            speak("i can not recognize voices right now")
            speak("but i know my creator name")
            speak("his name is mr.sahil aggarwal")\
            
       

        

        print("\njarvis:")
        print(response)
        engine.say(response)
        engine.runAndWait()