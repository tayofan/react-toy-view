// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardListPage from "./containers/board/BoardListPage";
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";
import Main from './layout/Main';
import CreateBoard from "./components/board/CreateBoard";
import FileUpload from "./containers/common/FileUpload";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <SideBar />
                <div className="cell-content">
                    <Routes>
                        <Route path="/board/list" element={<BoardListPage />}></Route>
                        <Route path="/board/write" element={<CreateBoard />}></Route>
                        {/* <Route path="/board/detail/:code" element={<BoardDetail />}></Route> */}
                        {/* <Route path="/user" element={<UserApp />}></Route> */}
                        <Route path="/" element={<FileUpload />}></Route>
                        {/* <Route path="/dataTable" element={<DataTable />}></Route> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </div>

    );
}

export default App;
