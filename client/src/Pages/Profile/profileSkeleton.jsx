import { Box, Flex, Skeleton, SkeletonCircle, VStack, List, ListItem, HStack } from "@chakra-ui/react";

const ProfileSkeleton = () => {
    return (
        <HStack maxW="6xl" m={'auto'} spacing={8}>
            <Box
                bg="#ddefff"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                w='250px'
                m='auto'
                mt={10}
                textAlign={'center'}
            >
                <VStack
                    bg="#FDFAFA"
                    borderRadius="10px"
                    p={6}
                    textAlign="center"
                >
                    <SkeletonCircle size="120px" mb={4} />
                    <Skeleton height="20px" width="80%" mb={2} />
                    <Skeleton height="16px" width="90%" mb={4} />
                    <Flex justify="center" align="center" my={4}>
                        <Box textAlign="center" mx={2}>
                            <Skeleton height="12px" width="40px" mb={2} />
                            <Skeleton height="14px" width="30px" />
                        </Box>
                        <Box textAlign="center" mx={2}>
                            <Skeleton height="12px" width="40px" mb={2} />
                            <Skeleton height="14px" width="30px" />
                        </Box>
                    </Flex>
                </VStack>
            </Box>

            {/* Repositories Skeleton */}
            <Box mt={10} bg="#fff" borderRadius="10px" boxShadow="md" w='800px' maxH="100vh" overflowY="auto">
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
                    <Skeleton height="20px" width="150px" />
                </Box>
                <List spacing={2} p={2}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <ListItem key={index} p={2} borderBottom="1px" borderColor="#e2e8f0">
                            <Skeleton height="20px" width="70%" mb={1} />
                            <Skeleton height="16px" width="90%" />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </HStack>
    );
}

export default ProfileSkeleton;
