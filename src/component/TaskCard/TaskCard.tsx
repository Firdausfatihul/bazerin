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
        p-4
        rounded-xl
        relative
        overflow-hidden
        transition-all
        duration-300
        hover:${gradientFrom.replace(
            '50',
            '100'
        )}
        hover:${gradientTo.replace(
            '50',
            '100'
        )} 
        hover:shadow-lg 
        group`
        }
        >
            <div className="flex
            justify-between
            items-start">

                <div>
                    <div className="flex
                    items-center 
                    gap-2
                    mb-2">

                        <div className={`relative
                            flex
                            items-center
                            justify-center
                            w-12
                            h-12
                            rounded-full
                            bg-${color}-100
                            transition-transform
                            duration-300
                            group-hover:scale-110`
                            }
                            >
                            <span className="text-2xl">{icon}</span>
                        </div>

                    </div>

                    <h3 className={`font-semibold 
                    text-${color}-600 
                    transition-colors 
                    duration-300 
                    group-hover:text-${color}-700`}>
                        {title}
                    </h3>

                    <p className="text-start
                    text-slate-600
                    text-sm">
                        {content}
                    </p>

                </div>

                <button onClick={() => router.push(route)}
                className={`absolute
                    bottom-2
                    right-2
                    h-8
                    w-12
                    before:absolute
                    before:inset-0
                    before:h-14
                    before:w-16
                    before:rounded-xl
                    before:bg-${color}-100
                    `}
                    >

                        <svg className={`absolute
                        top-2/3
                        left-2/4
                        transform
                        -translate-x-1/2
                        -translate-y-1/2
                        w-4
                        h-4
                        text-${color}-600
                        transition-transform
                        duration-300
                        group-hover:translate-x-1`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >

                            <path strokeLinecap="round"
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
