import { User, Home, Mail } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
  SidebarFooter
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"

const items = [
  {
    title: "Home",
    url: "/jobs",
    icon: Home,
  },
  {
    title: "About",
    url: "../about",
    icon: User,
  },
  {
    title: "Contact",
    url: "../contact",
    icon: Mail,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between font-bold gap-2 p-2">
          <SidebarGroupLabel>Job Sphere</SidebarGroupLabel>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='flex'>
        <div className="flex items-center gap-2 p-2">
          <Image
            width={40}
            height={40}
            src="/img/pfp.jpg"
            alt="pfp"
            className="rounded-full"
          />
          <SidebarGroupLabel>gak bisa back end</SidebarGroupLabel>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}