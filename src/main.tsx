import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import StartPage from "./pages/StartPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Menu from "./pages/MenuPage.tsx";
import GlobalChangeRead from "./pages/GlobalChange/GlobalChangeRead.tsx";
import GlobalChangeEdit from "./pages/GlobalChange/GlobalChangeEdit.tsx";
import Quiz from "./pages/Quiz/Quiz.tsx";
import SeasonsRead from './pages/Seasons/SeasonsRead.tsx';
import SeasonsEdit from './pages/Seasons/SeasonsEdit.tsx';
import PlateTectonicsRead from './pages/PlateTectonics/PlateTectonicsRead.tsx';
import PlateTectonicsEdit from './pages/PlateTectonics/PlateTectonicsEdit.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<StartPage/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/global">
                <Route index element={<GlobalChangeRead/>}/>
                <Route path="edit" element={<GlobalChangeEdit/>}/>
            </Route>
            <Route path="/season">
                <Route index element={<SeasonsRead/>}/>
                <Route path="edit" element={<SeasonsEdit/>}/>
            </Route>
            <Route path="/tectonics">
                <Route index element={<PlateTectonicsRead/>}/>
                <Route path="edit" element={<PlateTectonicsEdit/>}/>
            </Route>
            <Route path="quiz" element={<Quiz/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
