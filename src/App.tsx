import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useTheme } from './context/ThemeContext'
import clsx from 'clsx'

function App() {
  const { theme } = useTheme()
  const isSidebar = theme === 'theme2'

  return (
    <div  className={clsx(
    'min-h-screen flex flex-col',
    theme === 'theme2' && 'md:flex-row',
    theme // applies theme1, theme2, theme3 class
  )}>
      {/* Header placement */}
      {isSidebar ? (
        <>
          <div className="md:w-64">
            <Header />
          </div>
          <main className="flex-1 p-6 pt-[72px] md:pt-6 md:ml-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </>
      ) : (
        <>
          <Header />
          <main className="p-6 pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  )
}

export default App
