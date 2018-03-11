### Hyperledger Fabric - React + Redux + Thunks + Axios + Material UI

 - https://medium.com/@nomanbinhussein/reactjs-todo-app-tutorial-with-redux-57ca14cae621

```
mkdir -p ~/Sites/hyperledger-fabric-react-hyperledger-fabric-react-client

cd ~/Sites/hyperledger-fabric-react-client

nvm install --lts

nvm use --lts
```

```
npm install -g create-react-app
```

```
create-react-app hyperledger-fabric-react-client
```

## We suggest that you begin by typing

```
cd hyperledger-fabric-react-client && yarn start
```

## Dependencies

 - https://yarnpkg.com/lang/en/docs/cli/add/

```
yarn add \
react-router \
react-router-dom \
redux \
react-redux \
redux-logger \
redux-thunk \
axios \
material-ui@next \
material-ui-icons
```

### redux-devtools-extension

 - https://github.com/zalmoxisus/redux-devtools-extension

```
yarn add redux-devtools-extension -D
```

### Redux Thunk middleware

 - https://github.com/gaearon/redux-thunk

Allows you to write action creators that return a function instead of an action.

The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 

The inner function receives the store methods dispatch and getState as parameters.

### What’s a thunk?!

A thunk is a function that wraps an expression to delay its evaluation.

## Axios 

 - https://github.com/axios/axios

Promise based HTTP hyperledger-fabric-react-client for the browser and node.js

- Make XMLHttpRequests from the browser.
- Make http requests from node.js
- Supports the Promise API.
- Intercept request and response.
- Transform request and response data.
- Cancel requests.
- Automatic transforms for JSON data.
- hyperledger-fabric-react-client side support for protecting against XSRF.

##W React Router

 - https://github.com/ReactTraining/react-router

### Material UI

 - https://github.com/mui-org/material-ui

## Multiuser Hyperledger Fabric REST server

 - https://hyperledger.github.io/composer/integrating/enabling-rest-authentication

 - https://github.com/settings/developers

```
nvm install --lts

nvm use --lts
```

```
npm install -g passport-github
```

## In a console run

```
cd ~/Sites/car-manufacture-network

nvm install --lts

nvm use --lts
```

```
export COMPOSER_PROVIDERS='{
  "github": {
    "provider": "github",
    "module": "passport-github",
    "hyperledger-fabric-react-clientID": "SECRET_hyperledger-fabric-react-client_ID",
    "hyperledger-fabric-react-clientSecret": "hyperledger-fabric-react-client_SECRET",
    "authPath": "/auth/github",
    "callbackURL": "/auth/github/callback",
    "successRedirect": "/",
    "failureRedirect": "/"
  }
}'
```

```
echo $COMPOSER_PROVIDERS
```

```
composer ps

composer card list
```

### Start the Multiuser REST server

```
composer-rest-server -c admin@vehicle-manufacture-network -m true
```

- http://localhost:3000/auth/github

## In a second console run

```
cd ~/Sites/car-manufacture-network

nvm install --lts

nvm use --lts
```

```
composer ps

composer card list

composer-playground -p 5000
```

Happy Hacking!!!
