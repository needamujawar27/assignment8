import React, { Component } from "react";
import { CompA } from "./components/CompA";
import { CompB } from "./components/CompB";
import "./components/common.css"

function App({}) {
  return (
    <div className="sub">
    <table>
      <tr>
        <td><CompA/></td>
        <td><CompB/></td>
        <td><CompA/></td>
        <td><CompB/></td>
        <td><CompA/></td>
      </tr>
      <tr>
        <td><CompB/></td>
        <td><CompA/></td>
        <td><CompB/></td>
        <td><CompA/></td>
        <td><CompB/></td>
      </tr>
    </table>
    
    </div>
  );
}

export default App;
