import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import clsx from 'clsx'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const isSidebar = theme === 'theme2'

  return (
    <header
      className={clsx(
        'shadow-md transition-all duration-500 z-50',
        {
          // Theme 1 and 3 – fixed top
          'bg-white text-black fixed top-0 left-0 w-full p-4 flex justify-between items-center':
            theme === 'theme1',
          'bg-yellow-200 text-purple-800 fixed top-0 left-0 w-full p-4 flex justify-between items-center':
            theme === 'theme3',

          // Theme 2
          'bg-gray-800 text-white w-full p-4 flex flex-col md:fixed md:h-full md:w-64 md:items-start md:gap-6':
            isSidebar
        }
      )}
    >
      <h1 className="text-2xl font-bold mb-2 md:mb-0">Theme Switcher App</h1>

      <div
        className={clsx(
          isSidebar
            ? 'flex flex-col md:items-start gap-4'
            : 'flex items-center gap-4'
        )}
      >
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
         className={clsx(
            'p-2 border rounded transition-colors duration-300',
            {
              'bg-white text-black border-gray-300': theme === 'theme1',
              'bg-gray-700 text-white border-gray-500': theme === 'theme2',
              'bg-yellow-300 text-purple-900 border-yellow-500': theme === 'theme3'
            }
          )}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>

        <nav
          className={clsx(
            isSidebar ? 'flex flex-col gap-2 md:items-start' : 'space-x-3'
          )}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
