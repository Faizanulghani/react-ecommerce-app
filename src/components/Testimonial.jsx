import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <div className="testimonial-content">
              <h2>Customer Testimonial</h2>
              <p>
                Everybody is different, which is why we offer styles for every
                body. Laborum fuga incidunt laboriosam voluptas iure, delectus
                dignissimos facilis neque nulla earum.
              </p>
              <div className="testimonial-info">
                <img src="founder-img.png" alt="" />
                <div className="testimonial-id">
                  <span>Petey Cruiser</span>
                  <p>Designer at Colorlib</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-content">
              <h2>Customer Testimonial</h2>
              <p>
                Everybody is different, which is why we offer styles for every
                body. Laborum fuga incidunt laboriosam voluptas iure, delectus
                dignissimos facilis neque nulla earum.
              </p>
              <div className="testimonial-info">
                <img src="founder-img.png" alt="" />
                <div className="testimonial-id">
                  <span>Petey Cruiser</span>
                  <p>Designer at Colorlib</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-content">
              <h2>Customer Testimonial</h2>
              <p>
                Everybody is different, which is why we offer styles for every
                body. Laborum fuga incidunt laboriosam voluptas iure, delectus
                dignissimos facilis neque nulla earum.
              </p>
              <div className="testimonial-info">
                <img src="founder-img.png" alt="" />
                <div className="testimonial-id">
                  <span>Petey Cruiser</span>
                  <p>Designer at Colorlib</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-content">
              <h2>Customer Testimonial</h2>
              <p>
                Everybody is different, which is why we offer styles for every
                body. Laborum fuga incidunt laboriosam voluptas iure, delectus
                dignissimos facilis neque nulla earum.
              </p>
              <div className="testimonial-info">
                <img src="founder-img.png" alt="" />
                <div className="testimonial-id">
                  <span>Petey Cruiser</span>
                  <p>Designer at Colorlib</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
