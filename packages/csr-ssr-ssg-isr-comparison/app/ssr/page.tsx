import DataDisplay from '@/components/DataDisplay';
import RouteToHome from '@/components/RouteToHome';
import { fetchData } from '@/utils/fetchData';

// SSR (Server-Side Rendering)
// - This page fetches data on every request.
// - Since data is fetched before rendering, there is no need for an `isLoading` state.
export default async function SSRPage() {
    const data = await fetchData({ cache: 'no-store' });

    return (
        // display the data and a button that navigates to the home page
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">SSR</h1>
            <DataDisplay data={data} />
            <RouteToHome />
        </main>
    );
}
