interface NavigationDrawerProps {
  navigator: React.ReactElement
}

const NavigationDrawer = (props: NavigationDrawerProps) => {
  return (
    <>
      <input type="checkbox" id="drawer-toggle" className="sr-only peer" defaultChecked></input>
      <label
        htmlFor="drawer-toggle"
        className="absolute top-0 left-0 inline-block p-4 m-2 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:left-64"
      ></label>

      <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
        <div className="border h-fit mt-5 py-5 rounded-lg drop-shadow-lg mx-5">{props.navigator}</div>
      </div>
    </>
  )
}

export default NavigationDrawer;
