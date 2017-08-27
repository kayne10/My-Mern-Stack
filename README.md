# My-Mern-Stack
<ul>
  <li>M - Mongo DB -  persistent data storage</li>
  <li>E - Express - RESTful API configuration</li>
  <li>R - React - Front-end Viewing Platform</li>
  <li>N - Node - Server to Client Service</li>
</ul>
<h3>React</h3>
<p>
I find myself to fight with React because it there is not much MVC.
React is not MVC.
React DOM should interface with HTTP only one time, thats where the es6 or es5 compiling comes into play.
It’s an ecosystem of components that come together as snippets of html.
It is recursively grabbing sub components.
It displays the data by fetching it from the REST API.
Components render properties.
It is important to create props in parent component, and then define them in the child component.
In react, data can be stored through props and state.
State is an object that can be rendered by a component.
Props act as the params/schema of a component.
React is the way to go because it can interact with any back-end (Ruby, Python, PHP, Java, etc).
React never needs to refresh the page. It is reacting to the change of state within components.
The state is digitally being saved by reloading the component (much better than a DOM update).
</p>

<h3>Redux</h3>
Redux is a useful tool that will save the state
The goal is to set up a store that will re render specific compoonents so they can have peer 2 peer interactions
Sub component data is always saved with Redux
State values are constantly sent to reducers
Every time data is fetched from a component it is packaged into an action

<h3>More on MERN</h3>
<p>
  Mongoose is the Mongo library.
  It used for storing and querying data
</p>
<p>
  Webpack library for configuring static files.
  Redux library for saving states.
</p>
<p>
  Client-side and Server-side services are implemented in this stack.
</p>
<p>
  Server folder manages all back-end routing, requests, responses, and callbacks.
</p>
<p>
THIS SET UP HAS THE CRUD CODE IN THE PROPER FUNDAMENTAL FORMAT.

THE RENDERING IS NOTICEABLY FASTER
</p>



Useful shell commands<br>
<code>$ npm start // start the server</code><br>
<code>$ webpack -w // constantly re-compile any changes made. It’s a great debugging process</code><br>
<code>$ mongod // run mongodb</code>
