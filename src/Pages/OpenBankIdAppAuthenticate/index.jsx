import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Link from '@klarna/ui-react-components/components/Link'
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
      We just need to authenticate that it&#39;s really you!
    </Paragraph>
    <a href='/personal_number'>
      <Button className={styles.button}>
        Open Mobilt BankID
      </Button>
    </a>
  </main>
)
