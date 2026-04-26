import { Pencil, Package, Lock, FileText, Info, Phone, LogOut } from "lucide-react";

export default function ProfileSection() {
  const menuItems = [
    { icon: Package, label: "My orders" },
    { icon: Lock, label: "Change password" },
    { icon: FileText, label: "Terms & conditions" },
    { icon: FileText, label: "Privacy policy" },
    { icon: Info, label: "About us" },
    { icon: Phone, label: "Contact us" },
    { icon: LogOut, label: "Logout" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center mb-2">
      <div className="w-full max-w-sm bg-white rounded-2xl  p-4">
        {/* Header */}
        <h2 className="text-lg font-semibold text-black mb-4">My profile</h2>

        {/* Profile Card */}
        <div className="flex flex-col items-center bg-gray-50 rounded-xl p-4 mb-4">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/100"
              alt="avatar"
              className="w-20 h-20 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-yellow-400 p-1 rounded-full shadow">
              <Pencil size={14} className="text-black" />
            </button>
          </div>
          <p className="mt-3 font-medium text-black">Victoria Franandise</p>
        </div>

        {/* Menu */}
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Icon size={16} className="text-yellow-500" />
                  </div>
                  <span className="text-sm text-black">{item.label}</span>
                </div>
                <span className="text-black">›</span>
              </div>
            );
          })}
        </div>

        {/* Bottom Button */}
       </div>
    </div>
  );
}
