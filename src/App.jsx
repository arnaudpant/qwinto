import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectPlayers from "./pages/SelectPlayers";
import Game from "./pages/Game";
import "./style/style.scss";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectPlayers />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
