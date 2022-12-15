import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from './component/Hd';


function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Worksswiper></Worksswiper>
      <Preinterview contentid="portfolio"></Preinterview>      
      <Preinterview contentid="me"></Preinterview>
      <Preinterview contentid="preInterview"></Preinterview>
      <Footer></Footer>
    </div>
  );
}


const Worksswiper = () => {
  const swiperinfo = [{
          worktitle : '리액트광고웹앱',
          worktime : '4주',
          co : '단독작업',
          app : ['illust','photoshop','v-code'],
          cls : 'react'
        },
        {
          worktitle : '부트스트랩 퍼블리싱',
          worktime : '1주',
          co : '단독작업',
          app : ['v-code'],
          cls : 'boot'
        },
        {
          worktitle : 'CMS 그누보드',
          worktime : '4주',
          co : '단독작업',
          app : ['illust','photoshop','v-code'],
          cls : 'sir'
        }];
    return(
      <Swiper className='workSection'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
 
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
       >
        {
          swiperinfo.map( ( item, index ) => {
                 return(
                  <SwiperSlide className={item.cls} key={'sw'+index}>{item.worktitle}</SwiperSlide>
                 )
            }
          )
          
        }
           
      </Swiper>
    )
}

const Preinterview = (props) => {
  const interviewjson = [{
    subject : '코딩보다 이게 더 어려워',
    content : '일단 만나봅시다! 사장'
  },
  {
    subject : '사진인터뷰의 용도를 잘 이해하고 기입하셔야합니다.',
    content : `그들이 나에게 요구하는것이 나한테 있는지 여부파악하고 잘 써야합니다.
    없는 거는 없다 있는거는 있다. 
    나만 나중에 피곤한 일이 없도록 써야합니다.`
  }]

  return(
    
    <section className="section py-5 text-center" id={props.contentid}>
        <h3>규칙위에 틀을 깨는 개발자가 되겠습니다.</h3>
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
const Footer = () =>{
  return(
    <footer className="py-5 border-top">
      <ul className="d-flex justify-content-center">
        <li><a href="">git</a></li>
        <li><a href="">instar</a></li>
        <li><a href="">notion</a></li>
      </ul>
    </footer>
  )
}

export default App;
