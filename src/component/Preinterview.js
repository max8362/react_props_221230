import interviewDBlink from '../json/preinterview.json';
const Preinterview = (props) => {
    
    const interviewjson = interviewDBlink[props.objnm];   
   
    return(
      
      <section className="section py-5 text-center" id={props.contentid}>
          <h3>{props.title}</h3>
          <div className="py-5 container-md text-start">
            <ul>
               {
                interviewjson.map(function(value, index){
                    //this조심할것
                    return(
                      <li  key={'interview'+index}>
                        <strong className='d-block border-bottom py-2 ' role="button" onClick={ e => { console.log( e.target.nextSibling.classList.toggle('d-none') ) }}>{value.subject}</strong>
                        <p className='py-5 d-none'>{value.content}</p>
                      </li>
                    )
                }
                )
               }
            </ul>
          </div>
      </section>
    )
  }

  export default Preinterview;