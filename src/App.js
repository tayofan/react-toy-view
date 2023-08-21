// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardCreatePage from "./containers/board/BoardCreatePage";
import BoardDetailPage from "./containers/board/BoardDetailPage";
import BoardListPage from "./containers/board/BoardListPage";
import BoardUpdatePage from "./containers/board/BoardUpdatePage";
import KafkaPage from "./containers/kafka/KafkaPage";
import Content from "./layout/Content";
import Main from "./layout/Main";
import Map from "./layout/map/Map";
import Test from "./layout/Test";
import LoginPage from "./pages/LoginPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/loginPage" element={<LoginPage />}></Route>
                <Route path="/loginout" element={<LoginPage />}></Route>
                <Route path="/map" element={<Map/>}></Route>
                <Route path="/main" element={<Test/>}></Route>
                
                <Route element={<Content/>}>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/kafka" element={<KafkaPage/>}/>
                    <Route path="/board/list" element={<BoardListPage />}></Route>
                    <Route path="/board/write" element={<BoardCreatePage />}></Route>
                    <Route path="/board/detail" element={<BoardDetailPage />}></Route>
                    <Route path="/board/update" element={<BoardUpdatePage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
