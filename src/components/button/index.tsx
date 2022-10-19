import "./style.css"

function ButtonContact() {

    return (
        <>
            <div className="box-button">
                <a type="submit" className="flat-button">
                    <div className="flat-button-div">
                        <span className="fill"></span>
                        <span className="base"></span>
                        <span className="text">Say Hello</span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default ButtonContact;