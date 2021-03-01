import React from 'react';

const Footer = ({ data }) => {
  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target='_blank' rel='noreferrer'>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className='row'>
        <div className='twelve columns'>
          <ul className='social-links'>{networks}</ul>

          <ul className='copyright'>
            <li>
              Made with ❤ by{' '}
              <a title='PAPA' target='_blank' rel='noreferrer' href='http://github.com/aayushjain7/'>
                AAYUSH
              </a>
            </li>
          </ul>
        </div>
        <div id='go-top'>
          <a className='smoothscroll' title='Back to Top' href='#home'>
            <i className='icon-up-open'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
