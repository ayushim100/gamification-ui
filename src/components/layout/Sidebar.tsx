const menu = [
  { label: "Home", icon: "/SidebarIcons/Home.svg" },
  { label: "Insights", icon: "/SidebarIcons/Brain.svg" },
  { label: "Gamification", icon: "/SidebarIcons/Briefcase.svg" },
  { label: "Applications", icon: "/SidebarIcons/APplications.svg" },
  { label: "Payments", icon: "/SidebarIcons/Wallet.svg" },
];

const Sidebar = () => {
  const active = "Gamification";
  return (
    <aside className="w-[188px] bg-[#f3e7f5] p-[16px] flex flex-col justify-between">
      <div>
        <h1 className="text-xl text-text-primary font-bold mt-[12px] mb-[24px]">RefHub</h1>

        <nav className="space-y-2">
          {menu.map((item) => {
            const isActive = item.label === active;

            return (
              <div
                key={item.label}
                className={`flex items-center gap-[8px] p-[8px] rounded-xl cursor-pointer transition
                ${isActive
                    ? "bg-[#FFFDFF] text-text-primary"
                    : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.label}
                />

                {/* Label */}
                <span className={`text-[14px] font-medium 
                  ${isActive ? "text-text-primary": "text-text-secondary"}`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </nav>
      </div>

      <div
        className={`flex items-center gap-[8px] p-[8px] rounded-xl cursor-pointer transition
                 "hover:bg-gray-100"`}
      >
        {/* Icon */}
        <img
          src="/SidebarIcons/Profile.svg"
          alt="Settings"
          className="filter-none"
        />

        {/* Label */}
        <span className="text-[14px] font-medium text-text-secondary">
          Settings
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;