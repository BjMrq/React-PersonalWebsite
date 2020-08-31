import React, { Fragment } from 'react';

const headerCardContent = () => {
  return (
    <Fragment>
      <div className="headerCardText">
        <p className="card-header-welcome">Hi, I'm</p>
        <h1 className="headerCardTitle">Benjamin Marquis</h1>
      </div>
      <div className="headerCardText">
        <p className="cardListCompetenceTitle" style={{ marginBottom: "20px" }}>
          MILESTONES:
        </p>
        <p className="cardListCompetence" style={{ marginLeft: "15px" }}><strong className="darkblueTitle">‍<img style={{ marginLeft: "10px" }} className="svgDone" src="/static/images/donesvg.svg" alt="svg done" /> Lead Full Stack Developer</strong> | Tooly</p>
        <p className="cardListCompetence" style={{ marginLeft: "15px" }}><strong className="darkblueTitle"><img style={{ marginLeft: "10px" }} className="svgDone" src="/static/images/donesvg.svg" alt="svg done" /> Montreal cohort Tech Track</strong> | Next AI</p>
        <p className="cardListCompetence" style={{ marginLeft: "15px" }}><strong className="darkblueTitle"><img style={{ marginLeft: "10px" }} className="svgDone" src="/static/images/donesvg.svg" alt="svg done" /> CTO & Co-fonder</strong> | VizzMD</p>
        <p className="cardListCompetence" style={{ marginLeft: "15px" }}><strong className="darkblueTitle"><img style={{ marginLeft: "10px" }} className="svgDone" src="/static/images/donesvg.svg" alt="svg done" /> Entrepreneur in Acceleration</strong> | Centech</p>
        <p className="cardListCompetence" style={{ marginLeft: "15px" }}><strong className="darkblueTitle">‍<img style={{ marginLeft: "10px" }} className="svgDone" src="/static/images/donesvg.svg" alt="svg done" /> Full Stack Teacher</strong> | Le Wagon</p>
        <p className="cardListCompetence" style={{ marginLeft: "15px" }}><strong className="darkblueTitle"><img style={{ marginLeft: "10px" }} className="svgDone" src="/static/images/donesvg.svg" alt="svg done" />  Digital Marketing Specialist</strong> | LCI Education</p>
        <p className="cardListCompetence" style={{ marginLeft: "15px" }}><strong className="darkblueTitle"><img style={{ marginLeft: "10px" }} className="svgDone" src="/static/images/donesvg.svg" alt="svg done" /> Sociology Master degree</strong> | UQAM</p>
        <div className="grabEmailPart" />
      </div>
      <div className="headerCardText">
        <p className="cardListCompetenceTitle"style={{ marginBottom: "10px" }}>
          CONTACT ME:
        </p>
        <div className="social-icons-header">
          <a className="footerLink" href="mailto:bmarquiscom@gmail.com" target="_top"><img className="svgSocialHeader" src="/static/images/email.svg" alt="email icon" /></a>
          <a className="footerLink" href="https://www.linkedin.com/in/benjamin-marquis-6956b367/?locale=en_US" rel="noopener noreferrer" target="_blank"><img className="svgSocialHeader" src="/static/images/linkedinSvg.svg" alt="LinkedIn Icon" /></a>
          <a className="footerLink" href="https://github.com/BjMrq" target="_blank" rel="noopener noreferrer"><img className="svgSocialHeader" src="/static/images/github.svg" alt="GitHub Icon" /></a>
          <a className="footerLink" href="https://www.instagram.com/bjmrq/?hl=en" target="_blank" rel="noopener noreferrer"><img className="svgSocialHeader" src="/static/images/instagram.svg" alt="Instagram Icon" /></a>
        </div>
      </div>
    </Fragment>
  );
};

export default headerCardContent;
