'use client'
import { useState } from 'react';
import Card from '../components/card';
import Search from '../components/search';

export default function MainMenuJobs({ jobs }) {
    const [filtered, setFiltered] = useState(jobs)

    const handleSearch = (query) => {
        const result = jobs.filter(job =>
            job.title.toLowerCase().includes(query.toLowerCase())
        )
        console.log('berhasil')
        setFiltered(result)
    }

    return (
        <div className='flex flex-col justify-center items-center w-full min-w-screen'>
            <section className='my-10'>
                <Search onSearch={handleSearch} />
            </section>
            <section className='grid grid-cols-3 gap-x-[7vw] gap-y-12'>
                {filtered.map((job) => {
                    return <Card key={job.id} jobs={job} />
                })}
            </section>
        </div>
    );
}