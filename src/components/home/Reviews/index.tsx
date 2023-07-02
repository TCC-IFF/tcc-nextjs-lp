'use client'

import { MovieModal } from '@/components/shared/Modal'
import { MovieInteractiveBanner } from '@/components/shared/MovieInterativeBanner'
import { Movie } from '@/domains/types/tmdb'
import { useState } from 'react'

export const Reviews = ({ popularMovies }: { popularMovies: Movie[] }) => {
  const [moviesInView, setMoviesInView] = useState<number>(5)
  const handleMoviesInView = () => {
    setMoviesInView(prev => prev + 5)
  }
  return (
    <>
      <section
        id="coming"
        className="flex flex-col w-full pt-14 pb-36 bg-slate-900 relative px-20 justify-center"
      >
        <h2 className="flex w-full justify-center text-center text-5xl text-rose-700 font-bold tracking-wide mb-14">
          Resenhas e Críticas
        </h2>
        <div className="flex flex-wrap gap-8 justify-center justify-items-center content-center">
          {popularMovies.map(
            (movie: Movie, index) =>
              movie.poster_path &&
              movie.overview && (
                <div
                  key={movie.id}
                  className={`${index <= moviesInView ? 'flex' : 'hidden'}`}
                >
                  <MovieInteractiveBanner movieBanner={movie.poster_path} />
                </div>
              )
          )}
        </div>

        {moviesInView <= popularMovies.length && (
          <button
            onClick={handleMoviesInView}
            className="self-center mt-12 w-56 max-w-md h-12 rounded-md bg-rose-700 hover:bg-rose-500 text-center text-white font-semibold items-center justify-center"
          >
            Ver mais
          </button>
        )}
      </section>
    </>
  )
}
