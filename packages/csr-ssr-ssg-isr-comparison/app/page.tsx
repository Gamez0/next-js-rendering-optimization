// page has 4 buttons it self route to /csr, /ssr, /ssg, /isr
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">CSR vs SSR vs SSG vs ISR</h1>
            <div className="flex gap-4 mt-4">
                <a href="/csr" className="btn">
                    CSR
                </a>
                <a href="/ssr" className="btn">
                    SSR
                </a>
                <a href="/ssg" className="btn">
                    SSG
                </a>
                <a href="/isr" className="btn">
                    ISR
                </a>
            </div>
        </main>
    );
}
