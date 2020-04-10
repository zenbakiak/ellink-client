# ell.ink (URL shortener ReactJS client)

## To run it locally

In the project directory, you can run:

## .env

Ensure you have your .env file in the root directory of this application.

```
REACT_APP_BASE_URL=https://localhost:3000
```

### `yarn install`

To install all dependencies (yeah, we know, it takes so much time)

### `yarn start`

Start your application in local environment.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deployment

This app was deployed to firebase hosting:

1 - First of all you need a firebase account, the firebase-tools and sdk.

  [firebase](https://firebase.google.com/)

  [firebase command line tools](https://github.com/firebase/firebase-tools)

2 - Once you’re logged in, you can initialize a project inside the root folder of this application.

  `$ firebase init`

3 - When you're prompted to select which services you want to enable, chose firebase hosting with your space bar.

4 - Set the project id you want to use for your project.

5 - Set `build` as your public folder.

6 - finish the configuration wizard

7 - After all those steps, you just need to make a fresh build with `yarn build`

8 - And finally, run `firebase deploy`, that's all, you are ready.


## author

[zenbakiak](http://gitlab.com/zenbakiak)