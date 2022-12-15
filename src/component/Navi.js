function Navi(){
    const naviDb = [{
                      naviText : "포트폴리오",
                      naviLink : "#portfolio"
                    },
                    {
                      naviText : "인물탐방",
                      naviLink : "#me"
                                    },
                    {
                      naviText : "사전인터뷰 및 제안",
                      naviLink : "#preInterview"
                                    }
                    ]
    return(
      <ul className="d-flex mb-0">
        {
          naviDb.map((item, index) =>{
            return(
              <li id={ 'naivID'+index }><a href={item.naviLink} className="text-decoration-none ps-md-3 pe-md-0 px-3">{item.naviText}</a></li>
            )
          }
          )
            
        }
      </ul>
    )
  }

  export default Navi;