import { Header, Navbar } from '@/components/home'

async function getData() {
  const REPRISE_MOVIE_ID = '502356'
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/502356/images?api_key=${process.env.TMDB_API_KEY}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <div className="flex flex-col w-full h-screen bg-slate-900">
      <Navbar />
      <Header data={data} />
    </div>
  )
}
