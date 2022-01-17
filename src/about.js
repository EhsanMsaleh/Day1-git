import React from 'react';
// import './about.css';
//class component  >>>>lifecycle hooks  , state

function About() {
    return (
      <>
      
      <div class="container m-5 ">
  <div class="row gy-5">
    <div class="col-3">
    <p className="display-6">About me</p>
    </div>
    <div class="col-9">
      <p>A paragraph is a group of related sentences that support one main idea. In general, paragraphs consist of three parts: the topic sentence, body sentences,
           and the concluding or the bridge sentence to the next paragraph or section.
           Paragraphs show where the subdivisions of a research paper begin and end and, thus, help the reader see the organization of the essay and grasp its main points.</p>
           <button type="button" class="btn btn-dark">Download Resume</button>
    </div>
    
  </div>
</div>
      
      
   
  
      </>
    );
  }


export default About;
