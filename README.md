# Course Content

## React JS
- In this course, the frontend was built using React. React is a frontend framework used to build interactive web user interfaces by creating components that are rendered on a single page when needed.

- Components are written using JSX, a sort of combination of HTML and JavaScript. JavaScript code can be written inside this JSX.

- These components render data onto the user screen. Several components were created using React-Bootstrap. Some components were reusable, while others were essentially screens.

- React includes hooks such as:
  - `useState()`: Allows adding state to a component.
  - `useEffect()`: Executes certain actions as side effects of component rendering, e.g., asynchronous calls.

## Redux
- Alongside React, Redux was used in this project. Redux is a global state management system. It is used when states need to be accessed across multiple components.

- Redux utilizes reducers which take actions and state. The state variable represents the initial state on render, and actions modify the state. Redux generally doesn't alter the original state; it uses it as a reference point.

- Exceptions exist, such as when state changes are made during asynchronous calls. These calls are executed in the reducer's actions, resulting in data retrieved from an API, referred to as a payload.

- Multiple reducers can be created and placed in a store, providing global access to states and respective actions in the project.

- I learned that using redux toolkit, the process of creating reducers could be made much easier, and thus in the process of exploring that avenue.

## Django/Django Rest Framework
- For the backend, Django was used. The Django Rest Framework created an API, allowing frontend access to data through asynchronous calls.

- Data moves between backend and frontend as JSON. Serializers were created in the backend using the Rest Framework to package data as JSON.

## Authentication and Authorization
- JSON Web Tokens (JWT) were used for authentication and authorization. When a request is sent to a protected route, the token is included to determine user access rights.

- Configurations in Django's settings were necessary to override its default authorization system for this to work.

## What I Learned
- Prior to this project, I had familiarity with Django, HTML, CSS, vanilla JavaScript, and Ajax.

- I learned about the Django Rest Framework and building serializers for various models.

- I learned how to modify views to work with serialized data and send data to the frontend.

- Postman was used to test sending different requests (POST, GET, DELETE, PUT).

- With limited React experience, I learned:
  - Building components
  - Passing data between components
  - Setting routes
  - Using hooks (`useState()` and `useEffect()`)
  - Using components within components
  - Using JavaScript in components

- I took time to learn about Redux, including creating reducers, actions, and a Redux store.

- Accessing global states from different components and dispatching actions were learned using `useEffect()` and `useDispatch()`.

- I learned how to combine Django backend and React frontend after building both projects separately.
  
- Research, research, research. The most important thing is learning how to research for solutions. Most issues you will have face
  have been faced by someone else. It's much more effecient to try to find this solution, undertand it, then apply it to your project
  than it is to start from scratch.

- Be a problem solver. Building web projects, like in most fields, is about being a problem solver. Solutions do not always have to be 
  'elegant'. They just need to work and be sustainable. You need to love solving problems in the chosen field.
