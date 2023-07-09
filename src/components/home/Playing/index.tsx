'use client'

import { MovieModal } from '@/components/shared/Modal'
import { Movie } from '@/domains/types/tmdb'
import { useState } from 'react'
import { PlayingCard } from './PlayingCard'

export const Playing = ({ playingMovies }: { playingMovies: Movie[] }) => {
  const [currentMovie, setCurrentMovie] = useState<Movie>()

  const handleShowDatails = (movie: Movie) => {
    setCurrentMovie(prev => (!!prev ? undefined : movie))
  }

  return (
    <>
      {currentMovie && (
        <MovieModal
          toggleModal={handleShowDatails}
          movie={currentMovie}
          visible={!!currentMovie}
        />
      )}

      <section
        id="playing"
        className="flex flex-col w-full py-14 bg-slate-900 relative px-6 md:px-20"
      >
        <h2 className="flex w-full justify-center text-center text-5xl text-rose-700 font-bold tracking-wide mb-14">
          Em cartaz
        </h2>
        {playingMovies.slice(0, 6).map((movie, index) => (
          <PlayingCard
            key={movie.id}
            movie={movie}
            index={index}
            onClick={() => handleShowDatails(movie)}
          />
        ))}
      </section>
    </>
  )
}
