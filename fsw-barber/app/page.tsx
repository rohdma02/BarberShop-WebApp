"use client";

import { Button } from "./_components/ui/button";
import Header from "./_components/ui/header";
import { Input } from "./_components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";


const Home = () => {
  return (
    <div className="p-5" >
      {/* header */}
      <Header />
      <h2 className="text-xl font-bold">Ola, Arthur!</h2>
      <p>Segunda-feira, 05 de agosto.</p>

      <div className="flex items-center gap-2 mt-6">
        <Input placeholder="Faca sua busca..." />
        <Button>
          <SearchIcon />
        </Button>
      </div>
      <div className="relative w-full h-[150px]">
        <Image alt="Agende nos melhores FSW Barber" src="/banner-01.png" fill className="rounded-xl object-cover" />
      </div>
    </div>
  )
}

export default Home;
