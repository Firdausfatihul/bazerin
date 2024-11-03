import React from "react";

const FilterTogle: React.FC = () => {
    return (
        <div className="w-12
                h-6
                bg-slate-200
                rounded-full
                relative
                transition-all
                duration-300
                hover:bg-slate-300"
              >
                <div className="absolute
                  right-1
                  top-1
                  w-4
                  h-4
                  bg-white
                  rounded-full
                  transition-all
                  duration-300
                  hover:scale-110">
                </div>
              </div>
    );
};

export default FilterTogle;