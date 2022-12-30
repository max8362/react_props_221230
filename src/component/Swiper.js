import swiperDBlink from '../json/swiperinof.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

const Worksswiper = (props) => {
    const swiperinfo = swiperDBlink[props.section];

      return(
        <div>
        <h3>{props.title}</h3>
        <Swiper className='workSection' id={props.contentid}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={props.sview}
        centeredSlides={true}
        loop = {true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }} 
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}  
        
        
        breakpoints = {props.view}   

        >
        
          {
            swiperinfo.map( ( item, index ) => {
                  return(
                    <SwiperSlide  id="promotion" className={item.no} key={'sw'+index} style={{backgroundImage:item.bg}}></SwiperSlide>
                  )
              }
            )
            
          }
          </Swiper>
          </div>
      )
  }
  
  export default Worksswiper;