import MenuButton from "~/component/MenuButton/MenuButton";
import WelcomeCard from "~/component/WelcomeCard/WelcomeCard";
import TestimonyCard from "~/component/TestimonyCard/TestimonyCard";
import AvailableCard from "~/component/AvailableCard/AvailableCard";
import StatisticsCard from "~/component/StatisticsCard/StatisticsCard";

export default function Dashboard() {
  return (
    <div className="flex 
      flex-col 
      items-center 
      bg-gradient-to-br 
      from-slate-50 
      to-slate-100
      p-4
      w-full
      mx-4">
      <div className=" 
        w-full
        max-w-md 
        rounded-lg 
        bg-white/80
        shadow-lg"
      >
        {/* top left icon */}
        <MenuButton />
        <WelcomeCard />
        <TestimonyCard />
        <AvailableCard />
        <StatisticsCard />
      </div>
    </div>
  );
}