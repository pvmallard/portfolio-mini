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
        <h1>hi and welcome!</h1>
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

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Find me elsewhere!</h2>
          <p>I'm all over</p>
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
                <i class="fa fa-linkedin-square"></i>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://mallardamania.itch.io/" target="_blank">
                <i class="fa fa-gamepad"></i>
                itch.io
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@three_days_worth" target="_blank">
                <i class="fa fa-paint-brush"></i>
                TikTok
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
