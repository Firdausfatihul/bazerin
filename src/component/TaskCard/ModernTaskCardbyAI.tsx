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
        <div className={`bg-gradient-to-br
        ${gradientFrom}
        ${gradientTo}
        p-6
        rounded-2xl
        relative
        overflow-hidden
        transition-all
        duration-700
        ease-[cubic-bezier(0.34,1.56,0.64,1)]
        transform
        hover:-translate-y-2
        hover:${gradientFrom.replace('50','300')}
        hover:${gradientTo.replace('50','300')}
        hover:shadow-2xl
        hover:scale-[1.03]
        group
        cursor-pointer
        active:scale-95
        active:shadow-inner`}
        onClick={() => router.push(route)}
        >
            <div className="flex
            justify-between
            items-start
            relative
            z-10">
                <div className="flex-1">
                    <div className="flex
                    items-center 
                    gap-3
                    mb-3">
                        <div className={`relative
                            flex
                            items-center
                            justify-center
                            w-14
                            h-14
                            rounded-2xl
                            bg-${color}-100/90
                            backdrop-blur-md
                            shadow-inner
                            transition-all
                            duration-700
                            ease-[cubic-bezier(0.34,1.56,0.64,1)]
                            group-hover:scale-125
                            group-hover:rotate-6
                            group-hover:bg-${color}-200/95
                            group-hover:shadow-lg`}
                        >
                            <span className="text-3xl transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:-rotate-12">{icon}</span>
                        </div>
                    </div>

                    <h3 className={`font-bold 
                    text-lg
                    text-${color}-700
                    transition-all
                    duration-500
                    ease-out
                    group-hover:text-${color}-900
                    group-hover:translate-x-2
                    group-hover:scale-105`}>
                        {title}
                    </h3>

                    <p className="text-start
                    text-slate-600
                    text-sm
                    mt-2
                    transition-all
                    duration-500
                    ease-out
                    group-hover:text-slate-900
                    group-hover:translate-x-1">
                        {content}
                    </p>
                </div>

                <div className={`absolute
                    bottom-0
                    right-0
                    p-4
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    transform
                    translate-x-3
                    translate-y-3
                    opacity-70
                    group-hover:translate-x-0
                    group-hover:translate-y-0
                    group-hover:opacity-100`}>
                    <svg 
                        className={`w-6
                        h-6
                        text-${color}-600
                        transition-all
                        duration-700
                        ease-[cubic-bezier(0.34,1.56,0.64,1)]
                        transform
                        group-hover:translate-x-1
                        group-hover:scale-110
                        group-hover:text-${color}-900`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>

            {/* Background decoration */}
            <div className={`absolute
                -bottom-8
                -right-8
                w-32
                h-32
                rounded-full
                bg-${color}-200/40
                blur-2xl
                transition-all
                duration-700
                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                transform
                group-hover:scale-[2]
                group-hover:bg-${color}-400/30
                group-hover:rotate-180`}
            />
        </div>
    );
};

export default TaskCard;
