"use client";

import { Bell, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (vehicleNumber: string) => void }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
      onSearch(searchQuery);  // Pass the search query to parent component
    };
  return (
    <div className="flex justify-center items-center gap-x-0">
        <div className="w-[200px]">
            <Input 
                type="search"
                placeholder="Search vehicles..."
                className="h-8 w-[150px] lg:w-[200px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
        <Button variant="ghost" size="icon" className="px-5" onClick={handleSearch}>
            <Search className="w-4 h-4" />
        </Button>
    </div>
  )
}
