import React from 'react'
import './About.css';
import AboutMessage from './AboutMessage';

function About() {
  return (
    //Make an about page
    <div>
    <head>
        <title>About</title>
    </head>
    <body>
      <header>
        <div class="box-1">
        <h2 className='h2About'>Learn about us!</h2>
        </div>
      </header>  

      <section>
        <article>
        <div>
        <AboutMessage/>
        </div>
        </article>
      </section>
    </body>
    </div>
  )
}

export default About