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
    p-4">
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
          >Hello Dorthy</h1>
          <p className="text-lg">
            It's time to check your blood sugar level.
          </p>
          <p className="text-sm">Yesterday's reading: 130 mg/dl</p>
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
            Did you go for your morning walk today?
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

        <div>
            <div>
                <h2 className="">
                    My Task
                </h2>
                <div>
                    <span className="text-gray-500">
                        Show Regularity
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

            <p>Dorthy, you must</p>

            <div className="grid
            grid-cols-2
            gap-4">
                {/* first task */}
                <div className="bg-teal-50">
                    <div className="flex">
                        <div>
                            <div className="flex">
                                <div className="relative">
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
                                    <span>
                                        91%
                                    </span>
                                </div>
                                <h3>
                                    Medication
                                </h3>
                                <p>6 Task</p>
                            </div>
                            <button>
                                <svg className="w-4
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
                </div>

                {/* second task */}

                <div className="bg-teal-50">
                    <div className="flex">
                        <div>
                            <div className="flex">
                                <div className="relative">
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
                                    <span>
                                        91%
                                    </span>
                                </div>
                                <h3>
                                    Medication
                                </h3>
                                <p>6 Task</p>
                            </div>
                            <button>
                                <svg className="w-4
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
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}