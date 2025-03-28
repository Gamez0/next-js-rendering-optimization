export default function DataDisplay({ data }: { data: any }) {
    return (
        <div>
            <h3>{data.title}</h3>
            <p>ID: {data.id}</p>
        </div>
    );
}