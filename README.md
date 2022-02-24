
# Webpack Application

A simple web application to give developers an easy way to rapidly prototype web components with a combination of JavaScript, CSS (or a preprocessor) with or without Tailwind.  I've always been interested in Webpack, and how it is used. 


## Code Styling

In the instance that anyone else would like to clone or pull this repository, I've made sure to install ESLint and Prettier here without adding their respective JSON files.  There's no need for me to enforce my coding style on others.  I've also added a couple of example files for each to give a good example to everyone else.


## Documentation
This will be slowly added into the repository, but I will make sure that it will prove useful for anyone who's interested in this application for any reason.


### Installation

1. Create a new directory to store this application.
2. Clone the repository into the new directory.
   1. through git terminal `git clone https://github.com/TonyT0216/webpack-app-bravo.git`
3. Navigate inside the app's root directory.
4. `npm install` (I don't expect this to be used in continuous integration)


### Usage

To run the application in development mode: `npm run build:development`.  
To run the application in production mode: `npm run build:production`.  
To clean up the `dist/` subdirectory: `npm run clean`.  
To serve the application via http-server module: `npm run serve`.  


### Works Cited

Tania Rascia for giving me the idea to serve the application configuration via environment.  
SurviveJS for getting me through the more complex parts of creating a webpack application.
