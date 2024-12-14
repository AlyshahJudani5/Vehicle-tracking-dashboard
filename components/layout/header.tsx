"use client";

import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";

export default function Header({ onSearch }: { onSearch: (vehicleNumber: string) => void }) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">DHA Vehicle Tracker</h1>
            </div>
            <div className="ml-auto flex items-center gap-2">
                <SearchBar onSearch={onSearch} />
                <Button variant="ghost" size="icon">
                    <Bell className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                </Button>
            </div>
        </div>
    </header>
  )
}
