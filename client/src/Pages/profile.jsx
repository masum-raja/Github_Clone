import React from "react";
import { Box, Badge, Flex, Image, Text } from "@chakra-ui/react";

function Profile({ avatar_url, login }) {
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
      m='auto'
      mt={20}
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
          src={"https://avatars.githubusercontent.com/u/107463457?v=4"}
          alt={"Masum Raja"}
          boxSize="120px"
          borderRadius="full"
          mb={4}
          mx="auto"
        />

        <Text fontWeight="600" fontSize="20px" color="#203150" isTruncated>
          {"Masum Raja"}
        </Text>

        <Text color="#203150" >
          {"Aspiring MERN Developer | React JS | Redux | JavaScript | NodeJS | Express | MongoDB"}
        </Text>

        <Flex justify="center" align="center" my={4}>
          <Box textAlign="center" mx={2}>
            <Badge
              bg="#f0ebfa"
              color="#788697"
              p={1}
              borderRadius="full"
              fontSize="10px"
            >
              Followers
            </Badge>
            <Text color="#7b8ca0" fontSize="14px">
              45
            </Text>
          </Box>
          <Box textAlign="center" mx={2}>
            <Badge
              bg="#f0ebfa"
              color="#788697"
              p={1}
              borderRadius="full"
              fontSize="10px"
            >
             Repositories
            </Badge>
            <Text color="#7b8ca0" fontSize="14px">
              11
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Profile;
