import { Header, Navbar, Newsletter, Playing } from '@/components/home'
import { NowPlayingResponse } from '@/domains/types/tmdb'

async function getData(): Promise<NowPlayingResponse> {
  const url =
    'https://api.themoviedb.org/3/movie/now_playing?language=pt-br&page=1&region=BR'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    }
  }
  const res = await fetch(url, options)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const playingMoviesData = await getData()
  return (
    <div className=" flex-col inline-block w-full h-screen bg-slate-900">
      <Navbar />
      <Header />
      <Playing playingMovies={playingMoviesData.results} />
      <Newsletter />
    </div>
  )
}
