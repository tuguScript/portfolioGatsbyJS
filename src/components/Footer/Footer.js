import React, { Component } from 'react'
import injectSheet from 'react-jss'
import colors from '../../utils/colors'
import {
  faFacebookMessenger,
  faLinkedin,
  faTwitter,
  faGithubAlt,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const styles = {
  footer: {
    position: `relative`,
    bottom: 0,
    height: 64,
    width: `100%`,
    backgroundColor: `${colors.SECONDARY}`,
  },
  icons: {
    width: 320,
    fontSize: 30,
    color: `#1E2B41`,
    margin: `0 auto`,
    display: `flex`,
    justifyContent: `space-evenly`,
    alignItems: `center`,
    height: 64,
  },
}

const Footer0 = ({ classes }) => (
  <div className={classes.footer}>
    <div className={classes.icons}>
      <FontAwesomeIcon
        style={{ cursor: `pointer` }}
        // style={{ fontSize: 14, marginRight: '20px', color: 'white' }}
        icon={faFacebookMessenger}
        onClick={() => window.open('https://' + 'twitter.com/tuguldur_01')}
      />
      <FontAwesomeIcon
        style={{ cursor: `pointer` }}
        // style={{ fontSize: 14, marginRight: '20px', color: 'white' }}
        icon={faTwitter}
        onClick={() => window.open('https://' + 'twitter.com/tuguldur_01')}
      />
      <FontAwesomeIcon
        style={{ cursor: `pointer` }}
        // style={{ fontSize: 14, marginRight: '20px', color: 'white' }}
        icon={faLinkedin}
        onClick={() => window.open('https://www.linkedin.com/in/tuguldurtech/')}
      />
      <FontAwesomeIcon
        style={{ cursor: `pointer` }}
        // style={{ fontSize: 14, marginRight: '20px', color: 'white' }}
        icon={faGithubAlt}
        onClick={() => window.open('https://github.com/tuguScript')}
      />
      <FontAwesomeIcon
        style={{ cursor: `pointer` }}
        // style={{ fontSize: 14, marginRight: '20px', color: 'white' }}
        icon={faEnvelope}
        onClick={() => window.open('mailto:tuguscript@gmail.com')}
      />
    </div>
  </div>
)

const Footer = injectSheet(styles)(Footer0)

export default Footer
