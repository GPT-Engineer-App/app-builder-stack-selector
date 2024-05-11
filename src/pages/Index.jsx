import React, { useState } from "react";
import { Container, VStack, Heading, Text, Button, Select, Checkbox, CheckboxGroup, Stack, Divider, Box, SimpleGrid, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [backend, setBackend] = useState("Django");
  const [frontend, setFrontend] = useState("React");
  const [features, setFeatures] = useState([]);
  const [paymentProvider, setPaymentProvider] = useState("Stripe");
  const [authProvider, setAuthProvider] = useState("OAuth");

  const handleFeatureChange = (event) => {
    const { value, checked } = event.target;
    setFeatures((prev) => (checked ? [...prev, value] : prev.filter((f) => f !== value)));
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          Django App Builder
        </Heading>
        <Text>Select your backend and frontend technologies, choose features, and configure your app.</Text>

        <Divider />

        <Box w="full">
          <Heading as="h2" size="lg" mb={4}>
            1. Choose Stack
          </Heading>
          <SimpleGrid columns={2} spacing={10}>
            <FormControl>
              <FormLabel>Backend Technology</FormLabel>
              <Select value={backend} onChange={(e) => setBackend(e.target.value)}>
                <option value="Django">Django</option>
                <option value="Flask">Flask</option>
                <option value="Node.js">Node.js</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Frontend Technology</FormLabel>
              <Select value={frontend} onChange={(e) => setFrontend(e.target.value)}>
                <option value="React">React</option>
                <option value="Vue">Vue</option>
                <option value="Angular">Angular</option>
              </Select>
            </FormControl>
          </SimpleGrid>
        </Box>

        <Divider />

        <Box w="full">
          <Heading as="h2" size="lg" mb={4}>
            2. Select Features
          </Heading>
          <CheckboxGroup colorScheme="green">
            <Stack spacing={2}>
              <Checkbox value="Payments" onChange={handleFeatureChange}>
                Payments
              </Checkbox>
              <Checkbox value="Auth" onChange={handleFeatureChange}>
                Authentication
              </Checkbox>
              <Checkbox value="DataModel" onChange={handleFeatureChange}>
                Data Model Creator
              </Checkbox>
              <Checkbox value="Routes" onChange={handleFeatureChange}>
                Routes
              </Checkbox>
              <Checkbox value="ViewsControllers" onChange={handleFeatureChange}>
                Views/Controllers Mapper
              </Checkbox>
              <Checkbox value="Deployment" onChange={handleFeatureChange}>
                Deployment Options
              </Checkbox>
              <Checkbox value="Preview" onChange={handleFeatureChange}>
                Preview
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>

        <Divider />

        <Box w="full">
          <Heading as="h2" size="lg" mb={4}>
            3. Configure Features
          </Heading>
          {features.includes("Payments") && (
            <FormControl mb={4}>
              <FormLabel>Payment Provider</FormLabel>
              <Select value={paymentProvider} onChange={(e) => setPaymentProvider(e.target.value)}>
                <option value="Stripe">Stripe</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>
          )}
          {features.includes("Auth") && (
            <FormControl mb={4}>
              <FormLabel>Authentication Provider</FormLabel>
              <Select value={authProvider} onChange={(e) => setAuthProvider(e.target.value)}>
                <option value="Okta">Okta</option>
                <option value="OAuth">OAuth</option>
              </Select>
            </FormControl>
          )}
        </Box>

        <Button leftIcon={<FaRocket />} colorScheme="blue" size="lg">
          Build My App
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
