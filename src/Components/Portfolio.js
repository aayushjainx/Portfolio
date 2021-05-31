import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = 'images/portfolio/' + projects.image;
      return (
        <div key={projects.title} className='columns portfolio-item'>
          <div className='item-wrap'>
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className='overlay'>
                <div className='portfolio-item-meta'>
                  <h5>
                    {projects.title}
                    <i className='fa fa-link'></i>
                  </h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className='link-icon'></div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id='portfolio'>
      <div className='row'>
        <Zoom top>
          <div className='twelve columns collapsed'>
            <h1>Check Out Some of My Works.</h1>
            <Zoom top>
              <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
                {projects}
              </div>
            </Zoom>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Portfolio;
