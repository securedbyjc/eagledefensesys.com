// src/components/HomepageSections.tsx
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/react';

// Reusable component for capability items
const CapabilityItem = ({ children }: { children: React.ReactNode }) => (
  <ListItem>
    <ListIcon as={CheckCircleIcon} color="yellow.500" />
    {children}
  </ListItem>
);

const HomepageSections = () => {
  const aboutBg = useColorModeValue("gray.50", "gray.800");
  const capabilitiesBg = useColorModeValue("white", "gray.900");
  const contactBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Box as="main">
      {/* About Section */}
      <Box as="section" id="about" bg={aboutBg} py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        <Container maxW="6xl">
          <VStack spacing={6} align="start" maxW="4xl">
            <Heading size="lg" color="red.700">About Us</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
              Eagle Defense Systems LLC is a veteran-owned cybersecurity consultancy focused on helping federal and commercial clients meet complex security and compliance objectives. We specialize in translating cybersecurity policy into actionable operations—bridging the gap between leadership vision and technical implementation.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Capabilities Section */}
      <Box as="section" id="capabilities" bg={capabilitiesBg} py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        <Container maxW="6xl">
          <VStack spacing={6} align="start" maxW="4xl">
            <Heading size="lg" color="red.700">Our Capabilities</Heading>
            <List spacing={3} color={textColor}>
              <CapabilityItem>Governance, Risk & Compliance (GRC)</CapabilityItem>
              <CapabilityItem>Cybersecurity Auditing & Controls Assessment</CapabilityItem>
              <CapabilityItem>CMMC Pre-Assessment & Implementation</CapabilityItem>
              <CapabilityItem>Cloud Security Architecture (Azure/GCP)</CapabilityItem>
              <CapabilityItem>Policy & Procedure Development</CapabilityItem>
              <CapabilityItem>Threat Modeling & Zero Trust Strategy</CapabilityItem>
            </List>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" bg={contactBg} py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        <Container maxW="6xl">
          <VStack spacing={6} align="start" maxW="4xl">
            <Heading size="lg" color="red.700">Contact Us</Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
              Ready to connect? Reach out to schedule a demo or speak with a cybersecurity strategist.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="yellow"
              variant="solid"
              size="lg"
              fontWeight="bold"
              px={8}
            >
              Schedule a Demo
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomepageSections;
