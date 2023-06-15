import { Movie } from '@/domains/types/tmdb'
import Image from 'next/image'
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
    <div className="flex w-full mb-14">
      <div className="relative flex rounded-md">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={200}
          height={750}
          className="rounded-md"
        />
        <div className="absolute hover:flex group transition-all items-end bottom-0 left-0 w-full h-full hover:bg-gradient-to-t from-slate-500 to-transparent">
          <button
            onClick={onClick}
            className="w-full h-12 bg-rose-600 hidden group-hover:flex text-center text-white font-semibold items-center justify-center"
          >
            Ver mais
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full ml-8 h-70">
        <div className="flex flex-col p-3 bg-rose-900 w-full rounded-lg">
          <h3 className="font-semibold text-slate-100">{movie.title}</h3>
          <span className="text-xs text-slate-300 mt-1">
            {cinemaSessions[index].roomName} | {cinemaSessions[index].seats}{' '}
            lugares
          </span>
        </div>
        <div className="flex flex-col w-full p-4 border-2 h-full border-slate-600 rounded-md mt-4">
          <div className="flex justify-around">
            {daysOfWeek.map((day, index) => (
              <div className="flex flex-col items-center">
                <span className="text-white">{day}</span>
                <span className="text-white">{fakeDates[index]}</span>
              </div>
            ))}
          </div>
          <hr className="my-3" />
          <div className="flex justify-around">
            {cinemaSessions[index].schedules.map((schedule: any) => (
              <div className="flex flex-col font-light items-center">
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
