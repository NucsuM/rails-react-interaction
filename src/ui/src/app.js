import React,{useState} from "react";
import Table from "./components/table";
import Header from "./components/header";
import ToolBar from "./components/toolbar";
import Footer from "./components/footer";
import "./styles.css";


export default function App() {
  // const sampleData = JSON.parse('[{"id":1,"albumId":1,"title":"accusamus beatae ad facilis cum similique qui sunt","url":"https://via.placeholder.com/600/92c952","thumbnailUrl":"https://via.placeholder.com/150/92c952","created_at":"2021-01-18T16:01:41.921Z","updated_at":"2021-01-18T16:01:41.921Z"},{"id":2,"albumId":1,"title":"reprehenderit est deserunt velit ipsam","url":"https://via.placeholder.com/600/771796","thumbnailUrl":"https://via.placeholder.com/150/771796","created_at":"2021-01-18T16:01:41.921Z","updated_at":"2021-01-18T16:01:41.921Z"}]')
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
