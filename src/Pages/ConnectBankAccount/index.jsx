import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Link from '@klarna/ui-react-components/components/Link'
import Selector from '@klarna/ui-react-components/components/Selector'
import CloseButton from '../../CloseButton'
import styles from './styles.css'

let onChoose = (a) =>
  console.log(a)

export default () => (
  <main>
    <CloseButton />
    <PrimaryTitle color="blue">
    	Connect your bank account
  	</PrimaryTitle>
    <Paragraph>
      Set up Klarna Direkt in seconds using your Mobilt BankID. You will only have to do this once.
      <div>
        <Link>Learn more</Link>
      </div>
    </Paragraph>

    <Selector className={styles.banks}
      selected={0}
      onChange={onChoose}
      data={[
        {"id":1,"label":"Swedbank"},
        {"id":2,"label":"Nordea"},
        {"id":3,"label":"Handelsbanken"},
        {"id":4,"label":"SEB"},
        {"id":5,"label":"Other"}
      ]}/>

      <Paragraph design="legal">
      Nar du klickar pa Fortsatt godkanner du att Klarna hamtar och visar dina bankkontonummer, se vilkoren. Klarna lagrar bara det kontonummer du viljer och inga ovriga bankuppgifter.
      </Paragraph>
  </main>
)
