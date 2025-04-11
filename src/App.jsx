import { use, useState, useEffect } from 'react'

const languages = [
  { code: 'en', name: 'Inglês' },
  { code: 'es', name: 'Espanhol' },
  { code: 'fr', name: 'Francês' },
  { code: 'de', name: ' Alemão' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
]

/* 
LOGICA DE PROGAMAÇÃO

1 - selecionar idiomas iniciais corretamente
2 - saber quando o usuario digitou algo no textarea
3 - Reunir as informações para enviar para o servidor 
   3.1 - idioma atual
   3.2 - idioma a ser traduzido
   3.3 - texto a ser traduzido
4 - ativar o loading
5 - mandar dados para o servidor
6 - desativar o loading
   6.1 - ERRO - exibir o erro
   6.2 - SUCESSO - exibir o resultado
7 - função de inverter os idiomas
   7.1 - Refazer a busca de tradução
*/


function App() {

  const [sourceLang, setSourceLang] = useState('pt')
  const [targetLang, setTargetLang] = useState('en')
  const [SourceText, setSourceText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
  handleTranslate()
  }, [SourceText])


  const handleTranslate = async () => {


https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it



  }


  return (

    <div className='min-h-screen bg-background flex flex-col'>

      <header className='bg-white shadow-sm'>
        <div className='max-w-5xl mx-auto px-4 py-3 flex items-center'>
          <h1 className='text-headerColor text-2xl font-bold'>Tradutor</h1>
        </div>
      </header>


      <main className='flex-grow flex items-start justify-center px-4 py-8'>
        <div className='w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden'>
          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <select value={sourceLang} onChange={event => setSourceLang(event.target.value)} className='text-sm text-textColor bg-transparent border-none focus:outline-none cursor-pointer'>

              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button className='p-2 rounded-full hover:bg-gray-100 outline-none'>
              <svg
                className="w-5 h-5 text-headerColor"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>

            <select value={targetLang} onChange={event => setTargetLang(event.target.value)} className='text-sm text-textColor bg-transparent border-none focus:outline-none cursor-pointer'>

              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 '>

            <div className='p-4'>
              <textarea value={SourceText} onChange={event => setSourceText(event.target.value)} placeholder='Digite seu Texto...' className='w-full h-40 text-lg text-textColor bg-transparent resize-none border-none outline-none'>
              </textarea>
            </div >

            <div className='p-4 relative bg-segundaryBackground border-l border-gray-200 '>
              <div className='absolute inset-0 flex items-center justify-center'>


                {isLoading ? (

                  <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500'></div>
                ) : (

                  <p className='text-lg tex-textColor'></p>
                )
                }


              </div>
            </div>



          </div>
        </div>
      </main>

      <footer className='bg-white border-t border-gray-200 mt-auto'>
        <div className='max-w-5xl mx-auto px-4 py-3 text-sm text-headerColor'>
          &copy; {new Date().getFullYear}Paulo
        </div>
      </footer>

    </div>
  )
}

export default App
