import React from 'react'
import Link from 'gatsby-link'
import Sidebar from '../components/Sidebar/Sidebar'
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Arial', 'serif'],
})

const IndexPage = () => (
  <div>
    <h1> Hi people </h1> <p> Welcome to your new Gatsby site. </p>{' '}
    <p> Now go build something great. </p>{' '}
    <Link to="/page-2/"> Go to page 2 </Link>{' '}
    <div style={{ margin: '3rem auto', maxWidth: 600 }}>
      <h1>Richard Hamming on Luck</h1>
      <div>
        <p>
          From Richard Hamming’s classic and must-read talk, “
          <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            You and Your Research
          </a>
          ”.
        </p>
        <blockquote>
          <p>
            There is indeed an element of luck, and no, there isn’t. The
            prepared mind sooner or later finds something important and does it.
            So yes, it is luck.{' '}
            <em>
              The particular thing you do is luck, but that you do something is
              not.
            </em>
          </p>
        </blockquote>
      </div>
      <p>Posted April 09, 2011</p>
    </div>
  </div>
)

export default IndexPage
