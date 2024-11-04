import React from "react";
import { useRouter } from "next/router";

interface TaskCardProps {
    color: string;
    icon: string;
    title: string;
    content: string;
    route: string;
    gradientFrom: string;
    gradientTo: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
    color,
    icon,
    title,
    content,
    route,
    gradientFrom,
    gradientTo,
}) => {
    const router = useRouter();

    return (
        <div className={`
            relative
            p-6
            my-4
            mx-2
            rounded-[24px]
            bg-gradient-to-br
            ${gradientFrom}
            ${gradientTo}
            shadow-[0_8px_32px_rgba(0,0,0,0.06)]
            overflow-hidden
            transition-all
            duration-500
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)]
            hover:translate-y-[-8px]
            group
        `}>
            <div className="flex 
            ">
                <div className="flex-1">
                    <div className={`
                        relative
                        inline-flex
                        items-center
                        justify-center
                        w-14
                        h-14
                        rounded-2xl
                        bg-${color}-100/80
                        backdrop-blur-lg
                        transition-all
                        ease-[cubic-bezier(0.34,1.56,0.64,1)]
                        group-hover:scale-150
                        group-hover:rotate-6
                        shadow-sm
                        group-hover:shadow-lg
                    `}>
                        <span className="text-3xl 
                            transform 
                            transition-transform 
                            duration-500 
                            ease-out 
                            group-hover:scale-110
                            ">
                            {icon}
                        </span>
                    </div>

                    <h3 className={`
                        font-semibold
                        text-lg
                    `}>
                        {title}
                    </h3>

                    <p className="
                        text-start
                        text-slate-600
                        text-sm
                    ">
                        {content}
                    </p>
                </div>

                <button 
                    onClick={() => router.push(route)}
                    className={`
                        relative
                        h-10
                        w-10
                        rounded-full
                        bg-${color}-100/80
                        backdrop-blur-lg
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.34,1.56,0.64,1)]
                        hover:bg-${color}-200/90
                        hover:scale-110
                        hover:rotate-3
                        focus:outline-none
                        focus:ring-2
                        focus:ring-${color}-400/40
                        focus:ring-offset-2
                        shadow-sm
                        hover:shadow-lg
                        group/btn
                        overflow-hidden
                    `}
                    aria-label="Navigate to task details"
                >
                    <svg 
                        className={`
                            absolute
                            top-1/2
                            left-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            w-5
                            h-5
                            text-${color}-600
                            transition-all
                            duration-500
                            ease-[cubic-bezier(0.34,1.56,0.64,1)]
                            group-hover/btn:translate-x-[2px]
                            group-hover:text-${color}-700
                        `}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
