<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Client from "layouts/Admin.js";


// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
// import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/client" component={Client} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      {/* <Route path="/landing" exact component={Landing} /> */}
      <Route path="/profile" exact component={Profile} />
      {/* <Route path="/" exact component={Index} /> */}
      <Route path="/" exact component={Landing} />

      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
=======
// src/index.js

import React from 'react'; // Import React library for building user interfaces
import ReactDOM from 'react-dom/client'; // Import the new root API from React 18
import App from './App'; // Import the main App component which will be the root of your component tree
import './styles/index.css'; // Import global CSS styles to apply consistent styling across the app

// Ensure that the HTML element with id 'root' exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found. Please ensure your index.html contains a div with id 'root'.");
}

// Create a root element using React 18's new root API
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.StrictMode helps in identifying potential problems in the application
// It activates additional checks and warnings for its descendants, and runs only in development mode

// Optional: Service Worker for offline capabilities
// Uncomment and configure if you want to enable offline capabilities and caching

// Import service worker registration script
// import * as serviceWorker from './serviceWorker';

// Register the service worker to enable offline capabilities
// This will cache files and improve performance
// serviceWorker.register();

// Note: Make sure to have a `serviceWorker.js` file if you decide to use it
// You can use `serviceWorker.unregister()` if you do not want to use a service worker
>>>>>>> cf468cd40bdeab05fb264e4ce790f5a88545c8a6
