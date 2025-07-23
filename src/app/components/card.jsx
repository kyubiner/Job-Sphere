import Link from 'next/link';
import Image from 'next/image';

export default function Card({ jobs }) {
    return (
        <div className="border w-64 rounded-xl text-xs shadow-md transform transition-transform duration-300 scale-90 hover:scale-95">
            <Link
                href={`./jobs/${jobs.id}`}>
                <Image
                src={jobs.img} 
                alt={jobs.title}
                className="rounded-t-xl" 
                width={400}
                height={300}
                />
                <div className="pl-2 my-2">
                    <p className="font-bold text-sm mb-2">{jobs.title}</p>
                    <p>{jobs.company} - {jobs.location}</p>
                    <p>{jobs.description}</p>
                </div>
            </Link>
        </div>
    );
}