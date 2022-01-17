import React from 'react';
import './skill.css';
import Prog from './progress'
//class component  >>>>lifecycle hooks  , state

function Skill() {
    return (
      <>
      <div className="ski">
      <p className="display-6 ">Skilles</p>
      <p className=" para ">A paragraph is a group of related sentences that support one main idea. In general, paragraphs consist of three parts: the topic sentence, body sentences,
           and the concluding or the bridge sentence to the next paragraph or section.</p>
      



           <div class="container m-5 ">
  <div class="row gy-5">
    <div class="col-3">
    <p className="display-6">My Focus</p>
    <p>UI/UX design</p>
    <p>responsive design</p>
    <p>web design</p>
    <p>mobile app design</p>
    </div>
    <div class="col-9">
     <p><Prog size="0">html</Prog>html</p> 
     <p><Prog size="25">html</Prog>html</p> 
     <p><Prog size="50">html</Prog>html</p> 
     <p><Prog size="75">html</Prog>html</p> 
     <p><Prog size="100">html</Prog>html</p> 
     <p><Prog size="100">html</Prog>html</p> 
     <p><Prog size="75">html</Prog>html</p> 
     <p><Prog size="50">html</Prog>html</p> 
     <p><Prog size="25">html</Prog>html</p> 
     <p><Prog size="0">html</Prog>html</p> 

    </div>
    
  </div>
</div>
   
           </div>
      </>
    );
  }


export default Skill;
