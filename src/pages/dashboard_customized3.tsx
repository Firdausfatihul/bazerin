    // Start of Selection
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
        mx-4
        animate-fadeIn">
          <div className=" 
          max-w-4xl
          w-full
          rounded-2xl 
          bg-white/90
          backdrop-blur-lg
          shadow-2xl
          transition-transform
          transform-gpu
          duration-700
          ease-out
          hover:shadow-3xl
          hover:bg-gradient-to-br hover:from-white hover:to-gray-100
          "
          >
            {/* top right icon */}
            <div className="relative">
                <button className="relative 
                top-6
                right-4
                h-12
                w-12
                rounded-full
                bg-indigo-600/20 
                p-3
                backdrop-blur-3xl
                transition-transform
                duration-700
                ease-out
                hover:bg-indigo-600/40
                hover:scale-110
                hover:rotate-12
                "
                aria-label="Menu"
                >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-indigo-600 transition-colors duration-700 ease-out hover:text-indigo-700 transform-gpu hover:rotate-90" 
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
            <div className="mb-8 
            rounded-3xl 
            bg-gradient-to-br from-indigo-500 to-violet-500
            p-8 
            text-white 
            shadow-lg
            transition-all
            duration-700
            ease-out
            hover:shadow-3xl
            hover:from-indigo-600
            hover:to-violet-600
            animate-pulse
            "
            >
              <h1 className="text-3xl 
              font-extrabold
              transition-colors
              duration-700
              ease-out
              hover:text-white
              ">
                Hello Daus
              </h1>
              <p className="text-xl mt-2">
                Ayo kerjakan pre-test untuk mengetahui tingkat pengetahuan bahasa Inggrismu.
              </p>
              <p className="text-sm mt-1">Durasi : 10 menit</p>
              <div className="mt-6 
              flex 
              justify-center 
              space-x-6
              ">
                <button className="rounded-full 
                bg-white/90
                px-6 
                py-3 
                text-indigo-500
                font-medium
                transition-transform
                duration-700
                ease-out
                hover:bg-white
                hover:scale-110
                hover:shadow-lg
                "
                onClick={() => router.push('/pre-test')}
                >
                  Check now
                </button>
                <button className="rounded-full 
                bg-violet-600/80
                px-6 
                py-3 
                text-white
                font-medium
                transition-transform
                duration-700
                ease-out 
                hover:bg-violet-600
                hover:scale-110
                hover:shadow-lg
                "
                onClick={() => router.push('/reminders')}
                >
                  Remind me later
                </button>
              </div>
            </div>
    
            <div className="mb-8 
            rounded-lg 
            bg-slate-50/90
            backdrop-blur-md
            p-6 
            shadow-inner
            transition-all
            duration-700
            ease-out
            hover:bg-slate-50
            hover:shadow-md
            animate-slideIn
            ">
              <p className="text-center 
              text-slate-700
              transition-colors
              duration-700
              ease-out
              hover:text-slate-800
              "
              >
                Apakah kamu sudah siap belajar?
              </p>
              <div className="mt-4 
              flex 
              justify-center 
              space-x-6
              ">
                <button className="flex 
                items-center 
                space-x-2 
                rounded-full 
                bg-gradient-to-r from-emerald-500 to-teal-500
                px-6 
                py-3 
                text-white
                font-medium
                transition-transform
                duration-700
                ease-out
                hover:from-emerald-600
                hover:to-teal-600
                hover:scale-110
                hover:shadow-lg
                "
                >
                  <span>👍</span>
                  <span>Yes, I did!</span>
                </button>
                <button className="flex 
                items-center 
                space-x-2 
                rounded-full 
                bg-slate-200/90
                backdrop-blur-sm
                px-6 
                py-3 
                text-slate-700
                font-medium
                transition-transform
                duration-700
                ease-out
                hover:bg-slate-300
                hover:scale-110
                hover:shadow-lg
                "
                >
                  <span>👎</span>
                  <span>No, I didn't.</span>
                </button>
              </div>
            </div>
    
            {/* Courses Section */}
            <div className="mx-6">
                <div className="flex
                justify-between
                items-center
                mb-6
                animate-fadeInUp">
                    <h2 className="text-2xl 
                    font-bold
                    text-slate-800
                    transition-colors
                    duration-700
                    ease-out
                    hover:text-slate-900
                    ">
                        My Courses
                    </h2>
                    <div className="flex 
                    items-center 
                    gap-4
                    ">
                        <span className="text-slate-500
                        transition-colors
                        duration-700
                        ease-out
                        hover:text-slate-600
                        ">
                            Weakness Subject only
                        </span>
                        <div className="w-14
                        h-7
                        bg-slate-200
                        rounded-full
                        relative
                        transition-all
                        duration-700
                        ease-out
                        hover:bg-slate-300
                        cursor-pointer
                        "
                        onClick={() => {/* Toggle functionality */}}
                        >
                            <div className="absolute
                            right-1
                            top-1
                            w-5
                            h-5
                            bg-white
                            rounded-full
                            transition-transform
                            duration-700
                            ease-out
                            hover:scale-125
                            transform-gpu
                            ">
                            </div>
                        </div>
                    </div>
                </div>
    
                <p
                className="mb-6
                text-slate-500
                transition-colors
                duration-700
                ease-out
                hover:text-slate-600
                ">
                    Ayo persiapkan dirimu untuk belajar!
                </p>
    
                <div className="grid
                grid-cols-1 md:grid-cols-2
                gap-6
                animate-fadeInUp
                ">
                    {/* first task */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50
                    p-6
                    rounded-2xl
                    relative
                    overflow-hidden
                    transition-transform
                    duration-700
                    ease-out
                    hover:from-emerald-100
                    hover:to-teal-100
                    hover:shadow-3xl
                    group
                    ">
                        <div className="flex
                        justify-between
                        items-start
                        animate-zoomIn">
                            <div>
                                <div className="flex
                                items-center
                                gap-3
                                mb-3">
                                    <div className="relative
                                    w-14
                                    h-14
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:scale-125
                                    ">
                                        {/* loading circle */}
                                        <svg className="w-14
                                        h-14
                                        transform
                                        -rotate-90
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:rotate-0
                                        ">
                                            <circle
                                            cx="24"
                                            cy="24"
                                            r="20"
                                            stroke="#E2E8F0"
                                            strokeWidth="4"
                                            fill="none"
                                            />
                                            <circle
                                            cx="24"
                                            cy="24"
                                            r="20"
                                            stroke="#10B981"
                                            strokeWidth="4"
                                            fill="none"
                                            strokeDasharray="125.6"
                                            strokeDashoffset="23.864"
                                            className="transition-all duration-700 ease-out group-hover:stroke-emerald-600"
                                            />
                                        </svg>
                                        <span className="absolute
                                        top-1/2
                                        left-1/2
                                        transform
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        text-lg
                                        font-semibold
                                        text-emerald-600
                                        transition-colors
                                        duration-700
                                        ease-out
                                        group-hover:text-emerald-700
                                        ">
                                            91%
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-semibold
                                text-emerald-600
                                transition-colors
                                duration-700
                                ease-out
                                group-hover:text-emerald-700
                                ">
                                    Medication
                                </h3>
                                <p className="text-sm
                                text-slate-600">
                                    6 Tasks
                                </p>
                            </div>
                            <button className="absolute
                                bottom-3
                                right-3
                                h-10
                                w-14
                                before:absolute
                                before:inset-0
                                before:h-16
                                before:w-18
                                before:rounded-xl
                                before:bg-emerald-100
                                transition-all
                                duration-700
                                ease-out
                                hover:before:bg-emerald-200
                                "
                                onClick={() => router.push('/medication')}
                                >
                                <svg className="absolute
                                top-2/3
                                left-2/4
                                transform
                                -translate-x-1/2
                                -translate-y-1/2
                                w-5
                                h-5
                                text-emerald-600
                                transition-transform
                                duration-700
                                ease-out
                                group-hover:translate-x-3
                                "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                    <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
    
                    {/* second task */}
    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50
                    p-6
                    rounded-2xl
                    relative
                    overflow-hidden
                    transition-transform
                    duration-700
                    ease-out
                    hover:from-blue-100
                    hover:to-indigo-100
                    hover:shadow-3xl
                    group
                    ">
                        <div className="flex
                        justify-between
                        items-start
                        animate-zoomIn">
                            <div>
                                <div className="flex
                                items-center
                                gap-3
                                mb-3">
                                    <div className="relative
                                    w-14
                                    h-14
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:scale-125
                                    ">
                                        {/* blue loading circle */}
                                        <svg className="w-14
                                        h-14
                                        transform
                                        -rotate-90
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:rotate-0
                                        ">
                                            <circle
                                                cx="24"
                                                cy="24"
                                                r="20"
                                                stroke="#E2E8F0"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <circle
                                                cx="24"
                                                cy="24"
                                                r="20"
                                                stroke="#4F46E5"
                                                strokeWidth="4"
                                                fill="none"
                                                strokeDasharray="125.6"
                                                strokeDashoffset="23.864"
                                                className="transition-all duration-700 ease-out group-hover:stroke-indigo-600"
                                            />
                                        </svg>
                                        <span className="absolute
                                        top-1/2
                                        left-1/2
                                        transform
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        text-lg
                                        font-semibold
                                        text-indigo-600
                                        transition-colors
                                        duration-700
                                        ease-out
                                        group-hover:text-indigo-700
                                        ">
                                            61%
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-semibold
                                text-indigo-600
                                transition-colors
                                duration-700
                                ease-out
                                group-hover:text-indigo-700
                                ">
                                    Fitness
                                </h3>
                                <p className="text-sm
                                text-slate-600">
                                    6 Tasks
                                </p>
                            </div>
                            <button className="absolute
                                bottom-3
                                right-3
                                h-10
                                w-14
                                before:absolute
                                before:inset-0
                                before:h-16
                                before:w-18
                                before:rounded-xl
                                before:bg-indigo-100
                                transition-all
                                duration-700
                                ease-out
                                hover:before:bg-indigo-200
                                "
                                onClick={() => router.push('/fitness')}
                                >
                                <svg className="absolute
                                top-2/3
                                left-2/4
                                transform
                                -translate-x-1/2
                                -translate-y-1/2
                                w-5
                                h-5
                                text-indigo-600
                                transition-transform
                                duration-700
                                ease-out
                                group-hover:translate-x-3
                                "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                    <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
    
                    {/* third task */}
    
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50
                    p-6
                    rounded-2xl
                    relative
                    overflow-hidden
                    transition-transform
                    duration-700
                    ease-out
                    hover:from-amber-100
                    hover:to-orange-100
                    hover:shadow-3xl
                    group
                    ">
                        <div className="flex
                        justify-between
                        items-start
                        animate-zoomIn">
                            <div>
                                <div className="flex
                                items-center
                                gap-3
                                mb-3">
                                    <div className="relative
                                    w-14
                                    h-14
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:scale-125
                                    ">
                                        {/* orange loading circle */}
                                        <svg className="w-14
                                        h-14
                                        transform
                                        -rotate-90
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:rotate-0
                                        ">
                                            <circle
                                                cx="24"
                                                cy="24"
                                                r="20"
                                                stroke="#E2E8F0"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <circle
                                                cx="24"
                                                cy="24"
                                                r="20"
                                                stroke="#F97316"
                                                strokeWidth="4"
                                                fill="none"
                                                strokeDasharray="125.6"
                                                strokeDashoffset="23.864"
                                                className="transition-all duration-700 ease-out group-hover:stroke-orange-600"
                                            />
                                        </svg>
                                        <span className="absolute
                                        top-1/2
                                        left-1/2
                                        transform
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        text-lg
                                        font-semibold
                                        text-orange-600
                                        transition-colors
                                        duration-700
                                        ease-out
                                        group-hover:text-orange-700
                                        ">
                                            21%
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-semibold
                                text-orange-600
                                transition-colors
                                duration-700
                                ease-out
                                group-hover:text-orange-700
                                ">
                                    Nutrition
                                </h3>
                                <p className="text-sm
                                text-slate-600">
                                    6 Tasks
                                </p>
                            </div>
                            <button className="absolute
                                bottom-3
                                right-3
                                h-10
                                w-14
                                before:absolute
                                before:inset-0
                                before:h-16
                                before:w-18
                                before:rounded-xl
                                before:bg-orange-100
                                transition-all
                                duration-700
                                ease-out
                                hover:before:bg-orange-200
                                "
                                onClick={() => router.push('/nutrition')}
                                >
                                <svg className="absolute
                                top-2/3
                                left-2/4
                                transform
                                -translate-x-1/2
                                -translate-y-1/2
                                w-5
                                h-5
                                text-orange-600
                                transition-transform
                                duration-700
                                ease-out
                                group-hover:translate-x-3
                                "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                    <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
    
                    {/* fourth task */}
    
                    <div className="bg-gradient-to-br from-rose-50 to-pink-50
                    p-6
                    rounded-2xl
                    relative
                    overflow-hidden
                    transition-transform
                    duration-700
                    ease-out
                    hover:from-rose-100
                    hover:to-pink-100
                    hover:shadow-3xl
                    group
                    ">
                        <div className="flex
                        justify-between
                        items-start
                        animate-zoomIn">
                            <div>
                                <div className="flex
                                items-center
                                gap-3
                                mb-3">
                                    <div className="relative
                                    w-14
                                    h-14
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:scale-125
                                    ">
                                        {/* rose loading circle */}
                                        <svg className="w-14
                                        h-14
                                        transform
                                        -rotate-90
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:rotate-0
                                        ">
                                            <circle
                                                cx="24"
                                                cy="24"
                                                r="20"
                                                stroke="#E2E8F0"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <circle
                                                cx="24"
                                                cy="24"
                                                r="20"
                                                stroke="#E11D48"
                                                strokeWidth="4"
                                                fill="none"
                                                strokeDasharray="125.6"
                                                strokeDashoffset="23.864"
                                                className="transition-all duration-700 ease-out group-hover:stroke-rose-600"
                                            />
                                        </svg>
                                        <span className="absolute
                                        top-1/2
                                        left-1/2
                                        transform
                                        -translate-x-1/2
                                        -translate-y-1/2
                                        text-lg
                                        font-semibold
                                        text-rose-600
                                        transition-colors
                                        duration-700
                                        ease-out
                                        group-hover:text-rose-700
                                        ">
                                            51%
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-semibold
                                text-rose-600
                                transition-colors
                                duration-700
                                ease-out
                                group-hover:text-rose-700
                                ">
                                    Lifestyle
                                </h3>
                                <p className="text-sm
                                text-slate-600">
                                    6 Tasks
                                </p>
                            </div>
                            <button className="absolute
                                bottom-3
                                right-3
                                h-10
                                w-14
                                before:absolute
                                before:inset-0
                                before:h-16
                                before:w-18
                                before:rounded-xl
                                before:bg-rose-100
                                transition-all
                                duration-700
                                ease-out
                                hover:before:bg-rose-200
                                "
                                onClick={() => router.push('/lifestyle')}
                                >
                                <svg className="absolute
                                top-2/3
                                left-2/4
                                transform
                                -translate-x-1/2
                                -translate-y-1/2
                                w-5
                                h-5
                                text-rose-600
                                transition-transform
                                duration-700
                                ease-out
                                group-hover:translate-x-3
                                "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                    <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* New Section: Achievements */}
            <div className="mx-6 mb-8">
                <div className="flex
                justify-between
                items-center
                mb-6
                animate-fadeInUp">
                    <h2 className="text-2xl 
                    font-bold
                    text-slate-800
                    transition-colors
                    duration-700
                    ease-out
                    hover:text-slate-900
                    ">
                        Achievements
                    </h2>
                    <button className="text-indigo-600
                    font-medium
                    transition-colors
                    duration-700
                    ease-out
                    hover:text-indigo-800
                    ">
                        View All
                    </button>
                </div>
                <div className="flex
                flex-wrap
                gap-6
                justify-center
                animate-fadeInUp
                ">
                    {/* Achievement Card 1 */}
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
                    {/* Achievement Card 2 */}
                    <div className="bg-gradient-to-tr from-green-100 to-green-300
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
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                                <h3 className="text-lg font-semibold text-green-700">Consistency</h3>
                                <p className="text-sm text-green-800">Daily logins for 30 days</p>
                            </div>
                        </div>
                    </div>
                    {/* Achievement Card 3 */}
                    <div className="bg-gradient-to-tr from-blue-100 to-blue-300
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
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428A9 9 0 1112 3a9 9 0 018.428 12.428z" />
                            </svg>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-700">Marathon Learner</h3>
                                <p className="text-sm text-blue-800">Logged over 100 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      );
    }