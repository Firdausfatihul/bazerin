import { useRouter } from "next/router";
import { deflate } from "zlib";

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
          >Hello Daus</h1>
          <p className="text-lg">
            Ayo kerjakan pre-test untuk mengetahui tingkat pengetahuan bahasa inggrismu.
          </p>
          <p className="text-sm">Durasi : 10 menit</p>
          <div className="mt-4 
          flex 
          justify-center 
          space-x-4"
          >
            <button className="rounded-md 
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
              Check now
            </button>
            <button className="rounded-md 
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
              Remind me later
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
            Apakah kamu sudah siap belajar?
          </p>
          <div className="mt-2 
          flex 
          justify-center 
          space-x-4">
            <button className="flex 
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
              <span>Yes, I did!</span>
            </button>
            <button className="flex 
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
              <span>No, I didn't.</span>
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
                    My Courses list
                </h2>
                <div className="flex 
                gap-2">
                    <span className="text-slate-500">
                        Weakness Subject only
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
                Ayo persiapkan dirimu untuk belajar!
            </p>

            <div className="grid
            grid-cols-2
            gap-4">
                {/* first task */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50
                p-4
                rounded-xl
                relative
                overflow-hidden
                transition-all
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
                            gap-2
                            mb-2">
                                <div className="relative
                                w-12
                                h-12
                                transition-transform
                                duration-300
                                group-hover:scale-110">
                                    {/* loading circle */}
                                    <svg className="w-12
                                    h-12
                                    transform
                                    -rotate-90">
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
                                        className="transition-all duration-300 group-hover:stroke-emerald-600"
                                        />
                                    </svg>
                                    <span className="absolute
                                    top-1/2
                                    left-1/2
                                    transform
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    text-sm
                                    text-emerald-600
                                    transition-colors
                                    duration-300
                                    group-hover:text-emerald-700">
                                        91%
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-semibold
                            text-emerald-600
                            transition-colors
                            duration-300
                            group-hover:text-emerald-700">
                                Medication
                            </h3>
                            <p className="text-sm
                            text-slate-600">
                                6 Task
                            </p>
                        </div>
                        <button className="absolute
                            bottom-2
                            right-2
                            h-8
                            w-12
                            before:absolute
                            before:inset-0
                            before:h-14
                            before:w-16
                            before:rounded-xl
                            before:bg-emerald-100"
                            >
                            <svg className="absolute
                            top-2/3
                            left-2/4
                            transform
                            -translate-x-1/2
                            -translate-y-1/2
                            w-4
                            h-4
                            text-emerald-600
                            transition-transform
                            duration-300
                            group-hover:translate-x-1"
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
                p-4
                rounded-xl
                relative
                overflow-hidden
                transition-all
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
                            gap-2
                            mb-2">
                                <div className="relative
                                w-12
                                h-12
                                transition-transform
                                duration-300
                                group-hover:scale-110">
                                    {/* blue loading circle */}
                                    <svg className="w-12
                                    h-12
                                    transform
                                    -rotate-90">
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
                                            className="transition-all duration-300 group-hover:stroke-indigo-600"
                                        />
                                    </svg>
                                    <span className="absolute
                                    top-1/2
                                    left-1/2
                                    transform
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    text-sm
                                    text-indigo-600
                                    transition-colors
                                    duration-300
                                    group-hover:text-indigo-700">
                                        61%
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-semibold
                            text-indigo-600
                            transition-colors
                            duration-300
                            group-hover:text-indigo-700">
                                Fitness
                            </h3>
                            <p className="text-start text-slate-600">
                                6 Task
                            </p>
                        </div>
                        <button className="absolute
                            bottom-2
                            right-2
                            h-8
                            w-12
                            before:absolute
                            before:inset-0
                            before:h-14
                            before:w-16
                            before:rounded-xl
                            before:bg-indigo-100"
                            >
                            <svg className="absolute
                            top-2/3
                            left-2/4
                            transform
                            -translate-x-1/2
                            -translate-y-1/2
                            w-4
                            h-4
                            text-indigo-600
                            transition-transform
                            duration-300
                            group-hover:translate-x-1"
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
                p-4
                rounded-xl
                relative
                overflow-hidden
                transition-all
                duration-300
                hover:from-amber-100
                hover:to-orange-100
                hover:shadow-lg
                group">
                    <div className="flex
                    justify-between
                    items-start">
                        <div>
                            <div className="flex
                            items-center
                            gap-2
                            mb-2">
                                <div className="relative
                                w-12
                                h-12
                                transition-transform
                                duration-300
                                group-hover:scale-110">
                                    {/* orange loading circle */}
                                    <svg className="w-12
                                    h-12
                                    transform
                                    -rotate-90">
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
                                            className="transition-all duration-300 group-hover:stroke-orange-600"
                                        />
                                    </svg>
                                    <span className="absolute
                                    top-1/2
                                    left-1/2
                                    transform
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    text-sm
                                    text-orange-600
                                    transition-colors
                                    duration-300
                                    group-hover:text-orange-700">
                                        21%
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-semibold
                            text-orange-600
                            transition-colors
                            duration-300
                            group-hover:text-orange-700">
                                Fitness
                            </h3>
                            <p className="text-start text-slate-600">
                                6 Task
                            </p>
                        </div>
                        <button className="absolute
                            bottom-2
                            right-2
                            h-8
                            w-12
                            before:absolute
                            before:inset-0
                            before:h-14
                            before:w-16
                            before:rounded-xl
                            before:bg-orange-100"
                            >
                            <svg className="absolute
                            top-2/3
                            left-2/4
                            transform
                            -translate-x-1/2
                            -translate-y-1/2
                            w-4
                            h-4
                            text-orange-600
                            transition-transform
                            duration-300
                            group-hover:translate-x-1"
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
                p-4
                rounded-xl
                relative
                overflow-hidden
                transition-all
                duration-300
                hover:from-rose-100
                hover:to-pink-100
                hover:shadow-lg
                group">
                    <div className="flex
                    justify-between
                    items-start">
                        <div>
                            <div className="flex
                            items-center
                            gap-2
                            mb-2">
                                <div className="relative
                                w-12
                                h-12
                                transition-transform
                                duration-300
                                group-hover:scale-110">
                                    {/* rose loading circle */}
                                    <svg className="w-12
                                    h-12
                                    transform
                                    -rotate-90">
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
                                            className="transition-all duration-300 group-hover:stroke-rose-600"
                                        />
                                    </svg>
                                    <span className="absolute
                                    top-1/2
                                    left-1/2
                                    transform
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    text-sm
                                    text-rose-600
                                    transition-colors
                                    duration-300
                                    group-hover:text-rose-700">
                                        51%
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-semibold
                            text-rose-600
                            transition-colors
                            duration-300
                            group-hover:text-rose-700">
                                Fitness
                            </h3>
                            <p className="text-start text-slate-600">
                                6 Task
                            </p>
                        </div>
                        <button className="absolute
                            bottom-2
                            right-2
                            h-8
                            w-12
                            before:absolute
                            before:inset-0
                            before:h-14
                            before:w-16
                            before:rounded-xl
                            before:bg-rose-100"
                            >
                            <svg className="absolute
                            top-2/3
                            left-2/4
                            transform
                            -translate-x-1/2
                            -translate-y-1/2
                            w-4
                            h-4
                            text-rose-600
                            transition-transform
                            duration-300
                            group-hover:translate-x-1"
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
        
      </div>
    </div>
  );
}