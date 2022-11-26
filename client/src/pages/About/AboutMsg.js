import React from "react";
import Style from './about.module.css';

function Aboutmessage () {
    return (
      <div className={Style.aboutdiv}>
  
        {/*Message for About */}
        <p>
          Hello future CFO's and fellow users! Welcome to Bodega! 
          We wanted to create this site as a way for local businesses to
          get more exposure. We are group of 6 upcoming software engineers/developers,
          and are eager to get this site runninng. We want to compete with companies that do local food
          delivery that don't support CFO's. Local buisnesses have every right to be supported as much as the
          corporate side, this is our reason why. So with that said, enjoy Bodega!
        </p>
  
      </div>
    )
  }

  export default Aboutmessage;