import React from "react";
import { useRouter } from "next/router";
import ButtonBasic from "../Button/ButtonBasic";

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
          >Mau Upgrade Bisnismu?</h1>
          <p className="text-lg">
            Earn money by commenting on Instagram posts or purchase comments for your corporate accounts.
          </p>
          <div className="mt-4 
            flex 
            justify-center 
            space-x-4"
          >
            <ButtonBasic
              ariaLabel="Become a Worker"
              onClick={() => router.push('/become-worker')}
              variant="white"
              size="sm"
            >
              Become a Worker
            </ButtonBasic>
            <ButtonBasic
              ariaLabel="Purchase Comments"
              size="sm"
              onClick={() => router.push('/purchase-comments')}
              variant="teal"
            >
              Purchase Comments
            </ButtonBasic>
          </div>
        </div>
    );
};

export default WelcomeCard;