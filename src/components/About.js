import React, { useState } from 'react'

export default function About() {
    const [colorStyle, setColorStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    // const toggleStyle = ()=>{
    //     if(colorStyle.color === 'black'){
    //         setColorStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //     }
    //     else{
    //         setColorStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }
    // }

    return (
        <>
            <div className="container" style={colorStyle}>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={colorStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Founder
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" style={colorStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                My name is <b>Muhammad Subhan Khan</b>, and I am currently pursuing my bachelor's degree in
                                Computer Science with a specialization in <b>Artificial Intelligence</b> from <b>NED University of Engineering & Technology</b>.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={colorStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Purpose
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={colorStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Our goal is to help you save your precious time by enabling you to manipulate your text with a variety of options, all in just one click.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={colorStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Others
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={colorStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This is my first-ever React-based application, which I built while learning from <b>Code With Harry</b>. It incorporates fundamental React concepts such as <b>routing</b>, <b>useState</b>, and <b>Bootstrap</b> to enhance both functionality and design.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">Toggle Theme</button>
                </div> */}
            </div>
        </>
    )
}
