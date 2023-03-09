async function getData() {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/550?api_key=c5551a99621b6393dda5815d7cc6bc2b'
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  console.log(data)
  return <h1 className="text-3xl uppercase underline">Hello test</h1>
}
