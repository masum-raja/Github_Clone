import React, { useState } from "react";
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import useUserStore from "../../zustand/store";
import ErrorPage from "../../Pages/error";

const SearchBox = () => {
  const [userName, setUserName] = useState("");
  const { colorMode } = useColorMode();
  const { users, setUsers, currentPage, setCurrentPage, totalPages, setTotalPages, setLoading } = useUserStore();

  const setUser = (e) => {
    setUserName(e.target.value);
  };

  const handleFindUser = async (e) => {
    e.preventDefault();
    await fetchUsers(1);
  };

  const fetchUsers = async (page) => {
    try {
      setLoading(true)
      const res = await axios.get(
        `https://api.github.com/search/users?q=${userName}&page=${page}&per_page=10`
      );
      setUsers(res.data.items);
      setCurrentPage(page);
      setTotalPages(Math.ceil(res.data.total_count / 10));
      setLoading(false)
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      fetchUsers(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      fetchUsers(currentPage - 1);
    }
  };

  return (
    <Container maxW="6xl" py={3}>
      <Box bg={colorMode === "light" ? "#F5F5F5" : "gray.700"} my={5} borderRadius="lg" p={{ base: 5, md: 10 }}>
        <form onSubmit={handleFindUser}>
          <InputGroup>
            <Input type="text" placeholder="Find User" onChange={setUser} />
            <InputRightElement>
              <SearchIcon
                _hover={{ cursor: "pointer" }}
                onClick={handleFindUser}
              />
            </InputRightElement>
          </InputGroup>
        </form>
      </Box>

      {users.length > 0 && (
        <HStack mt={4} gap={8}>
          <Button onClick={handlePreviousPage} isDisabled={currentPage === 1}>
            Previous
          </Button>
          <Text>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            onClick={handleNextPage}
            isDisabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </Button>
        </HStack>
      )}

      {
        (!users.length && totalPages !== null) && (
          <ErrorPage />
        )
      }
    </Container>
  );
}

export default SearchBox;
