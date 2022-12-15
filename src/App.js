import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from './component/Hd';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Worksswiper></Worksswiper>
      <Preinterview></Preinterview>
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
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
       >
        {
          swiperinfo.map( ( item, index ) => {
                 return(
                  <SwiperSlide className={item.cls} >{item.worktitle}</SwiperSlide>
                 )
            }
          )
          
        }
           
      </Swiper>
    )
}

const Preinterview = () => {
  return(
    <section className="section py-5 text-center">
        <h3>규칙위에 틀을 깨는 개발자가 되겠습니다.</h3>
        <div className="py-5"></div>
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
