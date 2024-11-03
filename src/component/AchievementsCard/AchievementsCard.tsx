import React from "react";

const AchievementsCard: React.FC = () => {
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
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.095.702 2.037 1.682 2.58L12 21l1.318-7.42C14.298 13.037 15 12.095 15 11c0-1.657-1.343-3-3-3z" />
                </svg>
                <div>
                    <h3 className="text-lg font-semibold text-yellow-700">Top Performer</h3>
                    <p className="text-sm text-yellow-800">Completed 50+ tasks</p>
                </div>
            </div>
        </div>
    );
};

export default AchievementsCard;