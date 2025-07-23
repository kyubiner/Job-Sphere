export default async function getJobs() {
    const res = await fetch('https://job-sphere-ten.vercel.app/data/dummy.json')
    return res.json()
}