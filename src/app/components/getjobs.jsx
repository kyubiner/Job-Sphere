export default async function getJobs() {
    const res = await fetch('/data/dummy.json')
    return res.json()
}