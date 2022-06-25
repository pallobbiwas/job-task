import { useEffect, useState } from "react";
import "./App.css";
import Images from "./components/Images";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  console.log(datas);
  return (
    <div className="App container mx-auto">
      <div className="px-20">
        <h1 className="text-6xl font-bold">
          IMAGE <span className="text-green-400">COLLECTION</span>
        </h1>
        <hr className="bg-blue-600 py-1 my-4 rounded-[500px]" />
      </div>
      <div>
        {
          datas.map(d=> <Images data={d}></Images>)
        }
      </div>
    </div>
  );
}

export default App;
