import React, { useEffect, useState } from "react";
import { Box, Badge, Flex, Image, Text, ListItem, List } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileSkeleton from "./profileSkeleton";
import useUserStore from "../../zustand/store";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [userRepo, setUserRepo] = useState(null);

  const { resetUser } = useUserStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${id}`);
        setUser(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  useEffect(() => {
    const fetchUserRepo = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${id}/repos`);
        console.log(res.data);
        setUserRepo(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserRepo();
  }, [id]);

  useEffect(() => {
    return () => resetUser();
  }, []);

  if (!user && !userRepo) return <ProfileSkeleton />;

  return (
    <Flex
      maxW={"6xl"}
      m="auto"
      gap={{ base: 4, lg: 8 }}
      p={4}
      align="start"
      flexDirection={{ base: "column", lg: "row" }}
    >
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
        mt={10}
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
            src={user && user.avatar_url}
            alt={user && user.login}
            boxSize="120px"
            borderRadius="full"
            mb={4}
            mx="auto"
          />

          <Text fontWeight="600" fontSize="20px" color="#203150" isTruncated>
            {user && user.name}
          </Text>

          <Text color="#203150">{user && user.bio}</Text>

          <Flex justify="center" align="center" my={4}>
            <Box textAlign="center" mx={2}>
              <Badge bg="#f0ebfa" color="#788697" p={1} borderRadius="full" fontSize="10px">
                Followers
              </Badge>
              <Text color="#7b8ca0" fontSize="14px">{user && user.followers}</Text>
            </Box>
            <Box textAlign="center" mx={2}>
              <Badge bg="#f0ebfa" color="#788697" p={1} borderRadius="full" fontSize="10px">
                Repositories
              </Badge>
              <Text color="#7b8ca0" fontSize="14px">{user && user.public_repos}</Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Repositories List */}
      <Box mt={10} bg="#fff" borderRadius="10px" boxShadow="md" maxH="85vh" overflowY="auto" m={'auto'}>
        <Box
          position="sticky"
          top={0}
          bg="#fff"
          zIndex={1}
          p={4}
          borderBottom="1px"
          borderColor="#e2e8f0"
          boxShadow="sm"
          width="100%"
        >
          <Text fontSize="18px" fontWeight="bold" color="#203150">
            Repositories
          </Text>
        </Box>
        <List spacing={2} p={2}>
          {userRepo && userRepo.map((repo) => (
            <ListItem key={repo.id} p={2} borderBottom="1px" borderColor="#e2e8f0">
              <Text fontWeight="600" color="#2b6cb0">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </Text>
              <Text fontSize="sm" color="#4a5568">{repo.description || "No description"}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
};

export default Profile;
