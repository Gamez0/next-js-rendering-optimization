import Link from 'next/link';

// page has 4 buttons it self route to /csr, /ssr, /ssg, /isr
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">CSR vs SSR vs SSG vs ISR</h1>
            <div className="flex gap-4 mt-4">
                <div className="flex justify-center mt-4 border p-2 rounded-xs cursor-pointer">
                    <Link href="/csr">CSR</Link>
                </div>
                <div className="flex justify-center mt-4 border p-2 rounded-xs cursor-pointer">
                    <Link href="/ssr">SSR</Link>
                </div>
                <div className="flex justify-center mt-4 border p-2 rounded-xs cursor-pointer">
                    <Link href="/ssg">SSG</Link>
                </div>
                <div className="flex justify-center mt-4 border p-2 rounded-xs cursor-pointer">
                    <Link href="/isr">ISR</Link>
                </div>
            </div>
        </main>
    );
}
