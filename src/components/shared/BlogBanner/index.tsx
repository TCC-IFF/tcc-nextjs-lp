import Image from 'next/image'
import { StarIcon } from './StarIcon'

export const BlogBanner = ({
  movieRate,
  movieBanner,
  onClick
}: {
  movieRate: number
  movieBanner: string
  onClick?: () => void
}) => {
  return (
    <div className="relative flex rounded-md">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movieBanner}`}
        alt="Movie banner"
        width={250}
        height={350}
        className="rounded-md"
      />
      <div className="absolute w-full justify-end text-right bg-white bg-opacity-70 top-0 left-0 p-2 flex gap-2 font-bold rounded-t-md">
        {movieRate}
        <StarIcon />
      </div>
      <div className="absolute hover:flex group transition-all rounded-b-md items-end bottom-0 left-0 w-full h-full hover:bg-gradient-to-t from-slate-500 to-transparent">
        <button
          onClick={onClick}
          className="hidden group-hover:flex w-full h-12 rounded-b-md bg-rose-700 hover:bg-rose-500 text-center text-white font-semibold items-center justify-center"
        >
          Ler crítica
        </button>
      </div>
    </div>
  )
}
