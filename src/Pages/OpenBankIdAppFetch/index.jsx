import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import CloseButton from '../../CloseButton'
import BankId from '../../illustrations/BankId'
import styles from './styles.css'

export default () => (
  <main>
    <CloseButton />
    <BankId />
    <PrimaryTitle color="blue">
      Open your Mobilt BankID app
    </PrimaryTitle>
    <Paragraph>
      We are about to fetch your bank account details so you don't have to bother typing them.
    </Paragraph>
    <a href='/done'>
      <Button className={styles.button}>
        Open Mobilt BankID
      </Button>
    </a>
  </main>
)
