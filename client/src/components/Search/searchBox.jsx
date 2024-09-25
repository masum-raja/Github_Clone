import React from "react";
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchBox() {
  return (
    <Container maxW="6xl" py={3}>
      <Box bg="gray.700" my={5} borderRadius="lg" p={{ base: 5, md: 10 }}>
        <InputGroup>
          <Input type="tel" placeholder="Find User" />
          <InputRightElement pointerEvents="none">
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Container>
  );
}

export default SearchBox;
