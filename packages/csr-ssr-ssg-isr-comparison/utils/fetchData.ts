// utils/fetchData.ts
export async function fetchData(init?: RequestInit | undefined) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', init);
    return res.json();
}
