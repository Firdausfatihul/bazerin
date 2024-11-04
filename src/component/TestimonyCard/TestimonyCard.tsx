import React from "react";
import { useRouter } from "next/router";
import AchievementsCard from "~/component/AchievementsCard/AchievementsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const TestimonyCard: React.FC = () => {

  // sample data for testimony, temorrow pickup from api
  const data = [
    {
      color: "yellow",
      photoProfile: "https://via.placeholder.com/150",
      name: "John Doe",
      content: "aas",
      date: "2024-01-01"
    },
    {
      color: "green",
      photoProfile: "https://via.placeholder.com/150",
      name: "Jane Doe",
      content: "aa",
      date: "2024-01-01"
    },
    {
      color: "blue",
      photoProfile: "https://via.placeholder.com/150",
      name: "Jim Doe",
      content: "aa",
      date: "2024-01-01"
    }
  ]
    return (
        <div className="mb-6
          mx-6
          rounded-[24px]
          bg-slate-50/90
          backdrop-blur-md
          shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)]
          transition-all
          duration-500
          ease-[cubic-bezier(0.34,1.56,0.64,1)]
          hover:bg-slate-50">
          <p className="text-center 
            text-slate-700
            font-medium
            pt-4"
          >
            Testimony
          </p>
          <div>
            <Swiper 
              modules={[Navigation, Pagination, A11y, Autoplay]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              direction="horizontal"
              slidesPerView={1.2}
              centeredSlides={true}
              spaceBetween={0}
              initialSlide={2}
            >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <AchievementsCard {...item} />
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div>
    );
};

export default TestimonyCard;