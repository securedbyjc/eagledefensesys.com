// src/components/LexSentinelAccessRequest.tsx
import React from "react";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const LexSentinelAccessRequest: React.FC = () => {
  const cardBg = useColorModeValue("whiteAlpha.900", "gray.800");

  return (
    <Box
      maxW="xl"
      mx="auto"
      bg={cardBg}
      borderRadius="2xl"
      boxShadow="lg"
      p={{ base: 4, md: 8 }}
      mt={12}
    >
      <Heading as="h1" size="xl" textAlign="center" mb={2} color="red.700">
        LexSentinel AI Access Request
      </Heading>
      <Text textAlign="center" color="gray.700" mb={6}>
        Please complete the form below to request access to LexSentinel AI.<br />
        Your request will be reviewed and you will be contacted by email.
      </Text>
      <Box
        as="iframe"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeCoNOdEV-mQZwktQbkalL686I-Kx5COvC5_uMeWGQir4LsGQ/viewform?embedded=true"
        width="100%"
        height="1274px"
        border="none"
        bg="transparent"
        title="LexSentinel AI Access Request"
        rounded="xl"
      />
      <Text mt={6} color="gray.500" fontSize="sm" textAlign="center">
        For urgent or special requests, contact{" "}
        <Link
          href="mailto:jcollins@eagledefensesys.com"
          color="red.700"
          textDecor="underline"
          fontWeight="semibold"
        >
          jcollins@eagledefensesys.com
        </Link>
        .
      </Text>
    </Box>
  );
};

export default LexSentinelAccessRequest;
