
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['Santiago', 'About', 'Infiormacion']

};
export default function AboutPage(){

    return(
        <main className="flex flex-col items-center p-24">
    
        <span className="text-6xl">Abour page </span>
        </main>
    )
}

