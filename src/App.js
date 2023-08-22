import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home";
import {Route, Routes} from "react-router-dom";
import Master from "./components/layouts/Master";
import ProductDetail from "./pages/product-detail/ProductDetail";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Master/>}>
                    <Route path={"/home"} element={<Home/>}></Route>
                    <Route path={"/products/:id"} element={<ProductDetail/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
