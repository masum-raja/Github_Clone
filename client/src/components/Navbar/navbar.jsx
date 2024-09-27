import React from 'react'
import { Button, Center, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="6xl" py={3} backgroundColor={colorMode === 'light' ? '#FFFFFF' : '#1A202C'}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="500">
          GitHub Users
        </Text>

        <HStack spacing={5} justifyContent={'center'} alignContent={'center'}>
          <RouterLink to="/" fontSize="2xl" fontWeight="500">
            <Text fontSize="2xl" fontWeight="500">
              Home
            </Text>
          </RouterLink>

          <Button
            onClick={toggleColorMode}
            fontSize="md"
            rounded="full"
            p={0}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar