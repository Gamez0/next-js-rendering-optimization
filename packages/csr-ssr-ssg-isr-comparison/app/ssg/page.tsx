// app/ssg/page.tsx
import DataDisplay from '@/components/DataDisplay';
import RouteToHome from '@/components/RouteToHome';
import { fetchData } from '@/utils/fetchData';

// Static Site Generation (SSG) – This function fetches data at build time
export default async function SSGPage() {
    // Fetch data during build time
    const data = await fetchData();

    // Render the page with the fetched data
    return (
        // display the data and a button that navigates to the home page
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">SSG</h1>
            <DataDisplay data={data} />
            <RouteToHome />
        </main>
    );
}
