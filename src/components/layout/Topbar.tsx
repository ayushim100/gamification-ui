import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Topbar() {
  return (
    <header className="h-[64px] bg-white flex items-center justify-end px-[146px] py-[16px]">
      <div className="flex items-center gap-4">
        <div className="relative w-fit">
          {/* Bell Icon */}
          <img
            src="/System.svg"
            alt="Notifications"
            className="w-[25px] h-[25px]"
          />

          {/* Notification Badge */}
          <div
            className="
              absolute
              -top-1
              -right-1
              min-w-[16px]
              h-[16px]
              px-1
              rounded-full
              bg-[#FF2D00]
              flex
              items-center
              justify-center
              text-white
              text-[12px]
              font-semibold
            "
          >
            5
          </div>
        </div>
        <Avatar>
          <AvatarImage src="/Notification.png" alt="Notification" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}