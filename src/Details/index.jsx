import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Field from '@klarna/ui-react-components/components/Field'
import styles from './styles.css'
import UserDetails from '../illustrations/UserDetails'
import Mail from '@klarna/ui-react-components/components/icons/Mail'
import Lock from '@klarna/ui-react-components/components/icons/Lock'
import { submitForm } from '../actions'
import { connect } from 'react-redux'
import Dialog from '../Dialog/index'

const Details = ({ error }) => (
  <Dialog>
    <UserDetails />
    <PrimaryTitle blue>
      Please enter<br />your details below
    </PrimaryTitle>
    <Paragraph>
      For security, we might need to contact you by phone or email.
    </Paragraph>
    <form onSubmit={submitForm}>
      <Field error={error.phone} label='Phone number' name='phone'>
        <Lock />
      </Field>
      <Field error={error.email} label='Email' name='email' icon='email'>
        <Mail />
      </Field>
      <Button size='big' className={styles.button}>
        Continue
      </Button>
    </form>
  </Dialog>
)

export default connect((store) => store.data)(Details)
