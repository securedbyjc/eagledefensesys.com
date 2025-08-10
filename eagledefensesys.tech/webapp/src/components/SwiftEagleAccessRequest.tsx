// src/components/SwiftEagleAccessRequest.tsx
import React from "react";
import { Box, Heading, Text, Link, useColorModeValue } from "@chakra-ui/react";

const SwiftEagleAccessRequest: React.FC = () => {
  const cardBg = useColorModeValue("whiteAlpha.900", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const linkColor = useColorModeValue("red.700", "red.300");

  return (
    <Box
      as="section"
      maxW="3xl"
      mx="auto"
      bg={cardBg}
      borderRadius="2xl"
      boxShadow="xl"
      px={{ base: 4, md: 10 }}
      py={{ base: 6, md: 10 }}
      mt={12}
    >
      <Heading as="h1" size="xl" textAlign="center" mb={2} color="red.700">
        SwiftEagle-AI Access Request
      </Heading>

      <Text textAlign="center" color={textColor} mb={6} fontSize={{ base: "md", md: "lg" }}>
        Please complete the form below to request access to SwiftEagle-AI.
        <br />
        Your request will be reviewed and responded to via email.
      </Text>

      <Box
        as="iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdoRFbl_wwXyuUB3FIyrhVf8JGaegB1ugYDoxVc0ptJL9rCCA/viewform?embedded=true"
        width="100%"
        height="1274px"
        title="SwiftEagle-AI Access Request"
        border="0"
        style={{ border: "none" }}
        mb={2}
      />

      <Text mt={6} color="gray.500" fontSize="sm" textAlign="center">
        For urgent or special requests, contact{" "}
        <Link
          href="mailto:jcollins@eagledefensesys.com"
          color={linkColor}
          fontWeight="semibold"
          _hover={{ textDecoration: "underline" }}
        >
          jcollins@eagledefensesys.com
        </Link>
        .
      </Text>
    </Box>
  );
};

export default SwiftEagleAccessRequest;
