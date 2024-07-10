import { renderAsync } from '@react-email/components'
import { ReactElement } from 'react'

export async function renderEmail<TElement extends ReactElement>(
  content: TElement,
) {
  const [html, text] = await Promise.all([
    renderAsync(content),
    renderAsync(content, { plainText: true }),
  ])

  return {
    html,
    text,
  }
}
