import React,{useState} from "react";
import Table from "./components/table";
import Header from "./components/header";
import ToolBar from "./components/toolbar";
import Footer from "./components/footer";
import "./styles.css";


export default function App() {
  const [apiData, setApiData] = useState([])
  return (
    <>
      <Header />
      <br />
      <ToolBar setData={setApiData}/>
      <br />
      <Table tableContent={apiData}/>
      <br />
      <Footer />
    </>
  );
}
