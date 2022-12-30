import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from './component/Hd';
import Worksswiper from './component/Swiper';
import Preinterview from './component/Preinterview'


function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Worksswiper contentid="promotion" sview="1" section="promotion" view={{
          768 : { slidesPerView: 1,
          spaceBetween: 20
          },
          1280: { slidesPerView: 1,
            spaceBetween: 20
            },

        }}></Worksswiper>  
        <div className="container">
          <div className="row">
            <div className="col-md-6">
               <Preinterview contentid="Information" objnm="information"   title=" 상품정보" ></Preinterview> 
            </div>
            <div className="col-md-6">
            
            <Worksswiper contentid="flavor" sview="1" section="flavor" title="판매상품" view={{
            768 : { slidesPerView: 1,
            spaceBetween: 20
            },
            1280: { slidesPerView: 1,
              spaceBetween: 20
              },

          }}></Worksswiper>
            </div>
         
          </div>
        </div>    
      
      <div className="container">
      <Preinterview contentid="notice" objnm="noticeObj"  title="공지사항" ></Preinterview>
      </div> 
           
      
      <Worksswiper contentid="event" sview="3" section="event" title="이벤트" view={{
          768 : { slidesPerView: 3,
          spaceBetween: 20
          },
          1280: { slidesPerView: 5,
            spaceBetween: 20
            },

        }}></Worksswiper>
      <Footer></Footer>
    </div>
  );
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
