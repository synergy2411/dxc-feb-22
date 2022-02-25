Break => 11:00 - 11:20 (20 Minutes)
Lunch => 01:00 - 01:50 (50 Minutes)
Break => 03:30 - 03:50 (20 Minutes)

# What is JavaScript?
- Front-end Code
- Client-side Validation
- Business Layer Code
- Scripting Language (Embedded with HTML)
- Event-Driven
- Single-threaded
- Asynchronous Code
- Non-blocking
- Interpreted (SpiderMonkey, Chakra, V8)
- Light-weight
- Fast & Performant App
- Server-side Script
- ECMA Community - ES2015 / ES6 (Next-Gen JavaScript)


Full Stack App - MEAN | MERN | MEVN
M - MongoDB (JSON format)
E - Express (JS Framework)
A/R/V - Angular / React / VueJS (Client-Side)
N - NodeJS (Platform)


Synchronous Task - Console.log, if/else, for
Asynchronous Task - Timers, read/writing, socket, remote server call, DB Conn
    - Macro : All Async task are Macro
    - Micro : Promises, queueMicrotask

# Ways to handle Async JavaScript
- Callback functions
- Promise API
- Async...await
- Observable - reactivex.io


# Object Hierarchy
Object - valueOf, toString(), hasOwnProperty(), isPrototypeOf(), constructor etc
    String : charAt(), indexOf(), subString(), length etc
        var str = "Some String";
        str.toString();
    Number : toFixed, isNan()
    Boolean : isBoolean()
    Array : pop, push, shift, every, filter, some, slice etc
    Date : getDate(), getMonth(), Date.now()  etc
    Function : call(), bind(), apply(), name
    Person : firstName, lastName, sayHello()


# ES2015 / ECMAScript6
- Arrow Functions
- let and const 
- Destructuring
- Spread / Rest Operator
- Template Literals
- Promise API
- Classes
- Inheritance
- Map : key-value / Set : unique values
- Modules


# Array Methods -
- map
- push
- find
- filter
- some
- every
- findIndex
- forEach


# CommonJS Module Pattern (by default in NodeJS)
    - to import the module => require
    - to export the module => module.exports variable
# ES6 Module (Third Party library - babelJS)
    - to import -> import statement
    - to export -> export keyword
# AMD Modules


# to generate package.json
- npm init

# NPM Commands
- npm init [-y]
- npm install [packageName] [-D / --save-dev]
- npm outdated
- npm update
- npm config get/set
- npm adduser
- npm publish
- npm unpublish
- npm ls [--depth 0] [-g]
- npm search <keyword>

# Semantic Versioning X.Y.Z (semver.org)
X : Major : new features added in app, NOT backward compatible -> 2.0.0
Y : Minor : new features added in app, backward compatible -> 1.1.0
Z : Patch : bug fixes, performance bug -> 1.0.1

1.0.0

# Nodemon
- npm i nodemon -g

# Weather App
Mapbox API - 
https://api.mapbox.com/geocoding/v5/mapbox.places/pune.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ
Forecast API -
https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/37.8267,-122.4233


# Streams
- Readable - Request, standard Input
- Writable - Response, standard output
- Transform - transform one stream into another ; compression/ encryption
- Duplex - Network Socket

# Express
- Adding middleware - app level, endpoint level
- URL Handling - Route Parameter; Request Body, Query String
- Router - /posts - PostRouter

# MongoDB | Mongoose
- Schema based solution
- Validation - required, Custom validators
- Hooks

# JWT Authentication
- sign
- verify

# View Engines
- EJS
- Handlebars
- Jade / Pug
- Vash

# Testing - Mocha Chai ChaiHTTP

# Socket Programming 
- socket.io

# App Deployment - Heroku Cloud


dxcuser
sXSgCbtFfU1AJ1LB

cluster0-shard-00-02.e9xsq.mongodb.net:27017

mongodb+srv://dxcuser:sXSgCbtFfU1AJ1LB@cluster0.e9xsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

Heroku Cloud -> MongoDB Atlas (free version -> NO restriction)


# App Deployment Steps - Heroku
- Download heroku CLI - npm i heroku -g
- Signup and login on heroku.com
- Create Git Repo for deployed project
- heroku login
- heroku keys:add
    - optional Step - to generate ssh key -> git bash -> ssh-keygen
- heroku create <unique-app-name>
- git remote
- git push heroku main [commandline args]


# Socket Programming
- Bi-directional Full Duplex communication
- Connected Architecture
- socket.io


# Microservices
- independent piece of code
- fast to develop
- ease of testing
- faster/ performant app
- Smaller Functionality
- Platform independent
- Boundries with API


# Lerna installation
- npm i lerna -g
- lerna init --independent

- npx lerna init --independent