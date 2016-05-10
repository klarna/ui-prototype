import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Link from '@klarna/ui-react-components/components/Link'
import Button from '@klarna/ui-react-components/components/Button'
import Switch from '@klarna/ui-react-components/components/Switch'
import CloseButton from '../BackButton'
import NotYou from '../illustrations/NotYou'
import styles from './styles.css'

import Mail from '@klarna/ui-react-components/components/icons/Mail'
import Password from '@klarna/ui-react-components/components/icons/Password'
import Phone from '@klarna/ui-react-components/components/icons/Phone'

export default () => (
  <main>
    <CloseButton />
    <PrimaryTitle color="blue">
    	Enter your payment details
  	</PrimaryTitle>
    <div className={styles.personal_details}>
      <div className={styles.row}>
        <Phone color="gray"/>
        <div className={styles.field}>
          <input placeholder="Phone number" type="number" />
        </div>
      </div>
      <div className={styles.row}>
        <Mail color="gray"/>
        <div className={styles.field}>
          <input placeholder="Email" type="text" />
        </div>
      </div>
    </div>
    <div className={styles.creditcard_details}>
      <div className={styles.row}>
        <Mail color="gray"/>
        <div className={styles.field}>
          <input placeholder="Credit card number" type="number" />
        </div>
      </div>
      <div className={styles.col}>
        <div>
          <Mail color="gray"/>
          <div className={styles.field}>
            <input placeholder="MM/YY" type="text" />
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div>
          <Password color="gray"/>
          <div className={styles.field}>
            <input placeholder="CVC" type="number" />
          </div>
        </div>
      </div>
    </div>
    <Switch className={styles.remember} checked={true}>
      Remember this card
    </Switch>
    <Button>CONTINUE</Button>
  </main>
)
