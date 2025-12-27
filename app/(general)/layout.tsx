import { Navbar } from "@/components";





export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
<>
    <Navbar />
    <div className="flex flex-col p-20 items-center">
      <h1>Hola mundo</h1>
      {children}
    </div>

    </>
  );
}