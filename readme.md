# Vue.js with Sails.js project

This project is for those who are new to
[single-page applications](https://en.wikipedia.org/wiki/Single-page_application) and want to learn through a real
example. Besides that, it should cover most of the features from Sails.js and Vue.js, like a reference book. For a better understanding, you should be aware of [JavaScript ES6 features](http://es6-features.org) and also [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

To see this project in action, click [here](https://vue-sails-example.herokuapp.com/).

## Features

This project should cover as many features as possible. It should be used as an example for newbies and also serve as
a reference book. These notable elements are covered.

- Internationalization
- Unit and functional tests (frontend tests with Cypress.io)
- Dedicated mobile version
- Socket.IO usage
- Local storage plus cookie authentication
- User input validation
- Progressive web app support
- State persistence
- Natural language processing

## Installation

### Prerequisites

To get started, you need Node.js. It's also recommend to have Sails.js globally installed. If you don't want to have Sails.js globally installed just use `npm run dev`. Finally, install the Node.js modules.

#### Get Node.js

```bash
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

#### Get Sails.js (optional)

```bash
$ sudo npm install sails -g
```

#### Install modules

```bash
$ cd front-end && npm install
$ cd ../back-end && npm install
```

## Usage

### Development

`cd back-end && sails lift` and then `cd ../front-end && npm run serve`. After that, open
[localhost:8080](http://localhost:8080) in your browser. Make sure that you start both servers simultaneously.

### Production

First, you have to build up your Vue.js components and merge them with Sails.js. This can be done with
`cd front-end && npm run build`. Now do `cd ../back-end && NODE_ENV=production node app.js` and then open your browser and go to
[localhost:1337](http://localhost:1337).

## Commands

### Backend

For a complete list see `package.json`.

| Command             | Description                                                                                      |
|---------------------|--------------------------------------------------------------------------------------------------|
| `npm run dev`       | Start Sails.js if you didn't install it globally                                                 |
| `npm run dev:watch` | Start Sails.js with watch mode if you didn't install it globally (this will delete new products)                                 |
| `npm run test`      | Run all available tests like unit or functional tests                                            |

### Frontend

For a complete list see `package.json`.

| Command                   | Description                                                                              |
|---------------------------|------------------------------------------------------------------------------------------|
| `npm run serve`           | Start the development server at [localhost:8080](http://localhost:8080)                  |
| `npm run build`           | Minfiy, uglify and merge the application with Sails.js                                   |
| `npm run test`            | Run all available tests like unit or functional tests                                    |
