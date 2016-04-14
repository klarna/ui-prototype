import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import styles from './styles.css'
import BankID from '../illustrations/BankID'

export default () => (
  <main className={styles.main}>
    <BankID />
    <PrimaryTitle blue>
      Open your<br />Mobilt BandID app
    </PrimaryTitle>
    <Paragraph>
      We are about to fetch your bank account details so you don’t have to bother typing them.
    </Paragraph>
    <a href='/bank_accounts'>
      <Button className={styles.button}>
        Open Mobilt BankID
      </Button>
    </a>
  </main>
)
