import React from "react";
import TaskCard from "~/component/TaskCard/TaskCard";
import FilterTogle from "~/component/FilterTogle/FilterTogle";

const TASKITEM = [
    {
        color: 'emerald',
        icon: '👍',
        title: 'Sell Comments on Posts',
        content: '6 Posts Available',
        route: '/task/comment-posts',
        gradientFrom: 'from-emerald-50',
        gradientTo: 'to-teal-50',
    },
    {
        color: 'indigo',
        icon: '👎',
        title: 'Buy Comments for Posts',
        content: '4 Packages Available',
        route: '/purchase-comments',
        gradientFrom: 'from-blue-50',
        gradientTo: 'to-indigo-50',
    },
    {
        color: 'orange',
        icon: '👀',
        title: 'Engage with Followers',
        content: '3 Tasks Available',
        route: '/task/engage-followers',
        gradientFrom: 'from-amber-50',
        gradientTo: 'to-orange-50',
    },
    {
        color: 'rose',
        icon: '💔',
        title: 'Engage with Followers',
        content: '3 Tasks Available',
        route: '/task/engage-followers',
        gradientFrom: 'from-rose-50',
        gradientTo: 'to-pink-50',
    },
]

const AvailableCard: React.FC = () => {
    return (
        <div className="mx-4">
            {/* flex the available tasks and active task */}
          <div className="flex
            justify-between
            items-center
            mb-4">
            <h2 className="text-lg 
              font-bold
              text-slate-800">
              Available Tasks
            </h2>
            <div className="flex 
              gap-2">
              <span className="text-slate-500">
                Filter: Active Tasks
              </span>
              {/* filter button */}
              <FilterTogle />
            </div>
          </div>


          <p
            className="mb-4
              text-slate-500">
            Start earning by completing tasks or enhancing your posts with purchased comments!
          </p>

          <div className="grid
            grid-cols-2
            gap-4">
            
            {TASKITEM.map((Task) => (
                <TaskCard key={Task.title}
                {...Task}
            />
            ))}
                
          </div>
        </div>
    );
}

export default AvailableCard;