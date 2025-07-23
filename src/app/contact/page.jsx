export default function Contact() {
    return (
        <div className='items-center my-[10vh] mx-[10vw]'>
            <section className='border rounded-2xl shadow-2xl'>
                <form className="pl-2 my-3 text-md">
                    <p className="font-bold text-center text-3xl mb-2">Contact</p>
                    <br />
                    <section className='m-1'>
                        <label htmlFor='name'>Nama :</label>
                        <input className='border-b-2 my-1 ml-2 rounded-xs w-[98%]' id='name' type='text' placeholder='Name...' />
                        <br />
                        <label htmlFor='email'>Email :</label>
                        <input className='border-b-2 my-1 ml-2 rounded-xs w-[98%]' id='email' type='email' placeholder='Email...' />
                        <br />
                        <label htmlFor='pesan'>Pesan :</label>
                        <textarea className='border-2 my-1 ml-2 rounded-xs w-[98%]' id='pesan' placeholder='Pesan...'  />
                    </section>
                    <div className='content-right items-end my-2 ml-1'>
                        <button className="inline-block shadow-2xs border bg-sky-500 hover:bg-blue-500 hover:scale-105 transform transition px-2 rounded-lg duration-300 mt-1">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}