# About Project

This is a react based chat app project. User can search there previous conversations, send messages to people or they can also add new conversations to the chat.

# Steps to run this project on local server

1. Run this command "npm install"
2. Run this command "npm start"
3. In the browser open http://localhost:3000

Note: This is just the frontend of a chat application, no backend is attached and nothing is saved permanently on any database or any server.

# Deploy url 
https://shobhitk8055.github.io/chat-app

# Folder structure

This app is created using create-react-app so basic folder structure is same as create-react-app provides. All the logic of the application is written inside the src folder. The "src" folder contains these files and folders

1. index.tsx - Entry point of our react app
2. App.tsx - Root component which is parent of all our components
3. assets - Contains static content like conversations or json data
4. components - It contains the minor reusable components which are used in multiple locations like
    a. AddPerson - Add new conversation to the chat
    b. Message - Single message (it is same for sent and received)
    c. Person - Single person component which contains name, last message, image
5. containers - It contains the main blocks that constitutes our application.
    a. ChatBoard - The complete view which is shown when component loads
    b. PeopleList - The left sidebar of the app where recent conversations are shown
    c. Messages - The right panel where messages are loaded
6. store - The state managmenet tool for our application so that we store the data in here to be used in multiple location of our app. The library used for this is zustand (Zustand is used because it is very lightweight and is best for smaller applications)
    a. conversation - It contains recent conversations of a logged in user
    b. message - It contains two most important states, first is all messages from all the users, and second is the messages from the current user.
    c. user- It stores the logged in user and the user with which the logged in user is in conversation with
7. types - Type declarations for messages, conversations, users
8. utils - Utility function like format date

# Extensiveness

This app intially have minimal features, but it is highly extensive and you can save data in localstorage if you want your conversations to be stored after refresh also. Only change you need to make is get and set data to localstorage also while sending messages. 

This also goes for backend. If you attach a socket server, then by attaching you socket to the store of your application, you can receive data from socket or any other server.

