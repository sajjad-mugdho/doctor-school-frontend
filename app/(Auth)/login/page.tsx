"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

type Props = {};

const Login = (props: Props) => {
  const handleSignIn = async () => {
    try {
      await signIn("github");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box w="full" maxW="md" mx="auto" p={8} rounded="lg" shadow="lg">
        <Heading as="h1" size="lg" textAlign="center" mb={4}>
          Welcome Back
        </Heading>
        <Text textAlign="center" mb={6}>
          Login to access your account
        </Text>
        <Button
          w="full"
          size="lg"
          colorScheme="gray"
          variant="outline"
          leftIcon={<FaGithub />}
          onClick={() => handleSignIn()}
        >
          Sign in with GitHub
        </Button>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </Box>
    </Flex>
  );
};

export default Login;
