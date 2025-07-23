export default async function getJobs() {
    const res = await fetch('http://localhost:3000/data/dummy')
    return res.json()
}