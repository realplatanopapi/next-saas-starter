import { routes } from '@/routes'
import {
  BareLink,
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
} from '@/ui/components'

export default async function Home() {
  return (
    <Container p={10}>
      <Stack>
        <Heading>Next.js SaaS Starter</Heading>
        <Text>This is a Next.js SaaS template.</Text>
        <Box>
          <Button as={BareLink} colorScheme="primary" href={routes.auth()}>
            Get started
          </Button>
        </Box>
      </Stack>
    </Container>
  )
}
