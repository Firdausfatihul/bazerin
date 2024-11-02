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
    bg-white 
    p-4
    mx-4">
      <div className=" 
      max-w-md 
      rounded-lg 
      bg-white 
      shadow-md"
      >
        {/* top right icon */}
        <div className="relative">
            <button className="relative 
            top-6
            right-4
            h-10
            w-10
            rounded-md
            bg-teal-600/20
            p-2
            backdrop-blur-3xl"
            aria-label="Menu"
            >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-white" 
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
        bg-[#52c6c6] 
        p-6 
        text-white 
        shadow-md"
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
            bg-white 
            px-4 
            py-2 
            text-teal-500 
            hover:bg-gray-100"
            >
              Check now
            </button>
            <button className="rounded-md 
            bg-teal-600 
            px-4 
            py-2 
            text-white 
            hover:bg-teal-700"
            >
              Remind me later
            </button>
          </div>
        </div>

        <div className="mb-6 
        rounded-lg 
        bg-gray-50 
        p-4 
        shadow-inner">
          <p className="text-center 
          text-gray-700"
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
            bg-blue-500 
            px-4 
            py-2 
            text-white 
            hover:bg-blue-600"
            >
              <span>👍</span>
              <span>Yes, I did!</span>
            </button>
            <button className="flex 
            items-center 
            space-x-2 
            rounded-md 
            bg-gray-300 
            px-4 
            py-2 
            text-gray-700 
            hover:bg-gray-400"
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
                font-bold">
                    My Courses list
                </h2>
                <div className="flex 
                gap-2">
                    <span className="text-gray-500">
                        Weakness Subject only
                    </span>
                    <div className="w-12
                    h-6
                    bg-gray-200
                    rounded-full
                    relative"
                    >
                        <div className="absolute
                        right-1
                        top-1
                        w-4
                        h-4
                        bg-white
                        rounded-full">
                        </div>
                    </div>
                </div>
            </div>


            <p
            className="mb-4
            text-gray-500">
                Ayo persiapkan dirimu untuk belajar!
            </p>

            <div className="grid
            grid-cols-2
            gap-4">
                {/* first task */}
                <div className="bg-teal-50
                p-4
                rounded-xl
                relative
                overflow-hidden">
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
                                h-12">
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
                                        stroke="#0D9488"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeDasharray="125.6"
                                        strokeDashoffset="23.864"
                                        />
                                    </svg>
                                    {/* automatically center */}
                                    <span className="absolute
                                    top-1/2
                                    left-1/2
                                    transform
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    text-sm
                                    text-teal-600">
                                        91%
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-semibold
                            text-teal-600">
                                Medication
                            </h3>
                            <p className="text-sm
                            text-gray-600">
                                6 Task
                            </p>
                        </div>
                        {/* width as parent */}
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
                            before:bg-teal-100"
                            >
                            <svg className="absolute
                            top-2/3
                            left-2/4
                            transform
                            -translate-x-1/2
                            -translate-y-1/2
                            w-4
                            h-4
                            text-teal-600"
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

                <div className="bg-blue-50
                p-4
                rounded-xl
                relative
                overflow-hidden">
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
                                h-12">
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
                                            stroke="#3B82F6"
                                            strokeWidth="4"
                                            fill="none"
                                            strokeDasharray="125.6"
                                            strokeDashoffset="23.864"
                                        />
                                    </svg>
                                    <span className="absolute
                                    top-1/2
                                    left-1/2
                                    transform
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    text-sm
                                    text-blue-600">
                                        61%
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-semibold
                            text-blue-600">
                                Fitness
                            </h3>
                            <p className="text-start text-gray-600">
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
                            before:bg-blue-100"
                            >
                            <svg className="absolute
                            top-2/3
                            left-2/4
                            transform
                            -translate-x-1/2
                            -translate-y-1/2
                            w-4
                            h-4
                            text-blue-600"
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

                <div className="bg-orange-50
                p-4
                rounded-xl
                relative
                overflow-hidden">
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
                                h-12">
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
                                            stroke="#F97316"
                                            strokeWidth="4"
                                            fill="none"
                                            strokeDasharray="125.6"
                                            strokeDashoffset="23.864"
                                        />
                                    </svg>
                                    <span className="absolute
                                    top-1/2
                                    left-1/2
                                    transform
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    text-sm
                                    text-orange-600">
                                        21%
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-semibold
                            text-orange-600">
                                Fitness
                            </h3>
                            <p className="text-start text-gray-600">
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
                            text-orange-600"
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

                <div className="bg-red-50
                p-4
                rounded-xl
                relative
                overflow-hidden">
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
                                h-12">
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
                                            stroke="#EF4444"
                                            strokeWidth="4"
                                            fill="none"
                                            strokeDasharray="125.6"
                                            strokeDashoffset="23.864"
                                        />
                                    </svg>
                                    <span className="absolute
                                    top-1/2
                                    left-1/2
                                    transform
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    text-sm
                                    text-red-600">
                                        51%
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-semibold
                            text-red-600">
                                Fitness
                            </h3>
                            <p className="text-start text-gray-600">
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
                            before:bg-red-100"
                            >
                            <svg className="absolute
                            top-2/3
                            left-2/4
                            transform
                            -translate-x-1/2
                            -translate-y-1/2
                            w-4
                            h-4
                            text-red-600"
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