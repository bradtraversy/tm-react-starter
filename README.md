# TM Create-React-App

## Available Scripts

Custom version of create-react-app with some changes and additions

## Changes

- Removed index.css, serviceworker, logo and App.test
- Installed React Router v4
- App.js changes (Added Header, Route, arrow function)
- Added a components folder with Header, Home & Spinner
- Added base styles in App.css for buttons, backgrounds, etc (Remove if needed)
- Added Font Awesome to public/index.html

## Usage

```
clone git@github.com:bradtraversy/tm-react-starter.git
npm install
```

### File Structure

```
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── components
        ├── layout
            ├── Header.js
            ├── Spinner.js
        ├── pages
            ├── Home.js
    ├── App.css
    ├── App.js
    ├── index.js
```

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
