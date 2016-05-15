import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Selector from '@klarna/ui-react-components/components/Selector'
import Link from '@klarna/ui-react-components/components/Link'
import CloseButton from '../../CloseButton'
import NotYou from '../../illustrations/NotYou'
import styles from './styles.css'

import ChoosePM from '../../illustrations/ChoosePM'

let onChoose = (a) =>
  console.log(a)

export default () => (
  <main>
    <CloseButton />
    <ChoosePM />
    <PrimaryTitle color="blue">
    	Choose a payment method
  	</PrimaryTitle>
    <Selector className={styles.payment_methods}
      selected={0}
      onChange={onChoose}
      data={[
        {"id":1,"label":"Nordea •••••• 678"},
        {"id":2,"label":"Visa •••• 5678"},
      ]}/>
    <div className={styles.add_new}>
      <Link>Add a new payment method</Link>
    </div>
  </main>
)
