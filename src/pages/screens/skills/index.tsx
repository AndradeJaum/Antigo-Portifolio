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
                    <p className="skills-text">Finalizando os estudos na área de Análise e Desenvolvimento de Sistemas pela Universidade Norte do Paraná (Unopar).
                        Me encontro no momento estudando diversas tecnologias e criando meu portifólio com os projetos que desenvolvi.<br />
                        <br />
                        Meu projeto com maior notoriedade é o <strong><a href="http://statusgg.s3-website-us-east-1.amazonaws.com" target="_blank" className="skills-link">Status.gg</a></strong>, uma aplicação em react.js que utiliza a API do jogo League of Legends para buscar informações personalizadas dos jogadores e suas partidas. Este projeto conta com um <strong><a href="https://github.com/AndradeJaum/STATUSGG-Back-End" target="_blank" className="skills-link">BackEnd</a></strong> e um <strong><a href="https://github.com/AndradeJaum/STATUSGG-Front-End" target="_blank" className="skills-link">FrontEnd</a></strong> separados para maior segurança dos dados, instanciados na <strong>EC2 </strong>e <strong>S3</strong> pela <strong>AWS.</strong> Também possui um banco de dados do mongo DB Atals, para salvar os 5 jogadores com melhor winrate de cada fila ranqueada.
                    </p>
                    <p className="skills-text"></p>
                </div>

                <div className="skills-tech">
                    <div className="skills-tech-header">
                        <div className="skills-line"></div>
                        <h3 className="skills-subtittle">Technologies I study</h3>
                        <div className="skills-line"></div>
                    </div>
                    <div className="skills-list-box">
                        <ul className="skills-list">
                            <li className="skills-itens"><a className="techs">Javascript(ES6+)</a></li>
                            <li className="skills-itens"><a className="techs">React.js</a></li>
                            <li className="skills-itens"><a className="techs">Typescript</a></li>
                            <li className="skills-itens"><a className="techs">HTML5</a></li>
                            <li className="skills-itens"><a className="techs">CSS3</a></li>
                            <li className="skills-itens"><a className="techs">WordPress</a></li>
                        </ul>
                        <ul className="skills-list">
                            <li className="skills-itens"><a className="techs">Express.js</a></li>
                            <li className="skills-itens"><a className="techs">Material-UI</a></li>
                            <li className="skills-itens"><a className="techs">Mongo DB</a></li>
                            <li className="skills-itens"><a className="techs">AWS</a></li>
                            <li className="skills-itens"><a className="techs">Node.js</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skiils;
