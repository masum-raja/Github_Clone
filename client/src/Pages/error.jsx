import { Box, Text, Icon } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

const ErrorPage = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={5}
            borderRadius="md"
            bg="red.100"
            border="1px"
            borderColor="red.300"
            mt={4}
        >
            <Icon as={WarningIcon} boxSize={6} color="red.500" mr={2} />
            <Text fontSize="lg" fontWeight="bold" color="red.600">
                User Not Found
            </Text>
        </Box>
    )
}

export default ErrorPage