import { Menu } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import Link from 'next/link'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const ItemsMenuMobile = () => {
    return (
        <Popover aria-label="Menu">
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/" className='block'>Inicio</Link>
                <hr />
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Institucional</AccordionTrigger>
                        <AccordionContent>
                            <Link href="/institucional/mision" className='block mb-2'>Mision</Link>
                            <hr />
                            <Link href="/institucional/autoridades" className='block mb-2'>Autoridades</Link>
                            <hr />
                            <Link href="/institucional/organigrama" className='block mb-2'>Organigrama</Link>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <hr />
                <Link href="/noticias" className='block'>Noticias</Link>
                <hr />
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Tramites</AccordionTrigger>
                        <AccordionContent>
                            <Link href="/tramites/requisitos" className='block mb-2'>Requisitos para empadronarse</Link>
                            <hr />
                            <Link href="/tramites/transferencia" className='block mb-2'>Transferencia de vivienda</Link>
                            <hr />
                            <Link href="https://guiadetramites.tucuman.gob.ar/tematica/950/vivienda.html" className='block mb-2'>Guia de tramites</Link>
                            <hr />
                            <Link href="https://ipvtuc.gob.ar/siempre/public" className='block mb-2'>Inscripcion</Link>
                            <hr />
                            <Link href="http://119.8.76.209:8080/Boletas/com.boleta.homeipv" className='block mb-2'>Boleta</Link>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <hr />
                <Link href="/contacto" className='block'>Contacto</Link>
            </PopoverContent>
        </Popover>
    )
}
