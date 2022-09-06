import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import './App.css';
import Menu from "./components/menu";
import Home from "./screens/home/index";
import About from "./screens/about/index";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="App">
            <Menu />
            <Home />
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit} />
            <About />
        </div>
    );
}

export default App;
