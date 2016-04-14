import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Field from '@klarna/ui-react-components/components/Field'
import styles from './styles.css'
import UserDetails from '../illustrations/UserDetails'
import Mail from '@klarna/ui-react-components/components/icons/Mail'
import Lock from '@klarna/ui-react-components/components/icons/Lock'

export default () => (
  <main className={styles.main}>
    <UserDetails />
    <PrimaryTitle blue>
      Please enter<br />your details below
    </PrimaryTitle>
    <Paragraph>
      For security, we might need to contact you by phone or email.
    </Paragraph>
    <Field label='Phone number' name='phone'>
      <Lock />
    </Field>
    <Field label='Email' name='email' icon='email'>
      <Mail />
    </Field>
    <a href='/ui-prototype/bank_accounts'>
      <Button size='big' className={styles.button}>
        Continue
      </Button>
    </a>
  </main>
)
