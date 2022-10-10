# MERN-expressJs

>## Overview
- This project has been designed to understand the basics of ExpressJs framework.
- This project has made use of MongoDB Cloud platform as a database server.
- It covers basic session based authentication.
- Two service classes have been implemented (CRUD operations):
    - Authentication
    - Students Service


>## Execution
- Make sure your present location is inside the **_MERN-server_** folder.
- Create **.env** file consisting the MongoDB connection URI. You may follow the **`.env sample`** file provided as an example.
- The Libraries that are used here, (Make sure you install it using `npm` command) 
    - express 
    - mongoose 
    - dotenv 
    - cors 
    - body-parser 
    - bcrypt 
    - express-session 
    - connect-mongodb-session

- Next, Run the below command:
    ```
        node app.js
    ```

# MERN - ReactJS [Frontend Client]

- We have created the frontend side of the application using ReactJS.
- This frontend client contains 3 main components:
    - LoginForm
    - SignUpForm
    - Profile

- The structure of the code is based on the template provided by *create-react-app*.
- In this project, we have used functional components but you can use class components too if that suits your project.
- Most of the key concepts that are used in any React application are covered in this project.

### Steps to run the Client App.

- Open a new terminal and navigate to the location MERN-client/mern-client.
- Run the following command to install the dependencies :
    ```
    npm install
    ```
    This will create the node_modules folder and install all the packages in it.
-  Run the following command to start the application:
    ```
    npm start
    ```

## Resources:
### ReactJS
-   [Tutorial from official site](https://reactjs.org/tutorial/tutorial.html)
-   [Tutorial video covering the basics](https://www.youtube.com/watch?v=Ke90Tje7VS0) 
-   [Functional Components](https://www.knowledgehut.com/blog/web-development/react-functional-components)
-   Already available components:
    * [Prime React](https://www.primefaces.org/primereact/setup/)
    * [React Widgets](https://jquense.github.io/react-widgets/docs/)
 
### Babel [just for concept]
-   [https://babeljs.io/repl](https://babeljs.io/repl)
        
This is handled internally by the package
### MERN Stack
-   [Step By Step Tutorial](https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/)

### Changes
- Changed schema and all the related things.
- Connected to MongoDB via Atlas.

