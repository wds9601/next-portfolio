import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faReact
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const handleContact = e => {
    e.target.preventDefault();
    console.log('clicked submit email form');
  };

  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Front end developer" />
        <meta
          name="keywords"
          content="William Downey-Schell, front end developer, portfolio"
        />

        <title>WDS Portfolio</title>
      </Head>

      <body>
        <nav>
          <div>
            <p>WDS</p>
          </div>
          <ul>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </nav>

        <main>
          <section id="home">
            <h1>hi there, im Will</h1>
            <h3>a Front End developer</h3>
            <image className="bg-image" id="hello" src="#" />
          </section>

          <section id="about">
            <image className="bg-image" id="mountain" src="#" />
            <div className="">
              <p>
                I have experience using JavaScript and front-end frameworks to
                create responsive full-stack web apps and browser-based games. I
                am drawn to software development because I believe good
                development blends technical knowledge with playful creativity.
                While my work is focused on the listed technologies, I enjoy
                learning about the evolving front-end and web-dev environments.
              </p>
              <div id="skills-box">
                <FontAwesomeIcon icon={faJs} />
                <FontAwesomeIcon icon={faNodeJs} />
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss3} />
              </div>
              <div id="social-box"></div>
              <div id="interests-box"></div>
            </div>
          </section>

          <section id="work">
            <div className="project-box" id="proj-1">
              <image
                src="#"
                alt="project landing page"
                className="project-image"
              />
              <div className="desc-box"></div>
            </div>

            <div className="project-box" id="proj-2">
              <image
                src="#"
                alt="project landing page"
                className="project-image"
              />
            </div>

            <div className="project-box" id="proj-3">
              <image
                src="#"
                alt="project landing page"
                className="project-image"
              />
            </div>

            <div className="project-box" id="proj-4">
              <image
                src="#"
                alt="project landing page"
                className="project-image"
              />
            </div>
          </section>

          <section id="contact">
            <h2>drop me a line</h2>
            <h4>let's chat</h4>
            <form id="contact-form" action="" method="POST">
              <label for="name">Name</label>
              <input id="name" type="text" required />

              <label for="email">Email</label>
              <input id="email" type="text" required />

              <label for="mesage">Message</label>
              <input
                id="mesage"
                type="text"
                placeholder="What would you like to squack about?"
                required
              />

              <button type="submit" onClick={handleContact}>
                Submit
              </button>
            </form>
            <image
              className="bg-image"
              id="birds"
              src="#"
              alt="birds sitting on power line"
            />
          </section>
        </main>
        <footer></footer>
      </body>
    </div>
  );
}
