import logo from './logo.svg';
import { 
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import {BGE} from "./styles";
import React, { useRef, useState, useContext, useEffect } from "react";
import './App.css';
import plus from './images/plus.png';
import inboxi from './images/inboxi.png';
import sendi from './images/sendi.png';
import githubi from './images/githubi.png';
import linkedini from './images/linkedini.png';
import triangle from './images/triangle.png';
import folder from './images/folder.png';
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import portrait from './images/portrait.jpg';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


function App() {


  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(true);
  const [select, setSelect] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const ref = useRef(null);
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return(
    
    <>
      
    <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg"  />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress}}
        />
    </svg>
    <div className = "BG" ref={ref}>
      
    <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
    </svg>
      <motion.div     initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }} whileHover = {{scale: 1.2}} whileTap = {{scale: 0.97}} onClick = {() => setIsOpen(!isOpen)} className = "Button"> {/* Plus Button */}
        <motion.img  animate = {isOpen ? "open" : "closed"} variants = {{open: { rotate: 135}, closed: { rotate: 0 }}} src={plus} width = "80" height = "80"/>
      </motion.div>
      <motion.ul class = "Menu" style = {{
        listStyleType: "none", 
        position: "fixed", 
        right: "3.2vw", 
        top: "9vh", 
        display: "flex", 
        flexDirection: "column",
        gap:"1vh",
        fontSize: "2vh"
        }
      }

        animate = {
          isOpen ? "open" : "closed"
        } 
        
        variants={{
          open: {
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.2
              
            }
          }
        }}>
        <motion.li initial = {{opacity: 0}} class = "Parts" whileHover = {{scale: 1.05}} variants={itemVariants}>home</motion.li>
        <motion.li initial = {{opacity: 0}} class = "Parts" whileHover = {{scale: 1.05}} variants={itemVariants}>about</motion.li>
        <motion.li initial = {{opacity: 0}} class = "Parts" whileHover = {{scale: 1.05}} variants={itemVariants}>experience</motion.li>
        <motion.li initial = {{opacity: 0}} class = "Parts" whileHover = {{scale: 1.05}} variants={itemVariants}>project</motion.li>
      </motion.ul>
      

      <section className = "Home">
        <motion.div initial = {{ opacity: 0}} whileInView={{opacity: 1}} transition={{}}className = "Intro">
          <header className = "Name">
            Hi, I'm <span style = {{color: "#4200FF"}}>Juhwan.</span> <motion.div initial = {{y: 20, opacity: 0}} whileInView = {{opacity: 1}} animate = {{y: 0}}transition = {{ delay: 0.3, duration: 1.5}} className = "Desc">Sometimes I go by J.</motion.div>
            <motion.div initial = {{opacity: 0 }} whileInView = {{opacity: 1}} initial = {{ y: 20, opacity: 0}} animate = {{ y: 0}} transition = {{delay: 0.3, duration: 1}}className = "BigDesc">I’m a software engineer based in Pennsylvania. <motion.div>I have huge interests in the field of A.I. as well as web development.</motion.div></motion.div>
          </header>
        </motion.div>
        <motion.div className = "SBC" style = {{marginLeft: "5vw", marginTop: "18vh"}} >
          <a href = "mailto:jhj5347@gmail.com"><motion.img initial = {{opacity: 0, scale: 0.5, y: 300}} animate = {{y: 0,opacity: 1, scale: 1}} transition = {{duration: 1, scale: {type: "spring", damping: 10, stiffness: 200, restDelta: 0.001}}}  whileHover = {{scale: 1.2}} src={sendi} width = "50" height = "50"/></a>
          <a href = "https://www.linkedin.com/in/juhwan-jung"><motion.img initial = {{opacity: 0, scale: 0.5, y: 300 }} animate = {{ y: 0, opacity: 1, scale: 1}} transition = {{duration: 1.25, scale: {type: "spring", damping: 10, stiffness: 100, restDelta: 0.001}}}whileHover = {{scale: 1.2}} src={linkedini} width = "50" height = "50"/></a>
          <motion.img initial = {{opacity: 0, scale: 0.5, y: 300}} animate = {{opacity: 1, scale: 1, y: 0}} transition = {{duration: 1.5, scale: {type: "spring", damping: 10, stiffness: 100, restDelta: 0.001}}}whileHover = {{scale: 1.2}} src={inboxi} width = "50" height = "50"/>
          <a href = "https://www.github.com/juhwani"><motion.img initial = {{opacity: 0, scale: 0.5, y: 300}} animate = {{opacity: 1, scale: 1, y: 0}} transition = {{duration: 2, scale: {type: "spring", damping: 10, stiffness: 100, restDelta: 0.001}}}whileHover = {{scale: 1.2}} src={githubi} width = "50" height = "50"/></a>
        </motion.div>
      </section>

            {/* Start of About Page */}
      <section className = "About">
        <div className = "Sphere">
          <img style = {{marginTop: "-7vh", marginLeft: "-5vw", height: "90vh", aspectRatio: "0.763841"}} src={portrait}/>
        </div>
        <motion.header  className = "ZO">01</motion.header>
        <div className = "AboutD">
          <header style = {{ fontSize: 55, fontWeight: "bold"}}>ABOUT</header>
          <motion.div className = "AboutP">
            <motion.p whileInView = {{opacity: 1, y: 0}} initial = {{opacity: 0, y: -100}} animate = {{y: -100}} transition = {{duration: 0.5}}>Originated from South Korea, I am currently studying Bachelor’s of Computer Science at the Pennsylvania State University.</motion.p>
            <motion.p whileInView = {{opacity: 1, y: 0}} initial = {{opacity: 0, y: -100}} animate = {{y: -100}} transition = {{delay: 0.25, duration: 0.5}}>I have had experiences working at a non-profit medical organization as a front-end developer as well as online mobile game software development company</motion.p>
            <motion.p whileInView = {{opacity: 1, y: 0}} initial = {{opacity: 0, y: -100}} animate = {{y: -100}} transition = {{delay: 0.5, duration: 0.5}}>I am a developer that believe that A.I. will be the gateway to solutions of many of the problems we are experiencing at the global and local level.</motion.p>
          </motion.div>
          <div className="SkillsC">
            <div className="SkillsI">
              <motion.header initial = {{y: 100, opacity: 0}} whileInView = {{opacity: 1, y: 0}}  animate = {{opacity: 0, y: 100}} transition = {{delay: 0.5, duration: 0.5}}><img src={triangle} width = "15" height = "15" style = {{marginRight : 20}}/>Python</motion.header>
              <motion.header whileInView = {{opacity: 1, y: 0}} initial = {{y: 100,opacity: 0}} animate = {{opacity: 0, y: 100}} transition = {{delay: 0.6, duration: 0.5}}><img src={triangle} width = "15" height = "15" style = {{marginRight : 20}}/>Javascript</motion.header>
              <motion.header whileInView = {{opacity: 1, y: 0}} initial = {{y: 100, opacity: 0}} animate = {{opacity: 0, y: 100}} transition = {{delay: 0.7, duration: 0.5}}><img src={triangle} width = "15" height = "15" style = {{marginRight : 20}}/>HTML/CSS</motion.header>
            </div>
            <div className="SkillsI">
              <motion.header whileInView = {{opacity: 1, y: 0}} initial = {{y: 100, opacity: 0}}  animate = {{y: 100}} transition = {{delay: 0.8, duration: 0.5}}><img src={triangle} width = "15" height = "15" style = {{marginRight : 20}}/>React.js/ Node.js</motion.header>
              <motion.header whileInView = {{opacity: 1, y: 0}} initial = {{y: 100, opacity: 0}} animate = {{y: 100}} transition = {{delay: 0.9, duration: 0.5}}><img src={triangle} width = "15" height = "15" style = {{marginRight : 20}}/>C</motion.header>
              <motion.header whileInView = {{opacity: 1, y: 0}} initial = {{y: 100, opacity: 0}} animate = {{y: 100}} transition = {{delay: 1, duration: 0.5}}><img src={triangle} width = "15" height = "15" style = {{marginRight : 20}}/>Java</motion.header>
            </div>
          </div>
        </div>
      </section>

{/* Start of Experience */}
      <section className="Experience">
        <div className="ZT">02
          <div className="Exp">
            <header style = {{fontSize: "6vh", fontWeight: "bold", color: "black"}}>EXPERIENCE</header>
            <header style = {{fontSize: "3.5vh", fontWeight: 400, color: "black", marginTop: 60, marginBottom: "10vh"}}>Here are some of the places I have worked for in the past!</header>
          </div>
        </div>
        
        <div className="ExpDesc">
          {/* FOLDERS/PROJECTS */}
          <div className="ExpRow">
            <img src={folder} width = "50" height = "40"/>
            <header style = {{fontSize: 25, fontWeight: "bold", marginLeft: 40, marginTop: "0.3vh"}}>Telepossible
              <header style = {{fontSize: 15, fontWeight: 500,color: "#00000080", marginTop: 2.5}}>Front-end Developer</header>
              <ul style = {{fontSize: 15, fontWeight: 500, marginLeft: -35}}>
                <li>Created interactive dual landing page for patients and doctors utilizing React.js framework.</li>
                <li>Established profile pages for doctors using the Axios module to update data in real time upon edits</li>
              </ul>
            </header>
          </div>
          <div className="ExpRow">
            <img src={folder} width = "50" height = "40"/>
            <header style = {{fontSize: 25, fontWeight: "bold", marginLeft: 40,marginTop: "0.3vh"}}>MI Co.
              <header style = {{fontSize: 15, fontWeight: 500,color: "#00000080", marginTop: 2.5}}>Software Developer intern</header>
                <ul style = {{fontSize: 15, fontWeight: 500, marginLeft: -35}}>
                  <li>Ran numerous trials for games with other internees to experiment on user reported bugs.</li>
                  <li>Directly communicated with the head developer while analyzing base codes of games</li>
                </ul>
            </header>
          </div>
          <div className="ExpRow">
            <img src={folder} width = "50" height = "40"/>
            <header style = {{fontSize: 25, fontWeight: "bold", marginLeft: 40,marginTop: "0.3vh"}}>Republic of Korean Army
            <header style = {{fontSize: 15, fontWeight: 500,color: "#00000080", marginTop: 2.5}}>Squad Leader</header>
              <ul style = {{fontSize: 15, fontWeight: 500, marginLeft: -35}}>
                <li>Participated in KCTC, a seven-day war simulation training, leading a squad of ten soldiers.</li>
                <li>Devised numerous strategic maneuvers to ambush enemies and secure stretched out victories.</li>
              </ul>
            </header>
          </div>
        
        </div>
      </section>

{/* Start of Projects */}

      <section className="Projects">
        <div className="ZT" style = {{fontSize: 128, marginLeft: "10vw"}}>03</div>
        <header style = {{fontWeight: "bold",fontSize: 64, marginLeft: "16vw"}}>PROJECTS</header>
      </section>
      
      <section className="ProjectsD">
        {hover && <div onMouseLeave = {() => {handleMouseLeave();}} className="ProjectsI">
          <header style = {{fontSize : "64px",marginRight: "195px"}}>PROJECT 1</header>
          <p style = {{width: "500px", fontSize: "24px", marginTop: "50px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <header style = {{fontSize: "24px", marginRight: "380px", marginBottom: "150px"}}>view details</header>
        </div>}
        {hover && <div className="ProjectsI">
          <img onMouseEnter = {() => {handleMouseLeave();}} src={project1} style = {{width : "50vw", height : "100vh"}}/>
        </div>}
        {!hover && <div className = "ProjectsI"><img onMouseEnter = {() => {handleMouseEnter();}} src={project2} style = {{width : "50vw", height : "100vh"}}/></div>}
        {!hover && <div onMouseLeave = {() => {handleMouseEnter();}} className="ProjectsI">
          <header style = {{fontSize : "64px",marginRight: "195px"}}>PROJECT 2</header>
          <p style = {{width: "500px", fontSize: "24px", marginTop: "50px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <header style = {{fontSize: "24px", marginRight: "380px", marginBottom: "150px"}}>view details</header>
        </div>}
      </section>


      <section className="ProjectsN">
        <div className="Row">
          <div className = "ProjectsE">
            <img src={folder} width = "50" height = "40"/>
            <div style = {{fontWeight: "bold", fontSize: "24px", marginTop: "41vh", marginLeft: "2vw"}}>PROJECT 3
              <p style = {{fontWeight: "normal", width: "25vw"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p style = {{fontWeight: "bold", marginTop: 60}}>view details</p>
            </div>
          </div>
          <div className = "ProjectsE">
            <img src={folder} width = "50" height = "40"/>
            <div style = {{fontWeight: "bold", fontSize: "24px", marginTop: "41vh", marginLeft: "2vw"}}>PROJECT 4
              <p style = {{fontWeight: "normal", width: "25vw"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p style = {{fontWeight: "bold", marginTop: 60}}>view details</p>
            </div>
          </div>
        </div>

        <motion.div className = "SBC" style = {{marginTop: "8vh"}}>
          <a href = "mailto:jhj5347@gmail.com"><motion.img initial = {{opacity: 0, scale: 0.5}} animate = {{opacity: 1, scale: 1}} transition = {{duration: 1, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}}  whileHover = {{scale: 1.2}} src={sendi} width = "50" height = "50"/></a>
          <a href = "https://www.linkedin.com/in/juhwan-jung"><motion.img initial = {{opacity: 0, scale: 0.5}} animate = {{opacity: 1, scale: 1}} transition = {{duration: 1, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}}whileHover = {{scale: 1.2}} src={linkedini} width = "50" height = "50"/></a>
          <motion.img initial = {{opacity: 0, scale: 0.5}} animate = {{opacity: 1, scale: 1}} transition = {{duration: 1, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}}whileHover = {{scale: 1.2}} src={inboxi} width = "50" height = "50"/>
          <a href = "https://www.github.com/juhwani"><motion.img initial = {{opacity: 0, scale: 0.5}} animate = {{opacity: 1, scale: 1}} transition = {{duration: 1, ease: [0, 0.71, 0.2, 1.01], scale: {type: "spring", damping: 5, stiffness: 100, restDelta: 0.001}}}whileHover = {{scale: 1.2}} src={githubi} width = "50" height = "50"/></a>
        </motion.div>

        <div className="CopyRight">
          Built and designed by Juhwan Jung. <header>All rights reserved. ©</header>
        </div>  
      </section>

      
{/* testing */}
    </div>
    </>
  );
}

export default App;
