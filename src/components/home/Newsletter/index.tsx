export const Newsletter = () => {
  return (
    <section id="newsletter" className="bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-black lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="/images/Aragon_Theatre.webp"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
        </section>

        <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-5xl">
            <div className="relative block ">
              <h1 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl max-w-lg text-rose-600">
                O Brilho do Cinema na Sua Caixa de Entrada
              </h1>

              <p className="mt-4 font-medium leading-relaxed text-gray-100">
                Sua dose semanal de cultura cinematográfica: descubra críticas,
                estreias, entrevistas e curiosidades do mundo do cinema, além de
                se manter atualizado com a programação completa dos cinemas.
              </p>
            </div>

            <form action="#" className="grid grid-cols-12 gap-6 w-full mt-12">
              <div className="col-span-12 ">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-200"
                >
                  Nome
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm shadow-sm p-2"
                />
              </div>

              <div className="col-span-12 ">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-200"
                >
                  Sobrenome
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm  shadow-sm p-2"
                />
              </div>

              <div className="col-span-12">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-2 bg-none text-sm p-2 shadow-sm"
                />
              </div>

              <div className="col-span-12 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block w-full shrink-0 rounded-md border bg-rose-600 px-12 py-3  text-white font-bold transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
