# Pratilipi Assignment Frontend
This is frontend part of the application.

# Tech Stack
- This project uses Create-React-App for quick bootstrapping
- This is an SPA which uses JWT for Auth
- The backend REST API is located at [Backend URI](https://stories-api-js.herokuapp.com)
- WebSockets [socket.io](https://socket.io) are used to get the currently viewing count for each story
- This project uses React Hooks and Context API for easy component lifecycle and Auth Context sharing respectively
- React ```useReducer``` was instead of Redux for State Management  
- Libraries Used:
    - @material-ui/core
    - @material-ui/icons
    - axios
    - socket.io-client

## Live Version
Netlify was used for CI/CD since they have a very generous free plan.
It is deployed at: https://musing-sammet-6e2f36.netlify.app/

### Install Locally
To install locally,
```npm i```
or 
```yarn install```

The project will be locally deployed at : http://localhost:3000

## For more information
Feel free to visit my site: [saumyajain.co](https://saumyajain.co)
