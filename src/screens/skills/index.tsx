import "./style.css"
import TypewriterComponent from "typewriter-effect";

function Skiils() {
    return (
        <>
            <div className="skills">
                <div className="skills-box">
                    <div className="skills-box-header">
                        <div className="skills-line"></div>
                        <h2 className="skills-tittle">Skills and Experience</h2>
                        <div className="skills-line"></div>
                    </div>
                    <p className="skills-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia vero quae itaque, et cumque sequi consequatur quam facilis dolorem sit, a sunt cum. Provident molestias blanditiis sit. Sunt, alias!</p>
                    <p className="skills-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia vero quae itaque, et cumque sequi consequatur quam facilis dolorem sit, a sunt cum. Provident molestias blanditiis sit. Sunt, alias!</p>
                    <p className="skills-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia vero quae itaque, et cumque sequi consequatur quam facilis dolorem sit, a sunt cum. Provident molestias blanditiis sit. Sunt, alias!</p>
                </div>

                <div className="skills-image">
                    <p>Javascript</p>
                    <p>React.js</p>
                    <p>Typescript</p>
                    <p>Mongo</p>
                    <p>AWS</p>
                    <p>Node.js</p>
                </div>
            </div>
        </>
    )
}

export default Skiils;