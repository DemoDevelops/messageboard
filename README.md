# About
This app was built with react, webpack, sass, redux, react-router, bootstrap grid, and reactstrap.

# Setup
1. Clone the repo
2. run the command "yarn install" to install all the dependencies
3. run the command "yarn start"
4. open in prefered web broswer at http://localhost:3000/

# Folder Structure
My prefered folder structure inside of the src directory is broken down into actions, components, containers, reducers, and store.

## Actions:
Since the app was relitively small my actions were just stored in a single index file for easy importing. This is for communication and passing data to the redux reducers.

## Components:
This is meant for lower level components that will only take props and not interact with redux store directly. The structure here was to logically show which components pertained to what part of the app. Each folder at a minimum includes the component js file, the sass file, and the auto compiled css file. 

The Post folder for example has subfolders because those components will only be accessed inside of the Post component and not something used anywhere else in the application. This allowed me to break up the form submition logic for comments into it's own component but still use the main post stylesheet. This keeps all the components lightweight and the import paths shorter.

The Button component on the other hand is used by multiple parts of the app in the root of the components folder.

## Containers:
This is where the higher level react compoents live to hook into the redux store. They import the necessary actions to pass down to its children components by utilizing mapStateToProps and mapDispatchToProps. They also push the history router object when it's necessary for the flow.

## Reducers:
This is where the redux store state modification lives. The posts reducer handles all the actions and creating a new store to force the lower level components to update.

## Store:
The creation of our application wide state.
