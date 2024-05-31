

export default function ItemList() {
  return (
    <ul>
      <Item item={item} />
      <Item item={item} />
      <Item item={item} />
    </ul>
  )
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" /> {item.name}
      </label>
    </li>
  )
}
