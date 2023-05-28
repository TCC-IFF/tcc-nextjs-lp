'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export const Header = ({ data }: { data: any }) => {
  useEffect(() => {
    console.log(data)
  })
  return (
    <Image
      src="https://www.themoviedb.org/t/p/original/kVUfN0ZMuoSAc1FturM7P7PYel6.jpg"
      alt="Picture of the author"
      width={1920}
      height={1080}
    />
  )
}
