export default function TabButton(props) {
  return (
    <li>
      <button className={props.isSelected ? 'active' : undefined} onClick={props.onSelect} {...props}>
        {props.children}
      </button>
    </li>
  )
}
