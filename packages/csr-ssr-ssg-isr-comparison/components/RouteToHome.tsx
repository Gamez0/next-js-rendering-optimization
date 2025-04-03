// Button that navigates to the home page
import Link from 'next/link';

export default function RouteToHome() {
    return (
        <div className="flex justify-center mt-4 border p-2 rounded-xs">
            <Link href="/">Go to Home</Link>
        </div>
    );
}
