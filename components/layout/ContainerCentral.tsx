function ContainerCentral(props: any) {
  const { columns } = props.children

  return <div className="container mx-auto h-full">{columns}</div>
}

export default ContainerCentral
