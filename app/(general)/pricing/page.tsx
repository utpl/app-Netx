import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO pricing',
 description: 'SEO Pricing',
 keywords: ['Santiago', 'ofertas', 'todos']

};

export default function PricingPage(){

    return(
        <>
        <span className="text-4xl"> bienvenido a los precios </span>
        </>
    )
}