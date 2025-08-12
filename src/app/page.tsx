import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Home Page Loaded ✅</h1>
      <p className="mt-4 text-gray-700 text-lg">
        Welcome to your Next.js + Tailwind CSS app!
      </p>
    </div>
  );
}
