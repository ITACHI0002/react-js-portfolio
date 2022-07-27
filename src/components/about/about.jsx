import './about.css'



const About = () => {
    return(
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src="https://images.pexels.com/photos/938975/pexels-photo-938975.jpeg?cs=srgb&dl=pexels-mardoc-938975.jpg&fm=jpg" alt="" className="about-image" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">I'am a 15 years old enthusiastic learner and programmer from Nepal.</p>
                <p className="about-desc"> I'm a highly ambitious and passionate person.I'm currently a junior at <br/>a high school. I've gained skills in python and javascript. My goal is to <br/>become a <b> Full Stack Developer </b> and a <b> Data Scientist </b> and land a job in <br/> 
                <p className="G"><b>G</b></p><p className="O"><b>O</b></p><p className="o"><b>O</b></p><p className="g"><b>G</b></p><p className="L"><b>L</b></p><p className="E"><b>E</b></p>.
                </p>
                <p className="about-hobby">My best hobby is to <b>'code'</b> obviously. But I've other hobbies too like <br/>playing guitar, doing art and singing.</p>
            </div>
        </div>
    )
} 

export default About;