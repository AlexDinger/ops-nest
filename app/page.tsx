import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <main className="text-black flex flex-col justify-center items-center gap-11 w-150 font-sans">
        <h1 className="text-7xl font-bold">Ops Nest</h1>
        <p className="text-xl text-center">
          Streamline your business with a centralized operations platform built
          for service companies. Manage inventory, employees, scheduling,
          compliance, reporting, and more from a single dashboard.
        </p>
        <div className="flex flex-row justify-between items-center gap-5">
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 border border-green-800 rounded cursor-pointer">
            Sign In
          </button>
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 border border-green-800 rounded cursor-pointer">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}
