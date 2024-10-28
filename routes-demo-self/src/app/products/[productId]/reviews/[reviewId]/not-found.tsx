import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-[100vh] w-96 mx-auto">
      <div className="self-start">
        <h2 className="text-3xl font-bold">Review Not Found</h2>
        <p className="text-lg">Could not find requested resource</p>
      </div>
      <div className="self-start">
        <Link className="text-lg font-bold p-4 bg-violet-200 rounded" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
