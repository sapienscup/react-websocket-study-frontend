import { useTheme } from 'next-themes'
import Switch from '../atoms/Switch'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  function changeTheme() {
    if (theme === 'dark') {
      setTheme('light')
    }

    if (theme === 'light') {
      setTheme('dark')
    }
  }

  return (
    <div className="grid grid-cols-1">
      <div className='text-lg mb-5'>Alternador de tema</div>
      <Switch value={theme === 'light'} targetFunction={changeTheme}></Switch>
    </div>
  )
}

export default ThemeChanger
