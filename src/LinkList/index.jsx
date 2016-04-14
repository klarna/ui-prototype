import React from 'react'
import styles from './styles.css'
import Link from '@klarna/ui-react-components/components/Link'

export default ({ options, href }) => (
  <div className={styles.linkList}>
    {
      options.map((option) => (
        <Link key={option} href={href} className={styles.item} style={option === options[0] ? {borderTop: 0} : {}}>
          {option}
          <svg className={styles.icon} width='6px' height='8px' viewBox='0 0 6 8' version='1.1'>
            <path d='M0,0l4,4l-4,4' strokeLinecap="round" strokeWidth='1' fill='none' stroke='#3C3C3E' />
          </svg>
        </Link>
      ))
    }
  </div>
)
