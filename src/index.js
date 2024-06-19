import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
console.log(pizzaData[2].name);
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <h1>The Pizza Company</h1>;
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((p) => (
          <Pizza pizzaObj={p} key={p.name} />
        ))}
      </ul>

      {/* <Pizza
        name={pizzaData[2].name}
        ingredients={pizzaData[2].ingredients}
        photoName={pizzaData[2].photoName}
      />
      <Pizza
        name={pizzaData[0].name}
        ingredients={pizzaData[0].ingredients}
        photoName={pizzaData[0].photoName}
      /> */}
    </div>
  );
};
const Pizza = (props) => {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt="pizza"></img>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
    </li>
  );
};

const Footer = () => {
  const hr = new Date().getHours();
  console.log(hr);
  const isOpen = hr >= 10 && hr <= 21;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We are open till 9pm.Order online</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
