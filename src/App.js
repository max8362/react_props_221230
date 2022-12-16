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
      <Preinterview contentid="portfolio" title="포트폴리오" num='0'></Preinterview>      
      <Preinterview contentid="me"  title="공지사항" num='1'></Preinterview>
      <Preinterview contentid="preInterview" title="사전인터뷰" num='0'></Preinterview>
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
  const interviewjson = [ [
    {
    subject : '프로트앤드 6개월 훈련을 통해 가장 어려웠던 점은?',
    content : `여태까지 웹의 사용자 / 퍼소나로써의 삶으로 살아오면서 
               사용에 대해 개선점등을 생각해내는것에 대한 어려움이 없었는데 
               기술습득후에 사용성에 대한 기준이 제작난이도에 대한 기준으로 옮겨지면서
               사용이 편한 작업에서 제작이 편한 작업으로 사고 하게 되어 기획이 너무 어려워
               졌습니다.`,   
    },
    {
      subject : '기술개발자로서의 수명을 결정짓게 하는 요소는 뭐라 생각하나요?',
      content : `생각하기 싫어하는 것, 책임지기 싫어하는 것, 대화하기 싫어하는 것입니다.
      풀리지 않는 오류는 필연적으로 있습니다. 
      실력의 한계를 인정하면 더 이상의 기술개발자로서의 삶이 끝났다고 생각합니다.
      지금 해결하지 못한 오류 혹은 디버그가 지금의 실력의 한계라고 생각할뿐
      내일도 , 그 다음날에도 저는 꾸준히 개발과 습득을 통해 성장 할 것이기에 
      '영원히 해결 못할 오류는 없다'는 개발자로서 분에 맞는 신뢰감을 갖는 것이 중요하다 생각합니다. 

      `
    }    
  ],
  [
    {
    subject : '공지사항제목',
    content : '공지사항내용',   
    },
    {
      subject : '공지사항알림',
      content : `엔터치고 싶어서 그냥 빽틱으로 표현함`
    }    
  ]
]
  return(
    
    <section className="section py-5 text-center" id={props.contentid}>
        <h3>{props.title}</h3>
        <div className="py-5 container-md text-start">
          <ul>
             {
              interviewjson[props.num].map(function(value, index){
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
