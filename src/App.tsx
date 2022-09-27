import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import './App.css';
import Home from "./pages/home";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
            <div className="App">
                <Home />
                <Particles options={particlesOptions as ISourceOptions} init={particlesInit} />
            </div>
        </>
    );
}

export default App;
