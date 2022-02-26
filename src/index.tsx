import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model, Server } from "miragejs";
import { type } from "os";

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance",
          type: "deposit",
          amount: 6000,
          category: "Dev",
          createdAt: new Date("2022-01-03 09:08:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Home",
          amount: 1000,
          createdAt: new Date("2022-01-04 09:08:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transactions");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transactions", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
