import getJobs from '@/app/components/getjobs'
import { notFound } from 'next/navigation'

export default async function jobsDetail({ params }) {
    const jobs = await getJobs()
    const jobId = await Number(params?.id)
    const job = jobs.find((job) => job.id === jobId)

    if (!jobId) return notFound()

    return (
        <div className='items-center my-[10vh] mx-[10vw]'>
            <section className='border rounded-2xl shadow-2xl'>
                <form className="pl-2 my-3 text-md">
                    <p className="font-bold text-center text-lg mb-2">{job.title}</p>
                    <br />
                    <div className='m-1'>
                        <label htmlFor='name'>Nama :</label>
                        <input className='border-b-2 my-1 ml-2 rounded-xs w-[98%]' id='name' type='text' placeholder='Name...' />
                        <br />
                        <label htmlFor='TTD'>TTD :</label>
                        <input className='border-b-2 my-1 ml-2 rounded-xs w-[98%]' id='TTD' type='text' placeholder='Tempat, Tanggal lahir' />
                        <br />
                        <label htmlFor='anddres'>Alamat :</label>
                        <input className='border-b-2 my-1 ml-2 rounded-xs w-[98%]'  id='andderes' type='text' placeholder='Alamat...' />
                        <br />
                        <label htmlFor='phone'>Telepon(HP) :</label>
                        <input className='border-b-2 my-1 ml-2 rounded-xs w-[98%]' id='phone' type='number' placeholder='No. Handphone...' />
                        <br />
                        <label htmlFor='email'>Email :</label>
                        <input className='border-b-2 my-1 ml-2 rounded-xs w-[98%]' id='email' type='email' placeholder='Email...' />
                    </div>
                    <div className='content-right items-end my-2 ml-1'>
                        <button className="inline-block shadow-2xs border bg-sky-500 hover:bg-blue-500 hover:scale-105 transform transition px-2 rounded-lg duration-300 mt-1">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}