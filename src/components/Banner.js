import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import icon_twitter from "../assets/img/icon-twitter-bird.svg"
import icon_cv from "../assets/img/icon-cv.svg"
import icon_email from "../assets/img/icon-email.svg"
import icon_google_scholar from "../assets/img/icon-google-scholar.svg"
import text_json from "../assets/texts/links/links.json"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState('');
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  // const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  // const period = 2000;
  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);
  //
  //   return () => { clearInterval(ticker) };
  // }, [text])
  //
  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  //
  //   setText(updatedText);
  //
  //   if (isDeleting) {
  //     setDelta(prevDelta => prevDelta / 2);
  //   }
  //
  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex(prevIndex => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === '') {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex(prevIndex => prevIndex + 1);
  //   }
  // }

  const [textContent, setTextContent] = useState({});
  useEffect(() => {
    // 假设 JSON 文件中有一个字段叫 "textContent"
    setTextContent(text_json);
  }, []);

  return (
    <section className="banner" id="home">
      <Container className="content_container">
        <Row className="aligh-items-center">
          <Col xs={8} md={8} xl={8}>
            <p>
              Hi, My name is Chang Liu 刘畅.
              <br></br>
              <br></br>
              I am currently working as research assistant in Pervasive human computer Interaction Lab in Tsinghua University. I have earned a M.Eng. degree in Computer Science from Tsinghua University in July 2024.
              <br></br>
              <br></br>
              My research interest is to build systems that unobtrusively learn from the natural behavior, and then provide necessary interface adaptation. Specifically, Specifically, user behavior in a given interaction context can implicitly reflect user’s intentions, strategies, preferences. Conversely, adjustments to the interaction context can potentially impact user behavior.
              <br></br>
              <br></br>
              I believe an ideal interaction system should learn from users' daily behaviors and dynamically update itself to enhance the interaction experience.
              {/*<br></br>*/}
              {/*<br></br>*/}
              {/*Specifically, I’m interested in pursuing research in the following areas:*/}
              {/*<br></br>*/}
              {/*1. Exploring the impact of AI as an interaction context. Investigating how AI feedback influences users' behavioral and cognitive patterns.*/}
              {/*<br></br>*/}
              {/*2. Developing sensing or interactive systems capable of sensing users' long-term physiological changes, such as myopia and muscle fatigue, or psychological changes, such as overstress or depression.*/}
              {/*<br></br>*/}
              {/*3. Developing efficient multimodal interaction Systems, particularly about eye tracking, human-AI collaboration, or embodied intelligence.*/}
            </p>
          </Col>
          <Col xs={4} md={4} xl={4}>
            <div className={"header-img-icon"}>
              <img src={headerImg} alt="Header Img" className="header-img"/>
              <div className="icon-div">
                <a href={textContent.cv} target="_blank" rel="noopener noreferrer" className="icon">
                  <img src={icon_cv} alt="Curriculum Vitae"/>
                </a>

                <a href={`mailto:${textContent.email}`} className="icon">
                  <img src={icon_email} alt="Email"/>
                </a>

                <a href={textContent.google_scholar} target="_blank" rel="noopener noreferrer" className="icon">
                  <img src={icon_google_scholar} alt="Google Scholar"/>
                </a>

                <a href={textContent.twitter} target="_blank" rel="noopener noreferrer" className="icon">
                  <img src={icon_twitter} alt="Twitter"/>
                </a>

              </div>
            </div>
          </Col>
        </Row>
        <hr className="split-line"/>
      </Container>
    </section>
  )
}
