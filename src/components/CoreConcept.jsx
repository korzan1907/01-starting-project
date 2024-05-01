//function CoreConcept(props) {
export default function CoreConcept({ image, title, description }) {
  // Object destructring
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
