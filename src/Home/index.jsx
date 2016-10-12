import React, { PropTypes } from 'react'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'
import UncontrolledInput from '@klarna/ui/uncontrolled/Input'
import Fieldset from '@klarna/ui/Fieldset'
import * as Button from '@klarna/ui/Button'
import styles from './styles.css'
import { submitForm, typeName, add } from '../actions'
import { connect } from 'react-redux'

const Home = ({ name, error }, { store }) => (
  <main className={styles.main}>
    <Title.Primary>Hello {name}!</Title.Primary>
    <form onSubmit={(e) => { e.preventDefault(); submitForm(e.target.name.value) }}>
      <Fieldset className={styles.fieldset}>
        <UncontrolledInput
          onFocus={() => {}}
          onBlur={() => {}}
          onChange={(e) => typeName(e.target.value)}
          name='name'
          label={error || 'Name'}
          error={!!error}
        />
      </Fieldset>
    </form>

    <Button.Primary onClick={add}>Add</Button.Primary>
    <Paragraph.Primary>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Paragraph.Primary>
  </main>
)

Home.contextTypes = {
  store: PropTypes.object
}
export default connect(
  (store) => store.data
)(Home)
