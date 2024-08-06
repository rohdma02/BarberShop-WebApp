import { Barbershop } from "@prisma/client"
import Image from "next/image"
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { StarIcon } from "lucide-react";
import { Badge } from "./badge";

interface BarbershopItemProps {
    barbershop: Barbershop
}


const BarbershopItem = ({ barbershop }) => {
    return (
        <Card className="min-w-[167px] rounded-2xl">
            <CardContent className="p-0 px-1 pt-1">

                {/* Imagem */}
                <div className="relative h-[159px] w-full">
                    <Image alt={barbershop.name} fill className="object-cover rounded-2xl" src={barbershop.imageUrl} />

                    <Badge className="absolute left-2 top-2 space-x-1" variant="secondary">
                        <StarIcon size={12} className="fill-primary text-primary" />
                        <p className="text-xs font-semibold">5,0</p>
                    </Badge>
                </div>


                {/* TEXTO */}
                <div className="py-3 px-1">
                    <h3 className="truncate font-semibold">{barbershop.name}</h3>
                    <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>
                    <Button variant="secondary" className="w-full mt-3">Reservar</Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default BarbershopItem;