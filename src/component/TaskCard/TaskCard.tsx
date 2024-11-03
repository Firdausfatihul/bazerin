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
            rounded-[24px]
            bg-gradient-to-br
            ${gradientFrom}
            ${gradientTo}
            backdrop-blur-md
            shadow-[0_8px_32px_rgba(0,0,0,0.06)]
            overflow-hidden
            transition-all
            duration-500
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)]
            hover:translate-y-[-8px]
            group
            motion-safe:animate-fadeIn
            before:absolute
            before:inset-0
            before:bg-gradient-to-br
            before:from-white/10
            before:to-transparent
            before:opacity-0
            hover:before:opacity-100
            before:transition-all
            before:duration-500
            before:ease-out
        `}>
            <div className="flex justify-between items-start gap-4">
                <div className="flex-1 space-y-4">
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
                        duration-500
                        ease-[cubic-bezier(0.34,1.56,0.64,1)]
                        group-hover:scale-110
                        group-hover:rotate-3
                        shadow-sm
                        group-hover:shadow-lg
                        overflow-hidden
                        before:absolute
                        before:inset-0
                        before:bg-gradient-to-br
                        before:from-white/30
                        before:to-transparent
                        before:opacity-0
                        group-hover:before:opacity-100
                        before:transition-all
                        before:duration-500
                    `}>
                        <span className="text-3xl transform transition-transform duration-500 ease-out group-hover:scale-110 relative z-10">
                            {icon}
                        </span>
                    </div>

                    <h3 className={`
                        font-semibold
                        text-lg
                        text-${color}-700
                        transition-colors
                        duration-300
                        group-hover:text-${color}-800
                        tracking-tight
                    `}>
                        {title}
                    </h3>

                    <p className="
                        text-start
                        text-slate-600
                        text-sm
                        leading-relaxed
                        transition-colors
                        duration-300
                        group-hover:text-slate-800
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
