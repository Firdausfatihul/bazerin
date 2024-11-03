import React from "react";
import { useRouter } from "next/router";

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
          hover:bg-slate-50">
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
            <button 
              onClick={() => router.push('/start-earning')}
              className="flex 
                items-center 
                gap-2
                rounded-2xl
                bg-gradient-to-r from-emerald-500 to-teal-500
                px-6
                py-3
                text-white
                font-medium
                transition-all
                duration-500
                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:from-emerald-600
                hover:to-teal-600
                hover:scale-105
                hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                hover:rotate-1
                group"
            >
              <span className="transition-transform duration-500 group-hover:scale-110">👍</span>
              <span>Yes, Let's Go!</span>
            </button>
            <button 
              onClick={() => router.push('/learn-more')}
              className="flex 
                items-center 
                gap-2
                rounded-2xl
                bg-slate-200/90
                backdrop-blur-md
                px-6
                py-3
                text-slate-700
                font-medium
                transition-all
                duration-500
                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:bg-slate-300
                hover:scale-105
                hover:rotate-1
                group"
            >
              <span className="transition-transform duration-500 group-hover:scale-110">👎</span>
              <span>Not Now</span>
            </button>
          </div>
        </div>
    );
};

export default TestimonyCard;