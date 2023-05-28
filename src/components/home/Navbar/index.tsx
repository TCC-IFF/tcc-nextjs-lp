export const Navbar = () => {
  const menuItems: { label: string; link: string }[] = [
    {
      label: 'Em cartaz',
      link: '#playing'
    },
    {
      label: 'Em breve',
      link: '#coming'
    },
    {
      label: 'Newsletter',
      link: '#newsletter'
    }
  ]
  return (
    <nav className="flex w-full h-20 bg-slate-800 items-center px-20 justify-between">
      <div>
        <h1 className="text-rose-500 font-bold font-mono text-xl tracking-wide">
          CineTCC
        </h1>
      </div>
      <div className="flex space-x-4">
        {menuItems.map(item => (
          <a
            key={item.link}
            className="text-gray-300 hover:text-rose-500"
            href={item.link}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
