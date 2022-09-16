import "./style.css"
// import img from "../../images/me.png"

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
                    <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia vero quae itaque, et cumque sequi consequatur quam facilis dolorem sit, a sunt cum. Provident molestias blanditiis sit. Sunt, alias!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia maiores, ratione eius ut optio sunt veritatis praesentium? Repellendus esse laborum quos! Sit omnis quam ipsum reprehenderit aperiam natus asperiores?
                    </p>
                    <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, animi corrupti! Excepturi dolore dolorem magnam quasi sequi ab veniam velit voluptate dolores exercitationem provident, odit temporibus odio aliquam pariatur ipsam.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit pariatur a nesciunt nam odit unde hic eos saepe quasi excepturi quidem porro iste, quis, odio fugiat magni laboriosam, autem voluptatibus.
                    </p>

                </div>
                <div className="about-image">
                    {/* <img src={img} className="image" ></img> */}
                </div>
            </div>
        </>
    )
}

export default About;