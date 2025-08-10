import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  SimpleGrid,
  List,
  ListItem,
  Button,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

const services = [
  "Cybersecurity Program Design & Implementation",
  "CMMC, NIST, and FedRAMP Pre-Assessment & Gap Analysis",
  "Cloud Security Architecture (GCP, AWS, Azure)",
  "Third-Party & Supply Chain Risk Assessments",
  "Policy, Procedures, and SSP/POA&M Development",
  "Project Management (PMI/PMP-aligned)",
  "Compliance Automation (AI-powered monitoring & reporting)",
  "Incident Response Planning & Tabletop Exercises",
  "Security Awareness Training",
  "Technical Bid/Proposal & Compliance Support",
  "Access to CMMC Certified Professionals (CCP, CCA)",
];

const competencies = [
  "Governance, Risk & Compliance (GRC)",
  "Zero Trust Security Frameworks",
  "Regulatory Control Mapping (NIST, CMMC, ISO 27001)",
  "Audit Preparation & Readiness",
  "Automated Threat Detection & Analytics",
  "Vendor Due Diligence",
  "Cyber Resilience & Recovery",
];

const differentiators = [
  "Veteran-led, DoD and federal expertise",
  "AI-powered internal tools for compliance and threat management",
  "Network of CMMC Certified Professionals and Assessors (CCP, CCA)",
  "Agile, cloud-native approach for startups and agencies",
  "Direct support for bid/proposal cycles",
];

const naics = [
  "541519 – Other Computer Related Services",
  "541512 – Computer Systems Design Services",
  "541511 – Custom Computer Programming Services",
  "541690 – Other Scientific & Technical Consulting",
];

const certifications = [
  "CompTIA Security+",
  "Akylade Certified Cyber Resilience Fundamentals (A/CCRF)",
  "Certified Scrum Master (CSM)",
  "Frontend Web Development Certification – The Tech Academy",
];

const Capabilities = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardColor = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("yellow.600", "yellow.400");
  const textColor = useColorModeValue("gray.700", "gray.200");

  const renderList = (items: string[]) => (
    <List spacing={2}>{items.map((item, i) => <ListItem key={i}>• {item}</ListItem>)}</List>
  );

  return (
    <Box bg={bgColor} minH="100vh" py={{ base: 8, md: 16 }}>
      <Container maxW="6xl">
        <Stack spacing={10} align="center">
          <Stack textAlign="center">
            <Heading as="h1" size="2xl" color="yellow.500" fontWeight="bold">
              Eagle Defense Systems LLC
            </Heading>
            <Text fontSize="lg" color={textColor}>
              Veteran-Owned | Cybersecurity, Compliance, & Cloud Security Solutions
            </Text>
          </Stack>

          <Divider />

          <Stack align="center" spacing={3}>
            <Button
              colorScheme="yellow"
              as="a"
              href="/assets/EDS-Capabilities-Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              View Capability Statement (PDF)
            </Button>
            <Button
              colorScheme="yellow"
              variant="outline"
              as="a"
              href="/assets/EDS-Capabilities-Statement.pdf"
              download
              size="md"
            >
              Download PDF
            </Button>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6}>
              <Heading size="lg" color={headingColor} mb={2}>Our Services</Heading>
              {renderList(services)}
            </Box>

            <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6}>
              <Heading size="lg" color={headingColor} mb={2}>Core Competencies</Heading>
              {renderList(competencies)}
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6}>
              <Heading size="lg" color={headingColor} mb={2}>Differentiators</Heading>
              {renderList(differentiators)}
            </Box>

            <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6}>
              <Heading size="lg" color={headingColor} mb={2}>NAICS Codes</Heading>
              {renderList(naics)}
            </Box>
          </SimpleGrid>

          <Box bg={cardColor} borderRadius="xl" boxShadow="md" p={6} w="100%" maxW="3xl">
            <Heading size="lg" color={headingColor} mb={2}>Certifications & Licenses</Heading>
            {renderList(certifications)}
          </Box>

          <Box textAlign="center" w="100%">
            <Heading as="h2" size="md" color={headingColor} mb={2}>Past Performance</Heading>
            <Text color={textColor}>Available Upon Request</Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Capabilities;
