import { Pencil, Package, Lock, FileText, Info, Phone, LogOut,User } from "lucide-react";
import Link from "next/link";

export default function ProfileSection() {

 

  const menuItems = [
    { icon: Package, label: "My orders" , link : '/statuspage' },
    { icon: Lock, label: "Change password",link : '#' },
    { icon: FileText, label: "Terms & conditions" , link : '#'},
    { icon: FileText, label: "Privacy policy", link : '#' },
    { icon: Info, label: "About us", link : '#' },
    { icon: Phone, label: "Contact us" , link : '#' },
    { icon: LogOut, label: "Logout" , link : '#' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center mb-2">
      <div className="w-full max-w-sm bg-white rounded-2xl  p-4">
        {/* Header */}
        <h2 className="text-lg font-semibold text-black mb-4">My profile</h2>

        {/* Profile Card */}
        <div className="flex flex-col items-center bg-gray-50 rounded-full  p-4 mb-4">
          <div className="relative">
           <User size={34} fill="black"/>
          
          </div>
          <p className="mt-3 font-medium text-black">Victoria Franandise</p>
        </div>

        {/* Menu */}
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.link} className="block">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <Icon size={16} className="text-yellow-500" />
                    </div>
                    <span className="text-sm text-black">{item.label}</span>
                  </div>
                  <span className="text-black">›</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Button */}
       </div>
    </div>
  );
}
