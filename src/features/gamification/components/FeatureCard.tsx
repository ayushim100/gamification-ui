import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  icon: string; // path like "/icons/gift.svg"
}

export default function FeatureCard({ title, description, icon }: Props) {
  return (
    <Card className="relative overflow-hidden rounded-[8px] border border-[#FEE7FE] shadow-sm h-[200px] max-w-[292px] bg-[#FFFFFF]">
      <CardContent className="flex flex-col items-center text-center px-2">
        
        {/* Icon Wrapper */}
        <div className="mb-3 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#FBCFFB]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
            <img
              src={icon}
              alt="icon"
              className="h-7 w-7 object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-semibold text-gray-800">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-[8px] max-w-[520px] text-[14px] leading-relaxed text-gray-500">
          {description}
        </p>

      </CardContent>
    </Card>
  );
}