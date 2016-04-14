import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Field from '@klarna/ui-react-components/components/Field'
import styles from './styles.css'
import BankID from '../illustrations/BankID'

export default () => (
  <main className={styles.main}>
    <BankID />
    <PrimaryTitle blue>
      Enter your payment details
    </PrimaryTitle>
    <Paragraph>
      We are about to fetch your bank account details so you don’t have to bother typing them.
    </Paragraph>
    <Field label='Phone number' />
    <Field label='Email' />
    <Button className={styles.button}>
      Open Mobilt BankID
    </Button>
  </main>
)
