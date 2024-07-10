'use client'

import { useQueryState } from 'nuqs'
import { match } from 'ts-pattern'
import { z } from 'zod'

import { trpc } from '@/ui/api/trpc'
import {
  Alert,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Text,
} from '@/ui/components'
import { useForm } from '@/ui/hooks/use-form'

const schema = z.object({
  email: z.string().trim().email(),
})

const querySchema = z.union([z.literal('token_expired'), z.string()])

export default function AuthPage() {
  const sendAuthEmailMutation = trpc.auth.sendAuthEmail.useMutation()
  const form = useForm({
    schema,
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      return sendAuthEmailMutation.mutateAsync(values)
    },
  })

  const [error] = useQueryState('error', querySchema)

  return (
    <Container p={8}>
      <Stack>
        {error && !form.submitCount && (
          <Alert status="error">
            {match(error)
              .with('token_expired', () => {
                return 'This link has expired. Please request a new one.'
              })
              .otherwise(() => {
                return 'An unknown error occurred. Please try again.'
              })}
          </Alert>
        )}
        {match(sendAuthEmailMutation.status)
          .with('success', () => {
            return (
              <Stack>
                <Heading>Check your email</Heading>
                <Stack>
                  <Text>We've sent you an email with a link to log in.</Text>
                </Stack>
              </Stack>
            )
          })
          .otherwise(() => {
            return (
              <Stack>
                <Heading>Create or log in to your account</Heading>
                <Stack as="form" onSubmit={form.onSubmit}>
                  <FormControl {...form.getFormControlProps('email')}>
                    <Input
                      autoFocus
                      placeholder="jonbonjovi@gmail.net"
                      {...form.getFieldProps('email')}
                    />
                    <FormErrorMessage
                      {...form.getFormErrorMessageProps('email')}
                    />
                  </FormControl>
                  <Button
                    isLoading={sendAuthEmailMutation.isPending}
                    loadingText="Sending email"
                    type="submit"
                    colorScheme="primary"
                  >
                    Get a link to login
                  </Button>
                </Stack>
              </Stack>
            )
          })}
      </Stack>
    </Container>
  )
}
