
import { Route, Routes } from "react-router-dom";
import "./assets/style/style.css"
import CustomerRouter from "./customer/routes/CustomerRouter";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { init } from "./state/user/userActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  })

  return (
    <div className="App">
     <Routes>
        <Route path="/*" element={<CustomerRouter/>}/>
     </Routes>
    </div>
  );
}

export default App;
