import React from "react";
import { useRouter } from "next/router";

const WelcomeCard: React.FC = () => {
    const router = useRouter();
    return (
        <div className="mb-6 
          rounded-3xl 
          bg-gradient-to-br 
          from-emerald-500 
          to-teal-500
          p-6 
          text-white 
          shadow-md
          transition-all
          duration-300"
        >
          <h1 className="text-2xl 
            font-bold"
          >Welcome to Buzerin</h1>
          <p className="text-lg">
            Earn money by commenting on Instagram posts or purchase comments for your corporate accounts.
          </p>
          <div className="mt-4 
            flex 
            justify-center 
            space-x-4"
          >
            <button 
              onClick={() => router.push('/become-worker')}
              className="rounded-md 
                bg-white/90
                px-4 
                py-2 
                text-emerald-600
                transition-all
                duration-300
                hover:bg-white
                hover:scale-105
                hover:shadow-lg"
            >
              Become a Worker
            </button>
            <button 
              onClick={() => router.push('/purchase-comments')}
              className="rounded-md 
                bg-teal-600/80
                px-4 
                py-2 
                text-white
                transition-all
                duration-300 
                hover:bg-teal-700
                hover:scale-105
                hover:shadow-lg"
            >
              Purchase Comments
            </button>
          </div>
        </div>
    );
};

export default WelcomeCard;