import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Victor Pereira</h1>
        <h2>Desenvolvedor Front-end</h2>
      </div>

      <div>
        <h3>Contato:</h3>
        <ul className='text-sm'>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Instagram</li>
        </ul>
      </div>
    </main>
  )
}
