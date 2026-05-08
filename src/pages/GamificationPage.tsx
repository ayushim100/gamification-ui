import HeroSection from "../features/gamification/components/HeroSection";
import FeatureCard from "../features/gamification/components/FeatureCard";

const GamificationPage = () => {
  return (
    <div className="relative space-y-0">
      <div className="flex justify-center flex-col">
        <div className="relative z-0">
          <HeroSection />
        </div>
        <div className="relative z-20 -mt-12 flex justify-center px-2">
          <div className="grid grid-cols-3 gap-6">
            <FeatureCard
              icon="/Gift.svg"
              title="Reward Your Ambassadors"
              description="Boost campaign performance by setting up rewards for ambassadors"
            />
            <FeatureCard
              icon="/Crown.svg"
              title="Set Milestones"
              description="Set up custom goals for sales, posts, or time-based achievements"
            />
            <FeatureCard
              icon="/Ticket Sale.svg"
              title="Customise Incentives"
              description="Create custom incentives like flat fees, free products, or special commissions."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationPage;