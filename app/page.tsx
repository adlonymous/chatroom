import React from "react";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="max-w-3xl mx-auto md:py-10 h-screen">
      <div className="h-full border rounded-md">
        <div className="p-5 border-b flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Aadil&apos;s Chatroom</h1>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 bg-blue-500 rounded-full animate-pulse"></div>
              <h1 className="text-sm text-gray-400">2 online</h1>
            </div>
          </div>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}
