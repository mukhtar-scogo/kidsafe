import type React from "react";
import { AppSidebar } from "@/components/app-sidebar";

export default function ChildDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
