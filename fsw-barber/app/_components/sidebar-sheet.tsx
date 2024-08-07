import Image from "next/image"
import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import {  SheetClose, SheetContent, SheetHeader, SheetTitle} from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const SidebarSheet = () => {
    return (

        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="py-5 border-b border-solid flex items-center gap-3">
                <Avatar>
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKxfjTf49GAtu0PpFXK7mKBgqyJ5MfJCgQw&s" />
                </Avatar>
                <div>
                    <p className="font-bold">Felipe Rocha</p>
                    <p className="text-xs">felipe@fullstackclub.io</p>
                </div>

            </div>


            <div className="flex flex-col gap-2 border-b border-solid py-5">
                <SheetClose asChild>
                    <Button className="justify-start gap-2" variant="ghost" asChild>
                        <Link href="/">
                            <HomeIcon size={18} />
                            Inicio
                        </Link>
                    </Button>
                </SheetClose>
                <Button className="justify-start gap-2" variant="ghost"><CalendarIcon />Agendamentos</Button>
            </div>


            <div className="flex flex-col gap-2 py-5 border-b border-solid">
                {quickSearchOptions.map(option => (
                    <Button className="justify-start gap-2" variant="ghost">
                        <Image alt={option.title} src={option.imageUrl} height={18} width={18} />{option.title}
                    </Button>
                ))}

            </div>

            <div className="flex flex-col gap-2 py-5 border-b border-solid">
                <Button className="justify-start gap-2" variant="ghost"><LogOutIcon size={18} />Sair da conta</Button>
            </div>


        </SheetContent>

    );
}

export default SidebarSheet;