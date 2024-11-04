import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

interface StatItem {
    icon: React.ReactNode;
    title: string;
    value: number;
}

const statistics: StatItem[] = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-emerald-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      //M17 9V7a5 5 0 00-10 0v2M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z
                      d="M17 9V7a5 5 0 00-10 0v2M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" 
                />
            </svg>,
      title: 'Komentar diorder',
      value: 1000
    },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-yellow-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
            </svg>,
      title: 'Konten viral',
      value: 1000
    },
    { icon: '⭐',
      title: 'Komentator aktif',
      value: 1000
    },
]

const AnimatedNumber: React.FC<{ number: number}> = ({number}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const props = useSpring({
        number: inView ? number : 0,
        from: { number: 0 },
        config: { duration: 3000 },
    });

    return (
        <animated.span ref={ref}>
            {props.number.to((n) => Math.floor(n))}
        </animated.span>
    )
}


const StatisticsCard: React.FC = () => {
    return (
        <div className="mx-6 
            my-6
            p-6 
            rounded-3xl 
            shadow-[0_4px_12px_rgba(0,0,0,0.1)] 
            "
        >
            <h2 className="text-center 
                text-2xl 
                font-semibold 
                mb-6"
            >Our Impact</h2>
            <div className="grid 
                grid-cols-1 
                gap-6"
            >
                {statistics.map((stat, index) => (
                    <div key={index} className="flex 
                        flex-col 
                        items-center 
                        p-4
                        rounded-lg 
                        bg-white 
                        shadow-md 
                        "
                    >
                        <div className="mb-4">
                            {stat.icon}
                        </div>
                        <div className="text-3xl 
                            font-bold 
                            text-emerald-600"
                        >
                            <AnimatedNumber number={stat.value} />
                        </div>
                        <p className="text-center 
                            text-slate-700 
                            mt-2"
                        >
                            {stat.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatisticsCard;