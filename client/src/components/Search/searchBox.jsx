import React, { useState } from "react";
import {
  Box,
  Container,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import useUserStore from "../zustand/store";

function SearchBox() {
  let [userName, setUserName] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, serPerPage] = useState(10);
  const [totalPage, setTotalPage] = useState(null);

  //   const { users, addUsers, isLoading, setLoading, resetUsers } = useUserStore(
  //     (state) => ({
  //       users: state.users,
  //       addUsers: state.addUsers,
  //       isLoading: state.isLoading,
  //       setLoading: state.setLoading,
  //       resetUsers: state.resetUsers,
  //     })
  //   );

  const setUser = (e) => {
    setUserName(e.target.value);
  };

  const handleFindUser = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `https://api.github.com/search/users?q=${userName}&page=${page}&per_page=${perPage}`
    );
    console.log(res);
  };
  return (
    <Container maxW="6xl" py={3}>
      <Box bg="gray.700" my={5} borderRadius="lg" p={{ base: 5, md: 10 }}>
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
    </Container>
  );
}

export default SearchBox;
