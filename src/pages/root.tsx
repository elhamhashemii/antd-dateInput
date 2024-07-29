export default function NotFoundPage() {
    return <div className="w-screen h-screen flex gap-y-12 items-center justify-center bg-black">
        <div>
            <div className="text-2xl font-bold border-b py-2">
                React + tailwind + vite Boilerplate
            </div>
            <ul className="list-disc my-6">
                It supports :
                <li className="mx-6 mt-4">tailwind</li>
                <li className="mx-6">typescript</li>
                <li className="mx-6">react-router-dom</li>
            </ul>
        </div>

    </div>
}