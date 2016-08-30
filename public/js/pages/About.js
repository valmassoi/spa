import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { irBlack } from 'react-syntax-highlighter/dist/styles'

const installString =
`$ git clone git@github.com:valmassoi/spa.git
$ npm install
$ npm run dev #hot reloading webpack dev server
$ npm run deploy #builds and minifiys
$ npm start #starts server on :8081
`
const gaString =
`// ./public/js/index.js
ReactGA.initialize('UA-XXXXXXXX-X')
`
const About = () =>
  <div className="kid-page">
    <h1>About</h1>
    <p>This is boilerplate to bootstrap a React Single Page App (SPA)</p>
    <h3>Features</h3>
    <ul>
      <li>Pricing tiers</li>
      <li>Signin page</li>
    </ul>
    <h3>Get started</h3>
    <SyntaxHighlighter language="bash">{installString}</SyntaxHighlighter>
    <SyntaxHighlighter language="javascript" style={irBlack}>{gaString}</SyntaxHighlighter>
  </div>

export default About
