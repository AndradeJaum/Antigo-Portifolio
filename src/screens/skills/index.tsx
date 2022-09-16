import "./style.css"

function Skiils() {
    return (
        <>
            <div className="skills">
                <div className="skills-box">
                    <div className="skills-box-header">
                        <div className="skills-line"></div>
                        <h2 className="skills-tittle">Skills and Experiences</h2>
                        <div className="skills-line"></div>
                    </div>
                    <p className="skills-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia vero quae itaque, et cumque sequi consequatur quam facilis dolorem sit, a sunt cum. Provident molestias blanditiis sit. Sunt, alias!</p>
                    <p className="skills-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia vero quae itaque, et cumque sequi consequatur quam facilis dolorem sit, a sunt cum. Provident molestias blanditiis sit. Sunt, alias!</p>
                    <p className="skills-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia vero quae itaque, et cumque sequi consequatur quam facilis dolorem sit, a sunt cum. Provident molestias blanditiis sit. Sunt, alias!</p>
                </div>

                <div className="skills-tech">
                    <div className="skills-tech-header">
                        <h3 className="skills-subtittle">Technologies I study</h3>
                    </div>
                    <ul className="skills-list">
                        <li className="skills-itens"><a className="techs">Javascript (ES6+)</a></li>
                        <li className="skills-itens"><a className="techs">React.js</a></li>
                        <li className="skills-itens"><a className="techs">Typescript</a></li>
                        <li className="skills-itens"><a className="techs">WordPress</a></li>
                        <li className="skills-itens"><a className="techs">Mongo</a></li>
                        <li className="skills-itens"><a className="techs">AWS</a></li>
                        <li className="skills-itens"><a className="techs">Node.js</a></li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Skiils;