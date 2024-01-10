import { useState } from 'react'

interface NavigationDrawerProps {
  navigator: React.ReactElement
}

const NavigationDrawer = (props: NavigationDrawerProps) => {
  const [drawer, setDrawer] = useState(true)

  const changeIcon = () => {
    if (drawer) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      )
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      )
    }
  }

  return (
    <>
      <input
        type="checkbox"
        id="drawer-toggle"
        className="sr-only peer"
        checked={drawer}
        onChange={() => setDrawer(!drawer)}
      ></input>

      <label
        htmlFor="drawer-toggle"
        className="fixed top-0 left-0 z-20 inline-block p-1 m-2 transition-all duration-500 bg-indigo-500 rounded-lg shadow-lg peer-checked:left-64"
      >
        {changeIcon()}
      </label>

      <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
        <div className="border h-fit mt-5 py-5 rounded-lg drop-shadow-lg mx-5">{props.navigator}</div>
      </div>
    </>
  )
}

export default NavigationDrawer
