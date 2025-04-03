// app/csr/page.tsx
'use client';
import { useEffect, useState } from 'react';
import DataDisplay from '@/components/DataDisplay';
import { fetchData } from '@/utils/fetchData';
import RouteToHome from '@/components/RouteToHome';

export default function CSRPage() {
    // Initialize the state for holding fetched data
    const [data, setData] = useState(null);

    // Fetch data when the component mounts (client-side rendering)
    useEffect(() => {
        fetchData().then(setData); // Fetch the data and update state
    }, []);

    // Display loading text until the data is fetched
    if (!data) return <p>Loading...</p>;

    // Once the data is available, render the DataDisplay component with the fetched data
    return (
        // display the data and a button that navigates to the home page
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">CSR</h1>
            <DataDisplay data={data} />
            <RouteToHome />
        </main>
    );
}
