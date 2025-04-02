// app/ssg/page.tsx
import DataDisplay from '@/components/DataDisplay';
import { fetchData } from '@/utils/fetchData';

// Static Site Generation (SSG) – This function fetches data at build time
export default async function SSGPage() {
    // Fetch data during build time
    const data = await fetchData();

    // Render the page with the fetched data
    return <DataDisplay data={data} />;
}
