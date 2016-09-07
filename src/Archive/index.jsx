import React from 'react'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'
import Loader from '@klarna/ui/Loader'
import styles from './styles.css'

export default () => (
  <main className={styles.main}>
    <Title.Primary>Archive</Title.Primary>
    <Paragraph.Primary>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Paragraph.Primary>
    <Loader />
  </main>
)
