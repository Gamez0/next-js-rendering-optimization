// app/isr/page.tsx
import DataDisplay from '@/components/DataDisplay';
import RouteToHome from '@/components/RouteToHome';

// Incremental Static Regeneration (ISR) – This function fetches data at build time and updates the cache every 60 seconds
export default async function ISRPage() {
    // Fetch data during build time, with revalidation every 60 seconds
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        cache: 'force-cache',
        next: { revalidate: 60 },
    });
    const data = await res.json();

    // Render the page with the fetched data
    return (
        // display the data and a button that navigates to the home page
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">ISR</h1>
            <DataDisplay data={data} />
            <RouteToHome />
        </main>
    );
}
