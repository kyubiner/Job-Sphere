export default async function getJobs() {
    const res = await fetch('http://127.0.0.1:3000/data/dummy.json')
    return res.json()
}