# Mike's Nava Frontend Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The readme is mostly standard CRA readme with the project specific answers at the bottom.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Mike's Process

- I decided to use Create React App for quick project bootstrapping as suggested and because you guys probably aren't testing me on how well I scaffold a webpack project
- I decided to use React-Strap for the design library to make MVP level styling easy and not have to do any custom styles. I made sure to import only the components used with default imports to reduce the bundle size.
- I chose to use Typescript because I think it multiples the quality of the code by many magnitudes.
- I used React Context to store global state to reduce prop drilling. This was especially useful given the level of abstraction of my components.
- I chose not to make the app pixel perfect to the mockup, but it does follow the general structure presented in the mockup. The only real deviation is the padding around the sides of the grid. I chose to leave it as is provided by the React-Strap grid components, so I wouldn't have to write custom code to remove the side paddings.
- I added just a few unit tests just to show my approach. I chose RTL because I love the new paradigm of doing unit testing from the user perspective. It's much easier to be accurate in what you test than the previous approach with Enzyme.
- I didn't make small commits because I started with CRA and then realized it comes with its own repo, so I had coded everything and then initiated a new repo. At that point, I couldn't stage only specific lines and it was impossible to differentiate CRA default code and custom code I wrote.
- I don't really have any questions for the design team in the context of this coding exercise.

## Spec on future functionality

- Remove a household member: I would dispatch a new action that removes a member. I would add unique IDs to the schema of a member, so that they can be removed by ID, rather than fuzzy matching.
- Edit a household member: I would add an edit button on each member that opens up the same modal/form for adding a new member. I would pre-fill the input fields by pulling data from the global state. Then when you save the edited information it would dispatch an update action, similar to the delete action and look up the member in global state by ID.

## Appropriateness of Exercise
I think the exercise was appropriately time for someone of the level of a strong senior engineer. For mid-level or below, I don't think they would be able to make something with high quality in 2 hours. For me, the scope of the exercise was such that it gave me a chance to do some nice extra stuff such as use typescript, write unit tests, abstract components in a production-ready way.