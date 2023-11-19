import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";

function App() {
    return (
        <div className="font-poppins">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add' element={<AddPage />} />
            </Routes>
        </div>
    );
}

export default App;