import Image from 'next/image'

export const Header = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center h-screen bg-gray-800 relative">
      <Image
        src="https://www.themoviedb.org/t/p/original/kVUfN0ZMuoSAc1FturM7P7PYel6.jpg"
        alt="Banner"
        fill
        className="absolute top-0 left-0 opacity-70"
      />
      <div className=" z-20 w-full max-w-7xl">
        <div className="flex flex-col w-full max-w-xl space-y-12">
          <h1 className="text-4xl font-bold  text-[#997B50]">
            Retorno à Família Corleone: Sessão Retrô de O Poderoso Chefão
          </h1>
          <p className="text-xl text-white">
            Vivencie a época dourada do cinema, revendo a icônica trilogia de
            Francis Ford Coppola na telona.
          </p>
          <a className="inline-block mt-4 px-6 py-2 text-lg text-white bg-[#997B50] rounded-md hover:bg-opacity-90 max-w-max">
            Reserve Seus Ingressos Agora!
          </a>
        </div>
      </div>
    </section>
  )
}
