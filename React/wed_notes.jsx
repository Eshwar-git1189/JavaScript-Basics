//What are Props?

// Props are short for properties. They are a way to pass data from one component to another in React.
// Props are read-only and cannot be modified by the child component.
// They are used to pass data and event handlers down the component tree.
// Props are passed to components as attributes in JSX.
// Example of using props in a functional component:
//
// js
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
//
// Usage:
// js
 <Greeting name="Alice" />
// Output:
// Hello, Alice!
//
// In this example, the Greeting component receives a prop called name and uses it to display a personalized greeting.
// Props can be of any data type, including strings, numbers, arrays, objects, and functions.
// They can also be used to pass event handlers, allowing child components to communicate with their parents.
// Props are immutable, meaning that a child component cannot modify the props it receives.
// Instead, the parent component should manage the state and pass down updated props as needed.

// Props are a fundamental concept in React and are essential for building reusable and composable components.
// They allow for a unidirectional data flow, where data is passed from parent to child components.





// What are State?

// State is a built-in object in React that allows components to manage their own data.




//prop types

// PropTypes is a library that allows you to specify the types of props that a component should receive.    
// It helps catch bugs by ensuring that the correct data types are passed to components.
// PropTypes can be used to validate props in both class and functional components.
// Example of using PropTypes in a functional component:
//
// js
import PropTypes from 'prop-types';
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
// Usage:
// js
<Greeting name="Alice" />
// Output:
// Hello, Alice!
// In this example, the Greeting component expects a prop called name of type string. If the prop is not provided or is of the wrong type, a warning will be displayed in the console.


// ==> Here’s a concise 10-line summary of props in React:

// Props (short for "properties") are used to pass data from parent to child components.

// *They make components dynamic and reusable by customizing them via input values.

// *Props are read-only – child components cannot modify them directly.

// *Props are passed as attributes in JSX, e.g., <Component name="John" />.

// *In the child component, props are accessed via the props object (or destructured).

// *Props can be of any data type – string, number, object, function, etc.

// *They help maintain a unidirectional data flow in React apps.

// *You can use default props for fallback values using defaultProps or default parameters.

// *Props can be used to pass functions, enabling parent-child communication.

// *Props are fundamental for component composition and building scalable UIs.



// What is React Router?

// React Router is a library for routing in React applications. It enables navigation between different components and views without reloading the entire page. This allows for a single-page application (SPA) experience, where only the necessary components are rendered based on the current URL.

// React Router provides a declarative way to define routes and manage navigation. It allows you to create dynamic and nested routes, handle URL parameters, and manage browser history. With React Router, you can build complex applications with multiple views while maintaining a smooth user experience.

// React Router is widely used in modern React applications to create a seamless navigation experience. It is easy to integrate and provides powerful features for managing routes and navigation.

// Example of using React Router in a simple application:
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
// In this example, we define a simple React application with two routes: Home and About.
// The BrowserRouter component wraps the entire application, enabling routing functionality.
// The Link component is used to create navigation links, while the Route component defines the mapping between the URL path and the corresponding component.
// The Switch component ensures that only one route is rendered at a time, based on the current URL.
// The NotFound component is rendered for any unmatched routes, providing a fallback for users.
// React Router is a powerful tool for building SPAs and managing navigation in React applications.
// It allows for a clean and organized way to handle routing, making it easier to build complex applications with multiple views.
// React Router is a powerful library for managing navigation and routing in React applications.
// It allows developers to create single-page applications (SPAs) with dynamic routing capabilities.
