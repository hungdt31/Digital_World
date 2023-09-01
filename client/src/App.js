import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import path from "./ultils/path";
import Public from "./pages/public/Public";
import { Home, Login } from "./pages/public";
import ErrorPage from "./pages/public/ErrorPage";
const App = () => {
    return (
        <div className="font-main min-h-screen">
            <Routes>
            <Route path={path.PUBLIC} element={<Public />}>
                <Route path={path.HOME} element={<Home />}></Route>
                <Route path={path.LOGIN} element={<Login />}></Route>
            </Route>
            <Route path={path.ERROR} element={<ErrorPage />}></Route>
        </Routes>
        </div>
    );
};
export default App;