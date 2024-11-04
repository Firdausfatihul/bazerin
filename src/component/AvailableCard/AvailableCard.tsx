import React from "react";
import TaskCard from "~/component/TaskCard/TaskCard";
import FilterTogle from "~/component/FilterTogle/FilterTogle";

const TASKITEM = [
    {
        color: 'rose',
        icon: '📝',
        title: 'Jasa Isi Kuisioner',
        content: '2 Paket: Formulir only dan Video',
        route: '/task/survey',
        gradientFrom: 'from-rose-50',
        gradientTo: 'to-pink-50',
    },
    {
      color: 'orange',
      icon: '💬',
      title: 'Jasa Komentar Sosmed',
      content: '3 Paket Tersedia (FB, IG, TW)',
      route: '/purchase-social-comments',
      gradientFrom: 'from-amber-50',
      gradientTo: 'to-orange-50',
    },
    {
        color: 'emerald',
        icon: '👍',
        title: 'Jasa Like & Subscribe',
        content: '0 Paket Tersedia',
        route: '/task/comment-posts',
        gradientFrom: 'from-emerald-50',
        gradientTo: 'to-teal-50',
    },
    {
        color: 'indigo',
        icon: '⭐',
        title: 'Jasa Review',
        content: '8 Produk Tersedia ( Rating Gmaps, Rating Toko, Ulasan Shopee/Ecommerce)',
        route: '/task/product-review',
        gradientFrom: 'from-blue-50',
        gradientTo: 'to-indigo-50',
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
              Jasa yang tersedia
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