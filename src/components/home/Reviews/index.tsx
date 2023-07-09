'use client'

import { BlogBanner } from '@/components/shared/BlogBanner'
import { Movie } from '@/domains/types/tmdb'
import { useState } from 'react'

export const Reviews = ({ popularMovies }: { popularMovies: Movie[] }) => {
  const [moviesInView, setMoviesInView] = useState<number>(7)
  const handleMoviesInView = () => {
    setMoviesInView(prev => prev + 5)
  }
  return (
    <>
      <section
        id="blog"
        className="flex flex-col w-full pt-14 pb-36 bg-slate-900 relative px-6 md:px-20 justify-center items-center"
      >
        <h2 className="flex w-full justify-center text-center text-5xl text-rose-700 font-bold tracking-wide mb-14">
          Resenhas e Críticas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl gap-8 items-center justify-center justify-items-center content-center">
          {popularMovies.map(
            (movie: Movie, index) =>
              movie.poster_path &&
              movie.overview && (
                <div
                  key={movie.id}
                  className={`${index <= moviesInView ? 'flex' : 'hidden'}`}
                >
                  <BlogBanner
                    movieBanner={movie.poster_path}
                    movieRate={movie.vote_average}
                  />
                </div>
              )
          )}
        </div>

        {moviesInView <= popularMovies.length && (
          <button
            onClick={handleMoviesInView}
            className="self-center mt-12 w-56 max-w-md h-12 rounded-md bg-rose-700 hover:bg-rose-500 text-center text-white font-semibold items-center justify-center"
          >
            Carregar mais
          </button>
        )}
      </section>
    </>
  )
}
