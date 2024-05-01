import { EXAMPLES, CORE_CONCEPTS } from './data.js'
import Header from './components/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton.jsx'
import { useState } from 'react'

function App() {
  const [selectedTopic, setSelectedTopic] = useState()
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts0</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept {...conceptItem} key={conceptItem.title}></CoreConcept>
            ))}
          </ul>
        </section>
        <p></p>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>
              States
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  )
}

export default App
