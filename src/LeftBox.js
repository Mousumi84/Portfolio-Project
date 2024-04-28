import './style/LeftBox.css';

function LeftBox() {

    const media=[
        {link: "https://www.google.co.in/", iconname: "github"},
        {link: "https://in.linkedin.com/", iconname: "linkedin"},
        {link: "https://codepen.io/", iconname: "codepen"},
        {link: "https://www.instagram.com/", iconname: "instagram"},
        {link: "https://twitter.com/?lang=en", iconname: "twitter"},
        {link: "https://google.com", iconname: "google"}
    ]

    return (
        <div className="Left">
            <div id="intro">
                <p id="name">Mousumi Das</p>
                <p id="role">Senior Frontend Engineer</p>
                <p id="position-description">I build pixel-perfect, engaging, 
                and accessible digital experiences.</p>
            </div>

            <div id="rightindex">
                <a id="abt" href="#about">ABOUT</a>
                <a id="exp" href="#experiance">EXPERIANCE</a>
                <a id="prj" href="#project">PROJECT</a>
            </div>

            <div id="socialmedia">
                {
                    media.map(index => {

                        return <div id={index.iconname}>
                            <a href={index.link}>{index.iconname[0]}</a>
                        </div>
                    })
                }
            </div>
        </div>
    )

}

export default LeftBox;