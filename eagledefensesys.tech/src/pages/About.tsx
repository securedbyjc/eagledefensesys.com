// src/pages/About.tsx
import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Flex,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FaShieldAlt, FaRobot, FaUserShield, FaFlag } from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Security-First, Always",
    desc: "We design infrastructure and workflows to meet CMMC, NIST 800-53, and FedRAMP controls from day one—no bolt-on fixes or afterthoughts.",
  },
  {
    icon: FaRobot,
    title: "AI-Driven Compliance",
    desc: "Our custom technology leverages advanced analytics and machine learning to accelerate compliance mapping, threat detection, and reporting.",
  },
  {
    icon: FaFlag,
    title: "GovCon Focus",
    desc: "We specialize in the unique requirements of government contractors, including multi-jurisdictional mandates, Zero Trust architectures, and vendor due diligence.",
  },
  {
    icon: FaUserShield,
    title: "Veteran Leadership",
    desc: "Our team is led by former military leaders who understand mission assurance, risk, and the demands of both public and private sectors.",
  },
];

const About = () => {
  return (
    <Box bg="gray.50" minH="100vh" py={{ base: 12, md: 20 }}>
      <Container maxW="5xl">
        <Stack spacing={12}>
          {/* Title & Mission */}
          <Stack spacing={6} textAlign="center">
            <Heading size="2xl" color="yellow.600">
              About Eagle Defense Systems
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.700">
              Eagle Defense Systems LLC is a veteran-owned cybersecurity consultancy dedicated to helping federal agencies and commercial enterprises secure their digital future. Founded by seasoned professionals with decades of experience in military, compliance, and cloud security operations, our mission is to bridge the gap between regulatory mandates and real-world defense.
            </Text>
          </Stack>

          <Divider />

          {/* Vision & Features */}
          <Box bg="white" borderRadius="xl" boxShadow="lg" p={{ base: 6, md: 10 }}>
            <Heading as="h2" size="lg" color="yellow.600" mb={4}>
              Our Vision
            </Heading>
            <Text fontSize="md" color="gray.800" mb={6}>
              To be the trusted partner for organizations that demand proactive, audit-ready, and resilient cybersecurity solutions.
            </Text>

            <Stack spacing={6}>
              {features.map((feature, idx) => (
                <Flex key={idx} align="flex-start">
                  <Icon
                    as={feature.icon}
                    boxSize={8}
                    color="yellow.500"
                    mt={1}
                    mr={4}
                    aria-hidden
                  />
                  <Box>
                    <Heading as="h3" size="md" color="gray.900" mb={1}>
                      {feature.title}
                    </Heading>
                    <Text color="gray.600">{feature.desc}</Text>
                  </Box>
                </Flex>
              ))}
            </Stack>
          </Box>

          <Divider />

          {/* Final Statement */}
          <Stack textAlign="center" spacing={4}>
            <Heading as="h2" size="lg" color="yellow.600">
              Why Choose Eagle Defense Systems?
            </Heading>
            <Text fontSize="lg" color="gray.800">
              We don’t just prepare you for audits—we build your operations to <strong>pass them by design</strong>.
            </Text>
            <Text color="gray.700">
              Whether you’re a startup seeking your first federal contract or a mature enterprise defending your compliance posture, Eagle Defense Systems delivers tailored, scalable, and actionable solutions.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
