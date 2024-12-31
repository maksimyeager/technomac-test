import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";

import ScrollToTop from "./utils/scrollToTop";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Machines from "./pages/Machines";
import MachinePage from "./pages/MachinePage";
import Projects from "./pages/Projects";
import Activities from "./pages/Activities";
import ContactUs from "./pages/ContactUs";

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about-us"} element={<AboutUs />} />
                    <Route path={"/activities"} element={<Activities />} />
                    <Route path={"/machines"} element={<Machines />} />
                    <Route path={"/machine/:machineName"} element={<MachinePage />} />
                    <Route path={"/projects"} element={<Projects />} />
                    <Route path={"/contact-us"} element={<ContactUs />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
