import React from "react";
import Table from "./components/table";
import Header from "./components/header";
import ToolBar from "./components/toolbar";
import Footer from "./components/footer";
// import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <br />
      <ToolBar />
      <br />
      <Table />
      <br />
      <Footer />
    </>
  );
}
