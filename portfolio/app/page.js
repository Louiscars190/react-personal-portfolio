"use client";

import dynamic from "next/dynamic";

const Laptop = dynamic(() => import("./components/3d-laptop"), { ssr: false });

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-slate-800 text-white pointer-events-none">
      <main className="flex flex-col gap-4 min-h-screen justify-center items-center">
        <div className="flex flex-row gap-72">
          <div className="flex flex-col justify-center items-center min-h text-7xl">
            Welcome!
            <div>
              This is my Portfolio
            </div>
          </div>
          <div className="text-2xl pointer-events-auto">
            <Laptop />          
          </div>
        </div>
      </main>
    </div>
  )
}