// src/components/CallToAction.tsx
import React from "react";
import { Box, Button, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const CallToAction = () => {
  const bg = useColorModeValue("yellow.400", "yellow.500");
  const textColor = useColorModeValue("black", "gray.900");

  return (
    <Box bg={bg} color={textColor} py={{ base: 8, md: 12 }} px={{ base: 4, md: 6 }} textAlign="center">
      <Heading mb={4} color="red.700">
        Ready to secure your next contract?
      </Heading>
      <Text fontSize={{ base: "md", md: "lg" }} mb={6}>
        Let’s walk you through how Eagle Defense Systems can help.
      </Text>
      <Stack direction={{ base: "column", sm: "row" }} spacing={4} justify="center">
        <Button
          as={RouterLink}
          to="/contact"
          colorScheme="red"
          variant="solid"
          size="lg"
          fontWeight="bold"
        >
          Schedule a Demo
        </Button>
        <Button
          as={RouterLink}
          to="/capabilities"
          colorScheme="red"
          variant="outline"
          size="lg"
          fontWeight="bold"
        >
          Learn More
        </Button>
      </Stack>
    </Box>
  );
};

export default CallToAction;
