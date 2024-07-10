import { Heading, Link, Text } from '@react-email/components'
import * as React from 'react'

import { BaseTemplate } from '@/email/util/base-template'

interface AuthTemplateProps {
  appUrl: URL
  loginUrl: URL
}

export default function AuthTemplate(props: AuthTemplateProps) {
  return (
    <BaseTemplate preview="Login to Cubby">
      <Heading style={h1}>Login to SaaS</Heading>
      <Link
        href={props.loginUrl.toString()}
        target="_blank"
        style={{
          ...link,
          display: 'block',
          marginBottom: '16px',
        }}
      >
        Click here to log in with this magic link
      </Link>
      <Text
        style={{
          ...text,
          color: '#ababab',
          marginTop: '14px',
          marginBottom: '16px',
        }}
      >
        If you didn&apos;t try to login, you can safely ignore this email.
      </Text>
      <Text style={footer}>
        <Link
          href={props.appUrl.toString()}
          target="_blank"
          style={{ ...link, color: '#898989' }}
        >
          SaaS
        </Link>
        , the ultimate SaaS.
      </Text>
    </BaseTemplate>
  )
}

AuthTemplate.PreviewProps = {
  appUrl: new URL('http://localhost:3000'),
  loginUrl: new URL('http://localhost:3000'),
}

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
}

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
}

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
}

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
}
