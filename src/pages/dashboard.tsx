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
    bg-gray-100 p-4">
      <div className="w-full 
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
        rounded-xl 
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
          <h2 className="mb-4 
          text-lg 
          font-bold">Today's Tasks</h2>
          <ul className="space-y-4">
            <li className="flex 
            items-center 
            justify-between r
            ounded-lg 
            bg-blue-100 
            p-4">
              <div>
                <p className="font-medium">Morning Walk</p>
                <p className="text-sm 
                text-gray-600"
                >7:00 am - 7:30 am</p>
              </div>
              <input type="checkbox" className="h-5 
              w-5" 
              />
            </li>
            <li className="flex 
            items-center 
            justify-between 
            rounded-lg 
            bg-yellow-100 
            p-4">
              <div>
                <p className="font-medium">Call grandchildren</p>
                <p className="text-sm 
                text-gray-600">11:00 am</p>
              </div>
              <input type="checkbox" className="h-5 
              w-5" checked readOnly 
              />
            </li>
            <li className="flex 
            items-center 
            justify-between 
            rounded-lg 
            bg-teal-100 
            p-4">
              <div>
                <p className="font-medium">Check Blood Sugar Level</p>
                <p className="text-sm 
                text-gray-600">2:00 pm</p>
              </div>
              <input type="checkbox" className="h-5 
              w-5" 
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}