const Prog=(props)=>{

   let pr = "progress-bar w-";
    
  return(
     
      <>
     <div class="progress">
  <div class={ pr + props.size} role="progressbar" aria-valuenow={props.size} aria-valuemin="0" aria-valuemax="100"></div>
</div>


     
      </>
  )


}

export default Prog;