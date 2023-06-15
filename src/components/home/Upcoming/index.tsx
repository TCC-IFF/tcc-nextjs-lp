'use client'

import { MovieModal } from '@/components/shared/Modal'
import { MovieInteractiveBanner } from '@/components/shared/MovieInterativeBanner'
import { Movie } from '@/domains/types/tmdb'
import { useState } from 'react'

export const Upcoming = ({ upcomingMovies }: { upcomingMovies: Movie[] }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>()
  const handleShowDatails = (movie: Movie) => {
    setSelectedMovie(prev => (!!prev ? undefined : movie))
  }
  return (
    <>
      <section
        id="coming"
        className="flex flex-col w-full pt-14 pb-36 bg-slate-900 relative px-20 justify-center"
      >
        <h2 className="flex w-full justify-center text-center text-5xl text-rose-700 font-bold tracking-wide mb-14">
          Em Breve
        </h2>
        <div className="flex flex-wrap gap-8 justify-center justify-items-center content-center">
          {upcomingMovies.map(
            (movie: Movie) =>
              movie.poster_path &&
              movie.overview && (
                <div className="flex">
                  <MovieInteractiveBanner
                    movieBanner={movie.poster_path}
                    onClick={() => setSelectedMovie(movie)}
                  />
                </div>
              )
          )}
        </div>
      </section>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          visible={!!selectedMovie}
          toggleModal={handleShowDatails}
        />
      )}
    </>
  )
}
