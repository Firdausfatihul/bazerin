import React from "react";
import { useRouter } from "next/router";
import AchievementsCard from "~/component/AchievementsCard/AchievementsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

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
          p-6
          shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)]
          transition-all
          duration-500
          ease-[cubic-bezier(0.34,1.56,0.64,1)]
          hover:bg-slate-50
          overflow-hidden">
          <p className="text-center 
            text-slate-700
            font-medium"
          >
            Testimony
          </p>
          <div className="mt-4
            flex 
            justify-center 
            gap-4">
            <Swiper 
              loop={true}
              direction="horizontal"
              slidesPerView={1.2}
              centeredSlides={true}
              spaceBetween={0}
              navigation = {{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              scrollbar={{ draggable: true }}
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