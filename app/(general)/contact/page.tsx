import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Contacots',
 description: 'SEO contactos',
 keywords: ['Santiago', 'Numero de telefomno', 'Email']

};


export default function ContactPage(){
return(
    <>
    <span className="text-4xl"> Bienvenido a la opagina de contactos</span>
    </>
)
}