import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import Navi from './Navi';

// 리액트의 생명주기 
// React의 특성상 변화가 있을 때 DOM을 다시 탐색하고 변화가 있는 부분을 Render하여  
// 다시 그려주기(이 부분이 브라우저의 동작원리 중 리플로우, 리페인팅에 해당합니다.) 
// 때문인데 위와 같은 방식으로 구현을 하게 되면 성능에도 문제가 발생합니다. 

// 위와 같은 현상과 성능 개선을 위해 스크롤 이벤트에 Timer를 두어서 Timer안에서 
// 이벤트가 발생하고 이벤트가 발생된 후 
// 해당 타이머는 초기화를 시켜주어 이벤트의 중복을 통한 성능 지연을 방지합니다. 



function Header(props){
  
  const targetRef = useRef(null); 
  const [menuToggle, menuToggleSet ] = useState(true); 
  
  // - 성능개선 코드
  const handleScroll = () => {
    //console.log("scrolling");
    
    if (window.scrollY > 100) {
      targetRef.current.classList.add('scroll');
      //style 옵션의 포지션에 값넣기      
    }else{
      targetRef.current.classList.remove('scroll')
    }
  };
  useEffect(() => {    
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100); // 성능화개선
    return () => {
      clearInterval(timer); //setInterval 지우기
      window.removeEventListener("scroll", handleScroll); // scroll 이벤트 지우기
    };
  }, []); // 한번실행

    return(
        <header ref={targetRef} id="hd" 
        className="App-header d-flex justify-content-between 
                  align-items-center px-lg-5 py-2 border-bottom  
                  fixed-top ">
          <h1 className="mb-0">
            <a href="#top" className="d-block">
              <Logo></Logo>
              {/* <img src="./img/logo.svg" className="img-fluid w-100" alt="logo" /> */}
            </a>
          </h1>
          <button className='btn d-md-none' id="allMenu" onClick={ e => {               
            menuToggleSet(!menuToggle);
            const  gnbulclass =  menuToggle ?  'mobileGnb': 'pcGnb';   
            
          }} >햄버거</button>          
          
         <Navi   />
        </header>
    )
  }
export default Header;
  