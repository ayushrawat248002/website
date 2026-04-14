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

export function MenuDrawer() {
  const router = useRouter()
  return (
    <Drawer direction="right">

      {/* Menu Button */}
      <DrawerTrigger asChild>
        <Button className="scale-140 mr-2 mt-1" variant="outline">Menu</Button>
      </DrawerTrigger>

      {/* Drawer */}
      <DrawerContent className="h-full w-[300px] right-0 left-auto rounded-none bg-white backdrop-blur-none">

        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold text-black">
            My Account
          </DrawerTitle>
        </DrawerHeader>

        {/* Menu Items */}
        <div className="flex flex-col gap-5 px-5 py-6 text-black">

          <button className="text-left text-lg hover:text-gray-500 transition">
            🛍️ Orders
          </button>

          <button className="text-left text-lg hover:text-gray-500 transition">
            ❤️ Wishlist
          </button>

          <button className="text-left text-lg hover:text-gray-500 transition"  onClick={()=>router.push('/cart')}>
            🛒 Cart
          </button>

          <button className="text-left text-lg hover:text-gray-500 transition">
            👤 Profile
          </button>

          <button className="text-left text-lg hover:text-gray-500 transition">
            ⚙️ Settings
          </button>

        </div>

        {/* Footer */}
        <div className="mt-auto px-5 pb-6">
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Logout
            </Button>
          </DrawerClose>
        </div>

      </DrawerContent>

    </Drawer>
  )
}