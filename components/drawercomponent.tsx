'use client'

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useRouter } from "next/navigation"

// Premium Icons
import {
  Menu,
  ShoppingBag,
  Heart,
  ShoppingCart,
  User,
  Settings
} from "lucide-react"

export function MenuDrawer() {
  const router = useRouter()

  return (
    <Drawer direction="left">

      {/* Trigger */}
      <DrawerTrigger asChild>
        <Menu className="text-neutral-900 cursor-pointer" size={22} />
      </DrawerTrigger>

      {/* Drawer */}
      <DrawerContent className="h-full w-[300px] left-0 right-auto rounded-none bg-white border-r border-neutral-200">

        <DrawerHeader>
          <DrawerTitle className="text-lg font-semibold tracking-tight text-neutral-900">
            Account
          </DrawerTitle>
        </DrawerHeader>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 px-6 py-6">
           <style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');

  .font-rock {
    font-family: 'Rock Salt', cursive;
  }
`}</style>
          <MenuItem icon={<ShoppingBag size={18} />} label="Orders" onClick={undefined} />

          <MenuItem icon={<Heart size={18} />} label="Wishlist" onClick={undefined} />

          <MenuItem
            icon={<ShoppingCart size={18} />}
            label="Cart"
            onClick={() => router.push('/cart')}
          />

          <MenuItem icon={<User size={18} />} label="Profile" onClick={undefined} />

          <MenuItem icon={<Settings size={18} />} label="Settings" onClick={undefined} />

        </div>

        {/* Footer */}
        <div className="mt-auto px-6 pb-6">
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="w-full border-neutral-300 text-neutral-900 hover:bg-neutral-100"
            >
              Logout
            </Button>
          </DrawerClose>
        </div>

      </DrawerContent>
    </Drawer>
  )
}

// Reusable Menu Item
function MenuItem({ icon , label, onClick }:{icon : any,label :any, onClick: any}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center shadow-xs gap-4 text-neutral-800 hover:text-black transition group"
    >
      <span className="opacity-70 group-hover:opacity-100 transition">
        {icon}
      </span>
      <span className=" text-xl  tracking-tight">{label}</span>
    </button>
  )
}