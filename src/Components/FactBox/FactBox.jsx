const FactBox = ({name, value}) => {
    console.log(name, value)
  return (
    <figure className="fact">
      <p className="fact-topic">{name}</p>
      <h2 className="fact-stat">{value}</h2>
    </figure>
  )
}

export default FactBox
