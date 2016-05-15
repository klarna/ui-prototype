import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Selector from '@klarna/ui-react-components/components/Selector'
import Link from '@klarna/ui-react-components/components/Link'
import styles from './styles.css'
import BankAccount from '../../illustrations/BankAccount'
import CloseButton from '../../CloseButton'

export default () => (
  <main className={styles.main}>
    <CloseButton />
    <BankAccount />
    <PrimaryTitle color="blue">
      Choose what bank account to connect
    </PrimaryTitle>
    <Paragraph>
      This will be the default account for your payments with Klarna.
    </Paragraph>

    <Selector className={styles.banks}
      selected={0}
      data={[
        {"id":1,"label":"Privatkonto 123456789"},
        {"id":2,"label":"Lonekonto 123456789"}
      ]}/>
  </main>
)