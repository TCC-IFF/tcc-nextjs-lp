import Image from 'next/image'

export const Header = () => {
  return (
    <section className="flex flex-col w-full pt-40 md:pt-0 md:justify-center md:items-center h-screen bg-black relative">
      <Image
        src="https://www.themoviedb.org/t/p/original/kVUfN0ZMuoSAc1FturM7P7PYel6.jpg"
        alt="Banner"
        width={3840}
        height={2160}
        className="absolute top-0 left-0 opacity-70 hidden md:block"
      />

      <div className="z-20 w-full max-w-7xl px-6 md:px-0">
        <div className="flex flex-col w-full max-w-xl space-y-12">
          <h1 className="text-3xl md:text-4xl font-bold  text-[#997B50]">
            Retorno à Família Corleone: Sessão Retrô de O Poderoso Chefão
          </h1>
          <p className="text-xl text-white">
            Vivencie a época dourada do cinema, revendo a icônica trilogia de
            Francis Ford Coppola na telona.
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-2 text-lg text-white bg-[#7f6643] rounded-md hover:bg-opacity-90 text-center md:max-w-max"
          >
            Reserve Seus Ingressos Agora!
          </a>
        </div>
      </div>
      <Image
        src="https://www.themoviedb.org/t/p/original/99phaRQMQaceuMEuqBYubOh7G3y.jpg"
        alt="Banner"
        fill
        className="md:hidden block opacity-10"
      />
    </section>
  )
}
