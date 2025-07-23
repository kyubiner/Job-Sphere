import Link from 'next/link';

export default function pages() {
    return (
        <div className="items-center text-center my-[40vh]">
            <p className="font-bold text-4xl border-b-2 border-transparent hover:border-black transition duration-1000 inline hover:shadow-xs">Jobs Sphere</p>
            <section className="mt-1">
                <p>Jobs info for developer💻</p>
            </section>
            <section className="mt-5">
                <Link href="./jobs" className="inline-block shadow-2xs border-2 bg-sky-500 hover:bg-blue-500 hover:scale-105 transform transition px-2 rounded-lg duration-300">
                Get started
                </Link>
            </section>
        </div>
    );
}