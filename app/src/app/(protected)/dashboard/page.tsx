'use client'

import { routes } from '@/routes'
import { Box, Button, Container, Heading, Stack, Text } from '@/ui/components'
import { BareLink } from '@/ui/components'
import { useUserContext } from '@/ui/contexts/user-context'

export default function DashboardPage() {
  const { user } = useUserContext()

  return (
    <Container p={8}>
      <Stack>
        <Heading>Dashboard</Heading>
        <Text>Welcome to the dashboard.</Text>
        <Text>You are signed in as {user.email}.</Text>
        <Box>
          <Button as={BareLink} prefetch={false} href={routes.logout()}>
            Log out
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}
