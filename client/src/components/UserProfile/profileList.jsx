
import { Box, SimpleGrid } from "@chakra-ui/react";
import ProfileItem from "./profileItem";
import { useEffect, useState } from "react";

function ProfileList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])


    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const FinalData = await response.json();
        setUsers(FinalData)
    }

  return (
    <Box maxW="6xl" mx="auto" p={3} mt={5}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={10}
      >
        {users?.map((item) => (
          <ProfileItem key={item.id} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ProfileList;