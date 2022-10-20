import { useEffect } from "react";
import HeaderModal from "../../../components/headerModal";
import "./style.css"

function About() {

    return (
        <>
            <div className="about">
                    <div className="about-box">
                        <div className="about-box-header">
                            <div className="about-line"></div>
                            <h2 className="about-tittle">About</h2>
                            <div className="about-line"></div>
                        </div>
                        <p className="about-text">Me chamo João Vitor, tenho 23 anos e estou estudando atualmente o último semestre de Análise e Desenvolvimento de Sistemas pela Universidade Norte do Paraná (Unopar). <br />
                            <br />Comecei minha carreira atuando na área da usinagem como operador CNC, encerrei esse ciclo para me envolver com atividades onde utiliza-se minha criatividade como Designer Gráfico, onde conheci de perto o setor tech e me encantei pela área pela flexibilidade de trabalho. Sigo agora me aprofundando ainda mais neste vasto mundo aprendendo diversas tecnologias e almejando um cargo <strong>Junior</strong> como Full Stack Developer. </p>
                    </div>
                    <div className="about-image">
                    </div>
            </div>
        </>
    )
}

export default About;