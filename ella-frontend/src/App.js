
import { Route, Routes } from "react-router-dom";
import "./assets/style/style.css"
import CustomerRouter from "./customer/routes/CustomerRouter";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/*" element={<CustomerRouter/>}/>
     </Routes>
    </div>
  );
}

export default App;
