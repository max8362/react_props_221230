import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {
  return (
    <div className="App">
      <header className="App-header d-flex justify-content-between align-items-center px-lg-5">
        <h1 className="mb-0">
          <a href="" className="d-block">
            <img src="./img/logo.svg" className="img-fluid w-100" alt="logo" />
          </a>
        </h1>
        <Navi></Navi>        
      </header>
      <Worksswiper></Worksswiper>
      <Preinterview></Preinterview>
      <Footer></Footer>
    </div>
  );
}

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
    <ul className="d-flex ">
      {
        naviDb.map((item, index) =>{
          return(
            <li id={ 'naivID'+index }><a href={item.naviLink} className="text-decoration-none">{item.naviText}</a></li>
          )
        }
        )
          
      }
    </ul>
  )
}

const Worksswiper = () => {
    return(
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
       >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>     
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
