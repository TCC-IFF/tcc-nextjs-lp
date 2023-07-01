import {
  Header,
  Navbar,
  Newsletter,
  Playing,
  Upcoming
} from '@/components/home'
import { TmdbResponse } from '@/domains/types/tmdb'

export const dynamic = 'force-dynamic'

async function getPlayingMoviesData(): Promise<TmdbResponse> {
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

async function getUpcomingMoviesData(): Promise<TmdbResponse> {
  const url =
    'https://api.themoviedb.org/3/movie/upcoming?language=pt-br&page=1&region=BR'
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

async function getPopularMoviesData(): Promise<TmdbResponse> {
  const url =
    'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=12'
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
  const playingMoviesData = await getPlayingMoviesData()
  const upcomingMoviesData = await getUpcomingMoviesData()
  const popularMoviesData = await getPopularMoviesData()

  console.log(popularMoviesData)
  return (
    <div className=" flex-col inline-block w-full h-screen bg-slate-900">
      <Navbar />
      <Header />
      <Playing playingMovies={playingMoviesData.results} />
      <Upcoming upcomingMovies={upcomingMoviesData.results} />
      <Newsletter />
    </div>
  )
}
