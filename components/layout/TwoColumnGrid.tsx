function TwoColumnGrid(props: any) {
  const { navigator, features } = props.children

  return (
    <div className="grid grid-cols-[300px_minmax(900px,_1fr)] gap-3">
      <div className="border h-fit mt-5 py-5 rounded-lg drop-shadow-lg">{navigator}</div>

      <div className="border h-full my-5 py-5 rounded-lg drop-shadow-lg">{features}</div>
    </div>
  )
}

export default TwoColumnGrid
