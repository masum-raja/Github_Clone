import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProfileItem = ({ avatar_url, login }) => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/user/${login}`);
  };

  return (
    <Box
      bg="#ddefff"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      maxW="sm"
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.3s",
      }}
      cursor="pointer"
    >
      <Box
        bg="#FDFAFA"
        borderRadius="10px"
        p={6}
        minW="225px"
        minH="315px"
        maxH="370px"
        boxShadow="5px 5px 10px 2px rgba(95, 95, 95, 0.24)"
        textAlign="center"
      >
        <Image
          src={avatar_url}
          alt={login}
          boxSize="120px"
          borderRadius="full"
          mb={4}
          mx="auto"
        />

        <Text fontWeight="600" fontSize="20px" color="#203150" isTruncated>
          {login}
        </Text>

        <Button
          bg="#6a5acd"
          color="white"
          width="100px"
          height="35px"
          borderRadius="8px"
          fontWeight="500"
          boxShadow="0 10px 10px hsl(225, 100%, 94%)"
          mt={10}
          _hover={{
            bg: "#8a79f0"
          }}
          onClick={handleSeeMore}
        >
          See More
        </Button>
      </Box>
    </Box>
  );
}

export default ProfileItem;
