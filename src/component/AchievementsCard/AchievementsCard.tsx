import React from "react";

interface TestimonyCardProps {
  color: string;
  photoProfile: string;
  name: string;
  content: string;
  date: string;
}

interface AchievementCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AchievementsCard: React.FC<AchievementCardProps | TestimonyCardProps> = (props) => {
    if ('photoProfile' in props) {
        // Testimony card
        const { color, photoProfile, name, content, date } = props;
        return (
            <div className={`bg-gradient-to-tr from-${color}-100 to-${color}-300
                p-6
                mx-4
                my-4
                rounded-2xl
                shadow-lg
                transition-transform
                duration-700
                ease-out
                hover:scale-105
                hover:shadow-2xl
            `}>
                <div className="flex items-center gap-4">
                    <img 
                        src={photoProfile} 
                        alt={name}
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h3 className={`text-lg font-semibold text-${color}-700`}>{name}</h3>
                        <p className={`text-sm text-${color}-800`}>{content}</p>
                        <span className={`text-xs text-${color}-600`}>{date}</span>
                    </div>
                </div>
            </div>
        );
    } else {
        // Achievement card
        const { title, description, icon } = props;
        return (
            <div className="bg-gradient-to-tr from-yellow-100 to-yellow-300
                p-6
                rounded-2xl
                shadow-lg
                transition-transform
                duration-700
                ease-out
                hover:scale-105
                hover:shadow-2xl
            ">
                <div className="flex items-center gap-4">
                    {icon}
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-700">{title}</h3>
                        <p className="text-sm text-yellow-800">{description}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default AchievementsCard;