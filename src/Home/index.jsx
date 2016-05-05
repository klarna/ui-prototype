import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Input from '@klarna/ui-react-components/components/uncontrolled/Input'
import Button from '@klarna/ui-react-components/components/Button'
import styles from './styles.css'
import { submitForm } from '../actions'
import { connect } from 'react-redux'

const Home = ({ error }) => (
  <main className={styles.main}>
    <PrimaryTitle>Home</PrimaryTitle>
    <Paragraph>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Paragraph>
    <form onSubmit={(e) => { e.preventDefault(); submitForm(e.target.name.value) }}>
      <fieldset className={styles.fieldset}>
        <Input name='name' label='Name' />
      </fieldset>
      <Button>Send</Button>
    </form>
  </main>
)

export default connect((store) => store.data)(Home)
