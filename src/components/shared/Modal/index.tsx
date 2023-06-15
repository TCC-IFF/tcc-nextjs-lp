import { Movie } from '@/domains/types/tmdb'
import Image from 'next/image'

type MovieModalProps = {
  movie: Movie
  visible: boolean
  toggleModal: (movie: Movie) => void
}

export const MovieModal = ({
  movie,
  visible,
  toggleModal
}: MovieModalProps) => {
  if (!movie) return null

  const { title, backdrop_path: bannerSrc } = movie
  const synopsis = movie.overview

  return (
    <>
      <button
        onClick={() => toggleModal(movie)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Ver mais detalhes
      </button>

      {visible && (
        <div
          className="fixed z-40 inset-0 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-black bg-opacity-80 transition-opacity"
              aria-hidden="true"
              onClick={() => toggleModal(movie)}
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-900 text-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2 rounded-md ">
                      <Image
                        width={500}
                        height={300}
                        src={`https://image.tmdb.org/t/p/w500${bannerSrc}`}
                        alt="Movie Banner"
                        className="w-full h-64 rounded-md mb-4"
                      />
                      <h3 className="text-lg leading-6 font-semibold tracking-wider text-rose-600 mb-4">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-300 tracking-wide">
                        {synopsis}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => toggleModal(movie)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-rose-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
