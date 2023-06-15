import { Movie } from '@/domains/types/tmdb'

export const Upcoming = ({ upcomingMovies }: { upcomingMovies: Movie[] }) => {
  return (
    <div>
      {upcomingMovies.map((movie: Movie) => (
        <p>{movie.title}</p>
      ))}
    </div>
  )
}
