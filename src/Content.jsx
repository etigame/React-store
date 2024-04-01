import { useState } from 'react'
import ItemList from './ItemList'
import Search from './Search'
import db from './itemsDB'
let categories = db.categories
let items = db.items

export default function Content() {
  const [category, setCategory] = useState('')
  const [input, setInput] = useState('')
  const filteredItems =
    category === 'all'
      ? items
      : items
          .filter((item) => item.category === category)
          .filter((item) => item.name.toLowerCase().includes(input))

  const handleSearch = (e) => {
    setInput(e.target.value.toLowerCase())
  }


  return (
    <section className='content'>
      <button onClick={() => setCategory('all')}>All</button>
      <div>
        {categories.map((c) => (
          <button onClick={() => setCategory(c)} key={category.name}>
            {c}
          </button>
        ))}
      </div>
      <Search onInput={handleSearch} />
      <ItemList items={filteredItems} />
    </section>
  )
}
