# **Episode 03:-**

so to start my project and to take a build i need to write npx parcel index.html & npx build parcel index.html, i need to do this each and evry time so i dont wanna do that what i ill do is ill write/create script inside our package.json file, like to start  my project ill write start script and to take the buld ill write build script, like below

**ex:-**

"scripts": {

    "start":"parcel index.html",

    "build":"parcel build index.html",

    "test": "jest"

  },

means now if i wanna run my project ill write **"npm run start"** so it will run my project, so we also have a short which is give by npm **"npm start"** which will work the same,

means to run our project we use have 3 commands

1. :- npx parcel index.html

2) :- npm run start
3) :- npm start

**similarly to take the production build but we do not have short cut for production build,**

1. :- npx build parcel index.html

2) :- npm run build

# **So about core React code and JS**

**Crating h1 elemnt using core React:-**

constheading =React.createElement("h1",{id:"h1"},"Namaste React 🚀🚀");

console.log(heading); **//==>> this will give us the h1 element which nothing but a object**

//to create an elemnt we use react but to display the created elemnt on browser we use react DOM,

//and this our created elemnt is nothing but an object and this object will replace what ever inside our root div with this our cretaed elemnt, which is done by render menthod.

constroot =ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

**Creating h1 elemnt using JSX:-**

//JSX:- JSX is not html inside Javascript, JSX is just a sentax, it look like html thats it.

//so how can we create a above 3 line of code i.e a h1 heading with Namaste React 🚀🚀 ??

**const jsxheading =<h1id="h1"> Namaste React using JSX🚀🚀 `</h1>`**

console.log(jsxheading);  //==>> this will give us the h1 element which nothing but a object

constroot1 =ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);

**Note:- we can use core react to create a elemnt but jsx will make our work simple and easy, at the end it will also give us the html element which is nothing but the object as we seen above by doing console.log**

# **JSX is valid javascript ??**

**No, JSX is not valid Javascript.,** howw do we come to this conclusion ?? ok go to console of u

r browser and paste this code ==>> constjsxheading =<h1id="h1"> Namaste React using JSX🚀🚀 `</h1>`

if this piece of code gives u out put called ==>> Namaste React using JSX🚀🚀 ==>> then its a perferct and if it give

u error then its not javascript.

**if JSX is not valid Javascript then how i am getting the output on display called ==>> Namaste React using JSX🚀🚀 ??**

becose our parcel is converting all our jsx to core javascript aka pure javascript which is understood by the browser,

**is parcel converting or someone is converting on behalf of parcel Yes u r right babel is doing all this Transpilation**

**babel is nothing but the javascript complier.**

# **Process or steps done behind sence ??**

**in core React/pure React:-**

React.createElemnt ==>> React.createElemnt-js Object ==>> HTML Elemnt(Render).

**in JSX:- id u**

JSX ==>> Transpilation by babel ==>> React.createElemnt ==>> React.createElemnt-js Object ==>> HTML Elemnt(Render).

means at end both are doing same things just in JSX ==>> Transpilation by babel happens.,

and becose of that as consoling i where getting same object of elemnt.

# **Note about Rounded Brackets ():-**

if u r writting the JSX we need to wrap up it under rounded brackets => ()

**ex:- const jsxheading = (`<h1 id="h1">` Namaste React using JSX🚀🚀 `</h1>`);**

so that our babel compiler will under stand ha baba this much peace of code i need to transpile.

# **Arrow Function:-**

ex:-

const **fn** = () => {

    return true;

}

**or**

const **fn1** = () => true;

**fn and fn1 both are same just my fn1 is shorter in code and sentax**

# **Functional Components:-**

**a function which return a jsx is nothing but the functional components.**

ex:-

const **headingComponent** = () => {

    return`<h1>` Namaste from headingComponent 🚀🚀`</h1>`

};

**or**

const **headingComponent1** = () => `<h1>` Namaste from headingComponent1 🚀🚀`</h1>`;

**so my headingComponent & headingComponent1 both are same.**

# **React Element:-**

constheading = (`<h1>` Hello form React Element 🚀🚀`</h1>`);

# **React Component**

constHeadingComponent= () => (

    `<h1>`Hello form React Component 🚀🚀 `</h1>`

);

constHeadingComponent1= () => (

    <divclassName="heading">

    `<h1>`Hello form React Component 🚀🚀 `</h1>`

    `</div>`

);

constroot =ReactDOM.createRoot(document.getElementById("root"));

**root.render(heading);   // this is how we render react element.**

**root.render(`<HeadingComponent1/>`);  // this is how we render react component.**



# **Component composition:-**

**a component inside another component**


constTitle= () => {

    return`<h1>` Title Components 🚀🚀`</h1>`

}

constHeadingComponent1= () => (

    <divclassName="heading">

    `<Title/>`       ==>> calling component

    `<h1>`Hello form React Component 🚀🚀 `</h1>`

    `</div>`

);

constroot =ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);   // this is how we render react element.

root.render(`<HeadingComponent1/>`);  // this is how we render react component.
