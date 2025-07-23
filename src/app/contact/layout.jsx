import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }) {
    return (
        <SidebarProvider>
            <main className="fixed inset-0 flex">
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    <AppSidebar />
                    <SidebarTrigger className="absolute scale-150 m-1" />
                    {children}
                </div>
            </main>
        </SidebarProvider>
    );
}