import React, { PropTypes } from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Input from '@klarna/ui-react-components/components/uncontrolled/Input'
import Button from '@klarna/ui-react-components/components/Button'
import styles from './styles.css'
import { submitForm, typeName, add } from '../actions'
import { connect } from 'react-redux'

const Home = ({ name, error }, { store }) => (
  <main className={styles.main}>
    <PrimaryTitle>Hello {name}!</PrimaryTitle>
    <form onSubmit={(e) => { e.preventDefault(); submitForm(e.target.name.value) }}>
      <fieldset className={styles.fieldset}>
        <Input onFocus={() => {}}
          onBlur={() => {}} onChange={(e) => typeName(e.target.value)} name='name' label={error || 'Name'} error={!!error} />
      </fieldset>
    </form>

    <Button onClick={add}>Add</Button>
    <Paragraph>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Paragraph>
  </main>
)

Home.contextTypes = {
  store: PropTypes.object
}
export default connect(
  (store) => store.data
)(Home)
