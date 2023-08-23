import "./App.css";
import "./Graphs/Pie";
import Piechart from "./Graphs/Pie";
import Barchart from "./Graphs/Bar";
import Table from "./Graphs/Table/Table";

function App() {
  return (
    <div className="box">
      <div className="Main">
        <h1>Projeto Dashboard</h1>
        <h1>Graphs</h1>
        <div className="App">
          <Piechart />
          <Barchart />
        </div>
        <div className="Table">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
