import React from "react";
import { TodoProvider } from "../TodoContext";
import { App } from "./App";



function AppProvider() {

  

  return (

   <TodoProvider>
   <App/>
   </TodoProvider>
  );
}

export default AppProvider;
