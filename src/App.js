import React from "react";
import "./App.css";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import CreateNewProductComponent from "./Product Components/CreateNewProductComponent";
import EditProductComponent from "./Product Components/EditProductComponent";
import PreviewProductComponent from "./Product Components/PreviewProductComponent";
import ProductsListComponent from "./Product Components/ProductsListComponent";
import Header from "./Additional Components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid mx-auto">
        <Switch>
          <Route exact path="/products/create" component={CreateNewProductComponent} />
          <Route exact path="/products/:id/edit" component={EditProductComponent} />
          <Route exact path="/products/:id" component={PreviewProductComponent} />
          <Route exact path="/products" component={ProductsListComponent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
