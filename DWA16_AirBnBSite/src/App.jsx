import { NavBar, Hero, Card } from './components'
import experienceData from './data'

/**
 * This function returns all the components in the way
 * they will be placed on the page.
 * @returns {React<component>}
 */
export default function App() {
  const cardElements = experienceData.map(experience => {
    return <Card
      /* to remove the error about the props missing a key value */
      key={experience.id}
      /* item is an object inside the props
      object with the information --used spread to make
      the object we are calling more readable */
      {...experience} />
  })
  return (
    <div>
      <NavBar />
      <Hero />
      <section className='card-order'>
        {cardElements}
      </section>
    </div>
  )
}
