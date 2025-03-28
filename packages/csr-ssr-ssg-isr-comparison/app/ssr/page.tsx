import DataDisplay from "@/components/DataDisplay";
import { fetchData } from "@/utils/fetchData";

// SSR (Server-Side Rendering)
// - This page fetches data on every request.
// - Since data is fetched before rendering, there is no need for an `isLoading` state.
export default async function SSRPage() {
    const data = await fetchData({ cache: "no-store" });

    return <DataDisplay data={data} />;
}