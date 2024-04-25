import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import { routes } from "./constants";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import Layout from "./components/layout";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path={routes.INDEX} element={<Home />} />
                    <Route path={routes.ADMIN} element={<Admin />} />
                    <Route path="*" element={<Navigate to={routes.INDEX} replace />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
