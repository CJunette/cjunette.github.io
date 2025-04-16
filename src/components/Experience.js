import { Container, Row, Col } from "react-bootstrap";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Experience = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="experience" id="experience">
      <Container className="content_container">
        <Row className="aligh-items-center">
          <h2>Education</h2>
          <h3>Zhejiang University | 09/2012 - 07/2016</h3>
          <h4>Bachalor student, Major in Tea Science, Minor in Economics.</h4>
          <br></br>
          <h3>Tsinghua University | 09/2021 - 07/2024</h3>
          <h4>Master student, Advisor: Prof. Chun Yu, Prof. Yuanchun Shi</h4>
          {/*<br></br>*/}
        </Row>
        <hr className="split-line"/>
        <Row className="aligh-items-center">
          <h2>Employment</h2>
          <h3>Zhuoshi Advertising Co., Ltd. | 08/2016 - 08/2021</h3>
          <h4>3D Modeling, Visual Effect Artist, Designer, Video Editor.</h4>
          <br></br>
          <h3>Pervasive Human Computer Interaction Laboratory, Tsinghua University | 08/2024 - now</h3>
          <h4>Research Assistant</h4>
          {/*<br></br>*/}
        </Row>
      <hr className="split-line"/>
      </Container>
    </section>
  )
}
