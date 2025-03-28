// app/isr/page.tsx
import DataDisplay from '@/components/DataDisplay';

// Incremental Static Regeneration (ISR) – This function fetches data at build time and updates the cache every 60 seconds
export default async function ISRPage() {
    // Fetch data during build time, with revalidation every 60 seconds
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", { cache: "force-cache", next: { revalidate: 60 } });
    const data = await res.json();

    // Render the page with the fetched data
    return <DataDisplay data={data} />;
}