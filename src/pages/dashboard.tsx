import { useRouter } from "next/router";
import TaskCard from "~/component/TaskCard/TaskCard";

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

export default function Dashboard() {
  const router = useRouter();
  return (
    <div className="flex 
      min-h-screen 
      flex-col 
      items-center 
      justify-start 
      bg-gradient-to-br from-slate-50 to-slate-100
      p-4
      mx-4">
      <div className=" 
        max-w-md 
        rounded-lg 
        bg-white/80
        backdrop-blur-sm
        shadow-lg
        transition-all
        duration-300
        hover:shadow-xl"
      >
        {/* top right icon */}
        <div className="relative">
          <button className="relative 
              top-6
              right-4
              h-10
              w-10
              rounded-md
              bg-indigo-600/20 
              p-2
              backdrop-blur-3xl
              transition-all
              duration-300
              hover:bg-indigo-600/30
              hover:scale-105"
            aria-label="Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-indigo-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
        <div className="mb-6 
          rounded-3xl 
          bg-gradient-to-br from-indigo-500 to-violet-500
          p-6 
          text-white 
          shadow-md
          transition-all
          duration-300
          hover:shadow-lg
          hover:from-indigo-600
          hover:to-violet-600"
        >
          <h1 className="text-2xl 
            font-bold"
          >Welcome to Buzerin</h1>
          <p className="text-lg">
            Earn money by commenting on Instagram posts or purchase comments for your corporate accounts.
          </p>
          <div className="mt-4 
            flex 
            justify-center 
            space-x-4"
          >
            <button 
              onClick={() => router.push('/become-worker')}
              className="rounded-md 
                bg-white/90
                px-4 
                py-2 
                text-indigo-500
                transition-all
                duration-300
                hover:bg-white
                hover:scale-105
                hover:shadow-lg"
            >
              Become a Worker
            </button>
            <button 
              onClick={() => router.push('/purchase-comments')}
              className="rounded-md 
                bg-violet-600/80
                px-4 
                py-2 
                text-white
                transition-all
                duration-300 
                hover:bg-violet-600
                hover:scale-105
                hover:shadow-lg"
            >
              Purchase Comments
            </button>
          </div>
        </div>

        <div className="mb-6 
          rounded-lg 
          bg-slate-50/80
          backdrop-blur-sm
          p-4 
          shadow-inner
          transition-all
          duration-300
          hover:bg-slate-50">
          <p className="text-center 
            text-slate-700"
          >
            Are you ready to boost your Instagram engagement?
          </p>
          <div className="mt-2 
            flex 
            justify-center 
            space-x-4">
            <button 
              onClick={() => router.push('/start-earning')}
              className="flex 
                items-center 
                space-x-2 
                rounded-md 
                bg-gradient-to-r from-emerald-500 to-teal-500
                px-4 
                py-2 
                text-white
                transition-all
                duration-300
                hover:from-emerald-600
                hover:to-teal-600
                hover:scale-105
                hover:shadow-lg"
            >
              <span>👍</span>
              <span>Yes, Let's Go!</span>
            </button>
            <button 
              onClick={() => router.push('/learn-more')}
              className="flex 
                items-center 
                space-x-2 
                rounded-md 
                bg-slate-200/80
                backdrop-blur-sm
                px-4 
                py-2 
                text-slate-700
                transition-all
                duration-300
                hover:bg-slate-300
                hover:scale-105"
            >
              <span>👎</span>
              <span>Not Now</span>
            </button>
          </div>
        </div>

        {/* add margin to right and left side */}
        <div className="mx-4">
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
        
      </div>
    </div>
  );
}