import Image from 'next/image'

export const MovieInteractiveBanner = ({
  movieBanner,
  onClick
}: {
  movieBanner: string
  onClick: () => void
}) => {
  return (
    <div className="relative flex rounded-md">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movieBanner}`}
        alt="Movie banner"
        width={200}
        height={750}
        className="rounded-md"
      />
      <div className="absolute hover:flex group transition-all rounded-b-md items-end bottom-0 left-0 w-full h-full hover:bg-gradient-to-t from-slate-500 to-transparent">
        <button
          onClick={onClick}
          className="w-full h-12 rounded-b-md bg-rose-700 hover:bg-rose-500 hidden group-hover:flex text-center text-white font-semibold items-center justify-center"
        >
          Ver mais
        </button>
      </div>
    </div>
  )
}
