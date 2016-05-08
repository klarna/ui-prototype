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
      Now we need to authorize payments from this account and you're done!
    </Paragraph>
    <a href='/done'>
      <Button className={styles.button}>
        Open Mobilt BankID
      </Button>
    </a>
  </main>
)
