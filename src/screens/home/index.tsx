import "./style.css"
import TypewriterComponent from "typewriter-effect";
import { cursorTo } from "readline";



function Home() {
    return (
        <>
            <div className="home">
                <div className="home-box">
                    <h1 className="tittle-animation-loop">
                        <TypewriterComponent
                            options={{
                                deleteSpeed: 30,
                                delay: 120,
                                autoStart: true,
                                cursor: ":)"
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hi There, <br /> I'm AndradeJaum")
                                    .start()
                            }}
                        />
                    </h1>
                    <h1 className="tittle-animation-loop">
                        <TypewriterComponent
                            options={{
                                deleteSpeed: 30,
                                delay: 120,
                                autoStart: true,
                                loop: true
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(3500)
                                    .typeString(" Full Stack Developer")
                                    .pauseFor(3500)
                                    .deleteChars(20)
                                    .pauseFor(1000)
                                    .typeString("WordPress Freelancer")
                                    .pauseFor(3500)
                                    .deleteChars(20)
                                    .pauseFor(1000)
                                    .typeString("Web Designer")
                                    .pauseFor(2000)
                                    .deleteChars(12)
                                    .start()
                            }}
                        />
                    </h1>
                </div>
                <button className="home-button">
                    Say Hello
                </button>
            </div>
        </>
    )
}

export default Home;