import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <header class="center">
        <img 
          className='header-img'
          src="\src\assets\compressed-images\tuxedosam.gif"

        ></img>
        <h1>hi and welcome!</h1>
        <h2>it's mallory prescott's mini portfolio</h2>
        <p>
          sorry for the mess!
        </p>
        <p>
          this is a temporary stopping point as i am redesigning my main portfolio. but feel free to explore!
        </p>
      </header>

      <section id="next-steps">

        {/* <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div> */}

        <div id="about">
          <i className="faicon fa fa-2x fa-user-circle" role="presentation" aria-hidden="true"></i>
          {/* <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg> */}
          <h2>About me</h2>
          <p>A full-stack developer, accessibility-focused tester, game designer, artist, engineer, and community member. I have over 5 years of collective experience in programming, graphic design, innovative design, and more from my academic, professional, and personal career.</p>
          <h3>Some past work</h3>
          <p>Take em with a grain of salt please, most of these were prototypes, tests, academic studies, or mini projects for experience rather than polish.</p>
          <ul>
            <li>
              <a href="https://pvmallard.github.io/universal-design-website/" target="_blank">
                <i class="fa fa-universal-access" role="presentation" aria-hidden="true"></i>
                Universal Design
              </a>
            </li>
            <li>
              <a href="https://wipblogmvp.wordpress.com/" target="_blank">
                <i class="fa fa-wordpress" role="presentation" aria-hidden="true"></i>
                Old WIP Blog
              </a>
            </li>
            <li>
              <a href="https://pvmallard.github.io/malloryPrescottPortfolio/index.html" target="_blank">
                <i class="fa fa-file-text" aria-hidden="true"></i>
                Old Project Site
              </a>
            </li>
            <li>
              <a href="https://pvmallard.github.io/index.html" target="_blank">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                Baby's First App
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <i className="faicon fa fa-2x fa-address-book" role="presentation" aria-hidden="true"></i>
          {/* <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg> */}
          <h2>Find me elsewhere!</h2>
          <p>I'm all over! And other socials should have more info on me.</p>
          <ul>
            <li>
              <a href="https://github.com/pvmallard" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mallory-prescott-45b4a41ba/" target="_blank">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://mallardamania.itch.io/" target="_blank">
                <i class="fa fa-gamepad" aria-hidden="true"></i>
                itch.io
              </a>
            </li>
            <li>
              <a href="https://www.tumblr.com/threedaysworth" target="_blank">
                <i class="fa fa-tumblr-square" aria-hidden="true"></i>
                tumblr
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="spacer"></section>
    </div>
  )
}

export default App
