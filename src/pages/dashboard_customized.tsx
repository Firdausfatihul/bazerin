import { useRouter } from "next/router";
    
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
      w-full
      max-w-4xl
      rounded-lg 
      bg-white/90
      backdrop-blur-sm
      shadow-xl
      transition-shadow
      duration-300
      hover:shadow-2xl"
      >
        {/* Top Right Menu Icon */}
        <div className="relative p-4">
            <button className="relative 
            h-10
            w-10
            rounded-md
            bg-indigo-600/20 
            p-2
            backdrop-blur-3xl
            transition-transform
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
                    d="M3 12h18M3 6h18M3 18h18" 
                />
            </svg>
            </button>
        </div>

        {/* Welcome Section */}
        <div className="mb-8 
        rounded-3xl 
        bg-gradient-to-br from-indigo-500 to-violet-500
        p-8 
        text-white 
        shadow-md
        transition-shadow
        duration-300
        hover:shadow-lg
        hover:from-indigo-600
        hover:to-violet-600"
        >
          <h1 className="text-3xl 
          font-bold
          mb-4"
          >Welcome to Buzerin</h1>
          <p className="text-lg">
            Join Buzerin to earn by commenting on Instagram posts or boost your corporate accounts with our premium comment packages.
          </p>
          <div className="mt-6 
          flex 
          justify-center 
          space-x-6"
          >
            <button 
              onClick={() => router.push('/become-worker')}
              className="flex 
            items-center 
            space-x-2
            rounded-md 
            bg-white/90
            px-5 
            py-3 
            text-indigo-600
            font-semibold
            transition-transform
            duration-300
            hover:bg-white
            hover:scale-105
            hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-5 w-5 text-indigo-600" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor">
                <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 4v16m8-8H4" />
              </svg>
              <span>Become a Worker</span>
            </button>
            <button 
              onClick={() => router.push('/purchase-comments')}
              className="flex 
            items-center 
            space-x-2
            rounded-md 
            bg-violet-600/80
            px-5 
            py-3 
            text-white
            font-semibold
            transition-transform
            duration-300 
            hover:bg-violet-600
            hover:scale-105
            hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-5 w-5 text-white" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor">
                <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l1.5 9" />
              </svg>
              <span>Purchase Comments</span>
            </button>
          </div>
        </div>

        {/* Available Tasks Section */}
        <div className="mx-6">
            <div className="flex
            justify-between
            items-center
            mb-6">
                <h2 className="text-2xl 
                font-bold
                text-slate-800">
                    Available Tasks
                </h2>
                <div className="flex 
                items-center
                gap-3">
                    <span className="text-slate-500">
                        Filter: Active Tasks
                    </span>
                    <div className="w-14
                    h-8
                    bg-slate-200
                    rounded-full
                    relative
                    transition-all
                    duration-300
                    hover:bg-slate-300
                    cursor-pointer"
                    onClick={() => {/* Toggle Filter */}}
                    >
                        <div className="absolute
                        left-1
                        top-1
                        w-6
                        h-6
                        bg-white
                        rounded-full
                        shadow
                        transition-transform
                        duration-300
                        transform
                        /* Toggle translate based on filter state */
                        ">
                        </div>
                    </div>
                </div>
            </div>

            <p
            className="mb-6
            text-slate-600">
                Choose to earn by commenting or enhance your posts with purchased comments!
            </p>

            <div className="grid
            grid-cols-1
            md:grid-cols-2
            gap-6">
                {/* Work as a Commenter Task */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50
                p-6
                rounded-xl
                relative
                overflow-hidden
                transition-transform
                duration-300
                hover:from-emerald-100
                hover:to-teal-100
                hover:shadow-lg
                group">
                    <div className="flex
                    justify-between
                    items-start">
                        <div>
                            <div className="flex
                            items-center
                            gap-3
                            mb-3">
                                <div className="relative
                                w-14
                                h-14
                                transition-transform
                                duration-300
                                group-hover:scale-110">
                                    <svg className="w-14
                                    h-14
                                    transform
                                    -rotate-90"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 14l4-4m0 0l4-4m-4 4H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="font-semibold
                            text-emerald-600
                            transition-colors
                            duration-300
                            group-hover:text-emerald-700">
                                Work as a Commenter
                            </h3>
                            <p className="text-sm
                            text-slate-600">
                                Earn money by commenting on Instagram posts.
                            </p>
                        </div>
                        <button 
                          onClick={() => router.push('/become-worker')}
                          className="h-10
                            w-10
                            rounded-full
                            bg-emerald-100
                            flex
                            items-center
                            justify-center
                            transition-transform
                            duration-300
                            hover:bg-emerald-200
                            hover:scale-105"
                          >
                            <svg className="h-5 w-5 text-emerald-600"
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor">
                                <path strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={2} 
                                      d="M5 13l4 4L19 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Buy Comments Task */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50
                p-6
                rounded-xl
                relative
                overflow-hidden
                transition-transform
                duration-300
                hover:from-blue-100
                hover:to-indigo-100
                hover:shadow-lg
                group">
                    <div className="flex
                    justify-between
                    items-start">
                        <div>
                            <div className="flex
                            items-center
                            gap-3
                            mb-3">
                                <div className="relative
                                w-14
                                h-14
                                transition-transform
                                duration-300
                                group-hover:scale-110">
                                    <svg className="w-14
                                    h-14
                                    transform
                                    -rotate-90"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l1.5 9"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="font-semibold
                            text-indigo-600
                            transition-colors
                            duration-300
                            group-hover:text-indigo-700">
                                Buy Comment Packages
                            </h3>
                            <p className="text-sm
                            text-slate-600">
                                Enhance your posts with our premium comment packages.
                            </p>
                        </div>
                        <button 
                          onClick={() => router.push('/purchase-comments')}
                          className="h-10
                            w-10
                            rounded-full
                            bg-indigo-100
                            flex
                            items-center
                            justify-center
                            transition-transform
                            duration-300
                            hover:bg-indigo-200
                            hover:scale-105"
                          >
                            <svg className="h-5 w-5 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor">
                                <path strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={2} 
                                      d="M5 13l4 4L19 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* New Section: Why Buzerin */}
            <div className="mt-10">
                <h2 className="text-2xl 
                font-bold
                text-slate-800 
                mb-4">
                    Why Choose Buzerin?
                </h2>
                <div className="grid
                grid-cols-1
                md:grid-cols-3
                gap-6">
                    <div className="flex 
                    items-start 
                    bg-white 
                    p-4 
                    rounded-lg 
                    shadow 
                    transition-transform
                    duration-300
                    hover:scale-105
                    hover:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                             className="h-6 w-6 text-teal-500 mr-4" 
                             fill="none" 
                             viewBox="0 0 24 24" 
                             stroke="currentColor">
                            <path strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h3 className="font-semibold text-slate-800">Secure Payments</h3>
                            <p className="text-sm text-slate-600">Reliable and timely transactions for all your activities.</p>
                        </div>
                    </div>
                    <div className="flex 
                    items-start 
                    bg-white 
                    p-4 
                    rounded-lg 
                    shadow 
                    transition-transform
                    duration-300
                    hover:scale-105
                    hover:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                             className="h-6 w-6 text-indigo-500 mr-4" 
                             fill="none" 
                             viewBox="0 0 24 24" 
                             stroke="currentColor">
                            <path strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M12 8v4l3 3" />
                        </svg>
                        <div>
                            <h3 className="font-semibold text-slate-800">24/7 Support</h3>
                            <p className="text-sm text-slate-600">Our team is here to help you anytime, anywhere.</p>
                        </div>
                    </div>
                    <div className="flex 
                    items-start 
                    bg-white 
                    p-4 
                    rounded-lg 
                    shadow 
                    transition-transform
                    duration-300
                    hover:scale-105
                    hover:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                             className="h-6 w-6 text-pink-500 mr-4" 
                             fill="none" 
                             viewBox="0 0 24 24" 
                             stroke="currentColor">
                            <path strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                            <h3 className="font-semibold text-slate-800">Easy Integration</h3>
                            <p className="text-sm text-slate-600">Seamlessly integrate with your existing Instagram strategy.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clear Divide */}
            <div className="mt-12 border-t border-slate-200 pt-8">
                <h2 className="text-2xl 
                font-bold
                text-slate-800 
                mb-4">
                    Get Started Today
                </h2>
                <div className="flex 
                flex-col 
                md:flex-row 
                justify-center 
                items-center 
                space-y-4 
                md:space-y-0 
                md:space-x-6">
                    <button 
                      onClick={() => router.push('/become-worker')}
                      className="flex 
                    items-center 
                    space-x-2
                    rounded-md 
                    bg-emerald-600
                    px-6 
                    py-3 
                    text-white
                    font-semibold
                    transition-transform
                    duration-300 
                    hover:bg-emerald-700
                    hover:scale-105
                    hover:shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" 
                           className="h-5 w-5" 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           stroke="currentColor">
                          <path strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 4v16m8-8H4" />
                      </svg>
                      <span>Become a Worker</span>
                    </button>
                    <button 
                      onClick={() => router.push('/purchase-comments')}
                      className="flex 
                    items-center 
                    space-x-2
                    rounded-md 
                    bg-indigo-600
                    px-6 
                    py-3 
                    text-white
                    font-semibold
                    transition-transform
                    duration-300 
                    hover:bg-indigo-700
                    hover:scale-105
                    hover:shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" 
                           className="h-5 w-5" 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           stroke="currentColor">
                          <path strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l1.5 9" />
                      </svg>
                      <span>Purchase Comments</span>
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}