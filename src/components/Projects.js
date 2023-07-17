import { Container, Row, Col, Tab} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "./ProjectCard";
import CertificateCard from "./CertificateCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import toeic from "../assets/img/Toeic.png";
import javaSilver from "../assets/img/JS.png"
import bookKeep from "../assets/img/account.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        
      ];

      const certificates = [
        {
          title: "TOEIC SCORE 935",
          description: "Advanced proficiency of English",
          imgUrl: toeic,
        },
        {
          title: "Java Silver",
          description: "Oracle Certifiled Java SE 11 Programmer",
          imgUrl: javaSilver,
        },
        {
          title: "Bookkeeping 3rd grade",
          description: "The Official Business Skills Test in Bookkeeping",
          imgUrl: bookKeep,
        },
        
      ];


      return (
        <div className="project" id="projects">
    <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__slideIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificate</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Under Construction...</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          certificates.map((certificate, index) => {
                            return (
                              <CertificateCard
                                key={index}
                                {...certificate}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>準備中です
                      </p>
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
        </div>

      );
}

export default Projects;