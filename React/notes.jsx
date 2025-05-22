// ⚛️ What is React?
// React is a JavaScript library used for building user interfaces (UIs), especially single-page applications (SPAs). It was developed by Facebook and is now maintained by Meta and an open-source community.
// React ia a open source JavaScript library for building user interfaces. 
// 
// It allows developers to create reusable UI components and manage the state of those components efficiently.
//  React is often used for building single-page applications (SPAs) where the user interacts with the application without needing to reload the entire page.
//  It uses a virtual DOM to optimize rendering and improve performance, making it suitable for complex and dynamic UIs.
//
// ⚛️ Why React?
// React is popular because it allows developers to create dynamic and interactive UIs efficiently. It uses a component-based architecture, which means you can build encapsulated components that manage their own state and then compose them to create complex UIs. This modularity makes code easier to maintain and reuse.
//
// ⚛️ Key Features of React:
// 1. **Component-Based Architecture**: React applications are built using components, which are reusable pieces of code that define how a certain part of the UI should look and behave.
// 2. **Virtual DOM**: React uses a virtual representation of the DOM to optimize rendering. When the state of an object changes, React first changes it in the virtual DOM, then it compares the virtual DOM with the real DOM and updates only the parts that have changed.
// 3. **One-Way Data Binding**: Data flows in one direction, from parent to child components, making it easier to understand how data changes affect the UI.
// 4. **JSX**: React uses JSX, a syntax extension that allows you to write HTML-like code within JavaScript. This makes it easier to visualize the UI structure.
// 5. **State and Props**: Components can maintain their own state and receive data through props, allowing for dynamic and interactive UIs.
// 6. **Lifecycle Methods**: React components have lifecycle methods that allow you to run code at specific points in a component's life, such as when it mounts, updates, or unmounts.
// 7. **Hooks**: React introduced hooks, which allow you to use state and other React features without writing a class. This makes it easier to share logic between components.
// 8. **Ecosystem**: React has a rich ecosystem of libraries and tools, such as React Router for routing, Redux for state management, and many others that enhance its capabilities.
// 9. **Community and Support**: React has a large community, which means plenty of resources, tutorials, and third-party libraries are available.
// 10. **Performance**: React's efficient rendering and reconciliation process make it suitable for building high-performance applications.

//⚛️ React vs. Other Frameworks
// React is often compared to other JavaScript frameworks like Angular and Vue.js. Here are some key differences:
// 1. **Flexibility**: React is more flexible and less opinionated than Angular, allowing developers to choose their own libraries for routing, state management, etc.
// 2. **Learning Curve**: React has a gentler learning curve compared to Angular, which has a steeper learning curve due to its complexity.
// 3. **Size**: React is smaller in size compared to Angular, making it faster to load.
// 4. **Community**: React has a larger community and more third-party libraries available compared to Vue.js.
// 5. **Performance**: All three frameworks have good performance, but React's virtual DOM and efficient rendering give it an edge in certain scenarios.
// 6. **State Management**: React's state management is more straightforward, while Angular has a more complex dependency injection system.
// 7. **Syntax**: React uses JSX, which may be unfamiliar to some developers, while Angular uses HTML templates.
// 8. **Two-Way Data Binding**: Angular supports two-way data binding, while React uses one-way data binding.
// 9. **Ecosystem**: Angular has a more opinionated ecosystem, while React allows developers to choose their own libraries and tools.
// 10. **Popularity**: React is one of the most popular JavaScript libraries, while Angular and Vue.js have their own dedicated communities.
//
// ⚛️ React Ecosystem
// The React ecosystem includes a variety of libraries and tools that enhance React's capabilities. Some popular ones include:  
// 1. **React Router**: For routing and navigation in single-page applications.
// 2. **Redux**: For state management in larger applications.
// 3. **Next.js**: A framework for server-side rendering and static site generation with React.
// 4. **Gatsby**: A static site generator for React.
// 5. **Styled Components**: For styling React components using tagged template literals.
// 6. **Material-UI**: A popular UI component library for React.



//2) Advantages of React
// 1. **Component Reusability**: React's component-based architecture allows developers to create reusable components, reducing code duplication and improving maintainability.
// 2. **Performance**: React's virtual DOM and efficient rendering process lead to better performance, especially in applications with frequent updates.
// 3. **Developer Experience**: React's declarative syntax and JSX make it easier to understand and work with, improving the developer experience.
// 4. **Strong Community Support**: React has a large and active community, providing a wealth of resources, libraries, and tools.
// 5. **SEO-Friendly**: React can be used with server-side rendering (SSR) frameworks like Next.js, making it more SEO-friendly.
// 6. **Cross-Platform Development**: React Native allows developers to build mobile applications using React, enabling code sharing between web and mobile platforms.
// 7. **Rich Ecosystem**: React has a rich ecosystem of libraries and tools that enhance its capabilities, making it suitable for various use cases.
DOM :https://www.w3schools.com/js/pic_htmltree.gif


Components in React
// Components are the building blocks of React applications. They are reusable pieces of code that define how a certain part of the UI should look and behave.
// Components can be functional or class-based:
// 1. **Functional Components**: These are JavaScript functions that return JSX. They can accept props and manage their own state using hooks.
// 2. **Class Components**: These are ES6 classes that extend the React.Component class. They can have lifecycle methods and manage their own state.
//
// Example of a Functional Component:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useContext } from 'react';

//Types of Components
// 1. **Functional Components**: These are JavaScript functions that return JSX. They can accept props and manage their own state using hooks.
// 2. **Class Components**: These are ES6 classes that extend the React.Component class. They can have lifecycle methods and manage their own state.
// 3. **Pure Components**: These are components that only re-render when their props or state change. They can be created using the `React.PureComponent` class.
// 4. **Higher-Order Components (HOCs)**: These are functions that take a component and return a new component with additional functionality.
// 5. **Functional Components with Hooks**: These are functional components that use React hooks to manage state and lifecycle methods.
// 6. **Presentational Components**: These are components that focus on how things look. They receive data and callbacks exclusively via props.
// 7. **Container Components**: These are components that focus on how things work. They manage state and pass data to presentational components.
// 8. **Controlled Components**: These are components that derive their state from props and notify changes via callbacks.
// 9. **Uncontrolled Components**: These are components that manage their own state internally and do not rely on props for their state.
// 10. **Memoized Components**: These are components that use the `React.memo` function to optimize rendering by preventing unnecessary re-renders.
// 11. **Error Boundary Components**: These are components that catch JavaScript errors in their child components and display a fallback UI.
// 12. **Fragment Components**: These are components that allow you to group multiple elements without adding extra nodes to the DOM.
// 13. **Portal Components**: These are components that allow you to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
// 14. **Suspense Components**: These are components that allow you to "suspend" rendering while waiting for some asynchronous operation to complete.
// 15. **Lazy-loaded Components**: These are components that are loaded asynchronously using `React.lazy()` and `Suspense`.
// 16. **Custom Hooks**: These are functions that allow you to extract and reuse stateful logic across multiple components.
// 17. **Context Components**: These are components that use the React Context API to share data between components without passing props down manually.


Steps to create a React Router
// 1. **Install React Router**: Use npm or yarn to install React Router in your project.
// ```bash
// npm install react-router-dom
// ```
// 2. **Import React Router Components**: Import the necessary components from `react-router-dom`.
// ```javascript
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// ```
// 3. **Wrap Your Application with Router**: Wrap your main application component with the `Router` component.
// ```javascript
 function App() {
    return (
     <Router>
       <div>
         {/* Your application components go here */}
       </div>
     </Router>
   );
 }
// ```
// 4. **Define Routes**: Use the `Route` component to define your routes. Each route should specify a `path` and a corresponding component.
// ```javascript
<Route path="/" exact component={Home} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
// ```
// 5. **Use Switch for Exclusive Routing**: Wrap your routes in a `Switch` component to ensure that only one route is rendered at a time.
// ```javascript
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route component={NotFound} /> {/* Fallback route */}
</Switch>
// ```
// ```
// 6. **Create Navigation Links**: Use the `Link` component to create navigation links between different routes.
// ```javascript
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
// ```
// 7. **Run Your Application**: Start your React application and navigate to different routes using the links you created.
// ```bash
npm start
// ```
// ```
// 8. **Handle Route Parameters**: If you need to handle dynamic route parameters, you can define them in the route path using a colon.
// ```javascript
<Route path="/user/:id" component={UserProfile} />
// ```
// 9. **Access Route Parameters**: In the component rendered by the route, you can access the route parameters using the `useParams` hook.
// ```javascript
import { useParams } from 'react-router-dom';
function UserProfile() {
  const { id } = useParams();
  return <div>User Profile ID: {id}</div>;
}
// ```
// 10. **Nested Routes**: You can create nested routes by defining routes inside other components.
// ```javascript
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Switch>
        <Route path="/dashboard/overview" component={Overview} />
        <Route path="/dashboard/settings" component={Settings} />
      </Switch>
    </div>
  );
}
// ```
// 11. **Redirects**: You can use the `Redirect` component to redirect users from one route to another.
// ```javascript
import { Redirect } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/old-route">
          <Redirect to="/new-route" />
        </Route>
        <Route path="/new-route" component={NewRoute} />
      </Switch>
    </Router>
  );
}
// ```
// 12. **404 Not Found Page**: You can create a fallback route to display a 404 Not Found page for unmatched routes.



Steps 
npm install react-router-dom

In index.js wrap the App component with BrowserRouter
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';  
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { useState } from 'react';
