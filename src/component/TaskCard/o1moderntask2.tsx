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
        <div
            className={`bg-gradient-to-br 
            ${gradientFrom} 
            ${gradientTo} 
            p-6 
            rounded-2xl 
            relative 
            overflow-hidden 
            transition-transform 
            transform 
            duration-500 
            ease-in-out 
            hover:scale-105 
            hover:shadow-2xl 
            group 
            cursor-pointer
            `}
            onClick={() => router.push(route)}
        >
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div
                            className={`relative 
                            flex 
                            items-center 
                            justify-center 
                            w-14 
                            h-14 
                            rounded-full 
                            bg-${color}-200 
                            transition-transform 
                            duration-500 
                            ease-in-out 
                            group-hover:scale-110 
                            shadow-lg`}
                        >
                            <span className="text-3xl">{icon}</span>
                        </div>
                    </div>

                    <h3
                        className={`text-xl 
                        font-semibold 
                        text-${color}-700 
                        transition-colors 
                        duration-500 
                        ease-in-out 
                        group-hover:text-${color}-800`}
                    >
                        {title}
                    </h3>

                    <p className="text-slate-700 text-base mt-2">
                        {content}
                    </p>
                </div>

                <button
                    onClick={() => router.push(route)}
                    className={`absolute 
                    bottom-4 
                    right-4 
                    h-10 
                    w-14 
                    bg-${color}-100 
                    rounded-lg 
                    flex 
                    items-center 
                    justify-center 
                    transition-transform 
                    duration-500 
                    ease-in-out 
                    hover:translate-x-2 
                    hover:scale-110 
                    shadow-md`}
                >
                    <svg
                        className={`w-5 
                        h-5 
                        text-${color}-500 
                        transition-transform 
                        duration-500 
                        ease-in-out 
                        group-hover:translate-x-1`}
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

            {/* Enhanced Background Decoration */}
            <div
                className={`absolute 
                -bottom-6 
                -right-6 
                w-40 
                h-40 
                bg-${color}-300/30 
                rounded-full 
                blur-3xl 
                transition-transform 
                duration-500 
                ease-in-out 
                group-hover:scale-150 
                group-hover:bg-${color}-400/20`}
            />
        </div>
    );
};

export default TaskCard;
