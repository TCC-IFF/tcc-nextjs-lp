import { MovieInteractiveBanner } from '@/components/shared/MovieInterativeBanner'
import { Movie } from '@/domains/types/tmdb'
import { cinemaSessions } from './mocketSessions'

export const PlayingCard = ({
  movie,
  index,
  onClick
}: {
  movie: Movie
  index: number
  onClick: any
}) => {
  const daysOfWeek = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
  const fakeDates = [
    '20/08',
    '21/08',
    '22/08',
    '23/08',
    '24/08',
    '25/08',
    '26/08'
  ]

  return (
    <div className="flex flex-col md:flex-row w-full items-center md:items-start mb-14 space-y-4 md:space-y-0 mt-6">
      <MovieInteractiveBanner
        movieBanner={movie.poster_path}
        onClick={onClick}
      />
      <div className="flex flex-col w-full md:ml-8 h-70">
        <div className="flex flex-col p-3 bg-rose-900 w-full rounded-lg">
          <h3 className="font-semibold text-slate-100">{movie.title}</h3>
          <span className="text-xs text-slate-300 mt-1">
            {cinemaSessions[index].roomName} | {cinemaSessions[index].seats}{' '}
            lugares
          </span>
        </div>
        <div
          className="flex flex-col text-xs md:text-base w-full p-4 border-2 h-full
         border-slate-600 rounded-md mt-4 overflow-x-auto "
        >
          <div className="flex justify-around min-w-min">
            {daysOfWeek.map((day, index) => (
              <div className="flex flex-col items-center mx-1">
                <span className="text-white">{day}</span>
                <span className="text-white">{fakeDates[index]}</span>
              </div>
            ))}
          </div>
          <hr className="my-3" />
          <div className="flex justify-around min-w-min">
            {cinemaSessions[index].schedules.map((schedule: any) => (
              <div className="flex flex-col font-light items-center mx-1">
                {schedule.map((session: any) => (
                  <span className="text-white">{session}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
