import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";


import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiRedux,
} from "react-icons/si";

import { DiJavascript1 } from "react-icons/di";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Skills() {
  return (
    <Container maxW={"5xl"} py={12} id="Skills">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"green.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            My Skills
          </Text>
          <Heading>I Persist the Following Skills </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Mentioned below are the skillsets which I possess .
          </Text>
          <Flex gap={10}>
            <Box>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
                <Feature
                  icon={<Icon as={SiHtml5} color={"green.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"HTML 5"}
                />
                <Feature
                  icon={<Icon as={SiCss3} color={"green.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"CSS 3"}
                />
                <Feature
                  icon={
                    <Icon as={DiJavascript1} color={"green.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"JavaScript"}
                />
                 <Feature
                  icon={
                    <Icon as={SiTypescript} color={"green.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"TypeScript"}
                />
                
               
              </Stack>
            </Box>
            <Box>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >

            <Feature
                  icon={<Icon as={FaReact} color={"pink.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("pink.100", "pink.900")}
                  text={"React Js"}
                />
                
                <Feature
                  icon={<Icon as={SiRedux} color={"pink.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("pink.100", "pink.900")}
                  text={"Redux"}
                />

           <Feature
                  icon={<Icon as={SiChakraui} color={"pink.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("pink.100", "pink.900")}
                  text={"Chakra UI"}
                />


                <Feature
                  icon={<Icon as={FaGithub} color={"pink.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("pink.100", "pink.900")}
                  text={"Git & Github"}
                />
              
              </Stack>
            </Box>
          </Flex>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.pexels.com/photos/4350767/pexels-photo-4350767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            objectFit={"cover"}
            
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
