async function getData() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  console.log(data)
  return data.results.map((item: any) => (
    <h1 className="text-lg uppercase underline text-gray-700">{item.title}</h1>
  ))
}
