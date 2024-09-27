import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import ProfileItem from "./profileItem";
import useUserStore from "../../zustand/store";

const ProfileList = () => {
  const { users, isLoading } = useUserStore();

  if (isLoading) {
    return <Text textAlign={'center'} mt={'10'}>Loading............</Text>;
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