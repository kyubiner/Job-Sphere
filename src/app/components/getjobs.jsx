export default async function getJobs() {
    const res = await fetch('/data/dummy')
    return res.json()
}