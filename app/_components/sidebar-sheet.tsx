"use client"

import Image from "next/image"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import Link from "next/link";
import { Dialog, DialogDescription, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";

const SidebarSheet = () => {
    const handleLoginWithGoogleClick = () => signIn("google")
    const { data } = useSession()
    const handleSignOut = () => signOut()
    return (

        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="py-5 border-b border-solid flex items-center gap-3 justify-between">



                {data?.user ? (
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src={data?.user?.image ?? ""} />
                        </Avatar>
                        <div>
                            <p className="font-bold">{data.user.name}</p>
                            <p className="text-xs">{data.user.email}</p>
                        </div>
                    </div >
                ) : (
                    <>
                        <h2 className="font-bold">Ola, faca seu login!</h2>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="icon">
                                    <LogInIcon />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="w-[90%]">
                                <DialogHeader>
                                    <DialogTitle>
                                        Faca seu login
                                    </DialogTitle>
                                    <DialogDescription>
                                        Conecte-se usando sua conta do Google.
                                    </DialogDescription>
                                </DialogHeader>
                                <Button variant={"outline"} className="gap-1 font-bold" onClick={handleLoginWithGoogleClick}>
                                    <Image src="/google.svg" alt="fazer login com o google" width={18} height={18} />
                                    Google
                                </Button>
                            </DialogContent>
                        </Dialog>
                    </>
                )}
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
                <Button className="justify-start gap-2" variant="ghost" onClick={handleSignOut}>
                    <LogOutIcon size={18} />Sair da conta
                </Button>
            </div>


        </SheetContent>

    );
}

export default SidebarSheet;