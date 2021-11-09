import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// stateless functional component
// always return JSX

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// Nested Components, React Tools

// CSS

// setup vars

import { books } from "./books";
import Book from "./Book";
import { greeting } from "./testing/testing";

// {} means you are looking for a specific name while without curly braces {} means that you are export default component so you can change the name of the component without affecting the application.

function Booklist() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDom.render(<Booklist />, document.getElementById("root"));

// In order for you to deploy the website use npm run build and it will automatically create a build folder where in you can drag and drop to any hosting provider in the internet to host your project/website.
