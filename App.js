//   <!-- Now making the react element without using JSX -->

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world form React"
); //creating the element is the job of core react hence we use only React and not REactDOM

console.log(heading);  //? this is returning the object 
const root = ReactDOM.createRoot(document.getElementById("root")); //react needs to have root
//but here creating root is the job of ReactDOM library hence we used ReactDOm

root.render(heading); //? render method is responsible for converting the object into h1 tag and put it on DOM 
//to render the heading inside the root
