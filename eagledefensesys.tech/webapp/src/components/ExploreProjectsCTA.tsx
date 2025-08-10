// src/components/ExploreProjectsCTA.tsx
import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ExploreProjectsCTA = () => {
  // Optional dynamic mode-aware colors
  const bg = useColorModeValue("yellow.50", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box
      bg={bg}
      py={{ base: 12, md: 16 }}
      px={{ base: 4, md: 6 }}
      textAlign="center"
    >
      <Stack spacing={6} maxW="4xl" mx="auto">
        <Heading as="h3" size="lg" color="red.700">
          Explore Our Flagship Projects
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
          From AI-powered compliance automation to Zero Trust infrastructure,
          our innovations support scalable and audit-ready builds tailored for
          GovCon clients.
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={4}
          justify="center"
        >
          <Button
            as={RouterLink}
            to="/projects"
            colorScheme="yellow"
            size="lg"
            fontWeight="bold"
            px={8}
          >
            View Our Tech Portfolio
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExploreProjectsCTA;
