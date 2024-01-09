import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => {
          return (
            <li key={user.id}>
              <Card user={user}></Card>
            </li>
          );
        })}
      </div>
    </main>
  );
}
