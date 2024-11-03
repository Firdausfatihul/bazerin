import React from "react";
import { useRouter } from "next/router";
import AchievementsCard from "~/component/AchievementsCard/AchievementsCard";
import ButtonBasic from "~/component/Button/ButtonBasic";

const TestimonyCard: React.FC = () => {
    const router = useRouter();
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

            <ButtonBasic
              onClick={() => router.push('/learn-more')}
              variant="gradient"
              className="scale-100 
              hover:scale-105 
              hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
              hover:rotate-1"
              rounded="lg"
              ariaLabel="Yes, Let's Go!"
            >
              <span>👎</span>
              <span>Yes, Let's Go!</span>
            </ButtonBasic>
            <ButtonBasic
              onClick={() => router.push('/learn-more')}
              variant="slate"
              className="scale-100 
              hover:scale-105 
              hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
              hover:rotate-1"
              rounded="lg"
              ariaLabel="Yes, Let's Go!"
            >
              <span className="transition-transform duration-500 group-hover:scale-110">👎</span>
              <span>Not Now</span>
            </ButtonBasic>
          </div>
        </div>
    );
};

export default TestimonyCard;