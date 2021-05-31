import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import Fade from 'react-reveal/Fade';

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school} className='resumeMargin'>
          <h3>{education.school}</h3>
          <p className='info'>
            {education.degree} <span>&bull;</span>
            <em className='date'>{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company} className='resumeMargin'>
          <h3>{work.company}</h3>
          <p className='info'>
            {work.title}
            <span>&bull;</span> <em className='date'>{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = 'bar-expand ' + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id='resume'>
      <div className='row education'>
        <Fade left>
          <div className='three columns header-col'>
            <h1>
              <span>
                <SchoolIcon style={{ fontSize: '3rem' }} /> Education
              </span>
            </h1>
          </div>
        </Fade>
        <div className='nine columns main-col'>
          <div className='row item'>
            <Fade right cascade>
              <div className='twelve columns'>{education}</div>
            </Fade>
          </div>
        </div>
      </div>

      <div className='row work'>
        <Fade left>
          <div className='three columns header-col'>
            <h1>
              <span>
                <WorkIcon style={{ fontSize: '3rem' }} /> Work
              </span>
            </h1>
          </div>
        </Fade>
        <Fade right cascade>
          <div className='nine columns main-col'>{work}</div>
        </Fade>
      </div>

      <div className='row skill'>
        <Fade left>
          <div className='three columns header-col'>
            <h1>
              <span>
                <BuildIcon style={{ fontSize: '3rem' }} /> Skills
              </span>
            </h1>
          </div>
        </Fade>
        <Fade right cascade>
          <div className='nine columns main-col'>
            <p>{skillmessage}</p>

            <div className='bars'>
              <Fade right cascade>
                <ul className='skills'>{skills}</ul>
              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Resume;
