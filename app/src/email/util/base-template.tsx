import { Body, Container, Head, Html, Preview } from '@react-email/components'
import { ReactNode } from 'react'

interface BaseTemplateProps {
  preview?: string
  children: ReactNode
}

export const BaseTemplate = (props: BaseTemplateProps) => {
  return (
    <Html>
      <Head>{props.preview && <Preview>{props.preview}</Preview>}</Head>
      <Body style={main}>
        <Container style={container}>{props.children}</Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
}

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
}
