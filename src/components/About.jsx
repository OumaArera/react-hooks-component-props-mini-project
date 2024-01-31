import React from "react";

const About = ({image, about}) =>{
    const logoImg = image || "https://via.placeholder.com/215"
    return (
        <aside>
            <img src={logoImg} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}
export default About;