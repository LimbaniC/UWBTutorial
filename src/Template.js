import './Template.css';

/* 
Note: This template is a component that can be imported into App.js

DO NOT DELETE OR MODIFY THIS FILE. Follow the instructions below to create your own component.

To import your component into App.js, follow these steps:

Step 1: Copy the "Template.js" file and "Template.css" file into the "src" folder
Step 2: Rename each occurence of the word "Template" in the files you just copied to the name of your component, including the file names. 
Step 3: Add your code to the .js file and your CSS to the .css file.
Step 4: Import your component into App.js (e.g. if your component is called "About", import it like this: import About from './About';)
Step 5: Add your component to the corresponding div in App.js. (e.g. if you want your component to be in the "about" section, add only <About></About> to the div with the id "about")

*/
export default function Template() {
  return (
        <>
            <div className="about"> Hey! I'm a template! </div>
        </>
    );
}