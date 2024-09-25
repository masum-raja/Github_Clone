import React from 'react'
import { Container, Flex, Text } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  return (
    <Container maxW="6xl" py={3}>
        <Flex justifyContent="space-between" alignItems="center">
        <RouterLink to="/" fontSize="2xl" fontWeight="500">
            <Text fontSize="2xl" fontWeight="500">
              GitHub Users
            </Text>
          </RouterLink>

          <RouterLink to="/" fontSize="2xl" fontWeight="500">
            <Text fontSize="2xl" fontWeight="500">
              Home
            </Text>
          </RouterLink>

        </Flex>
    </Container>
  )
}

export default Navbar