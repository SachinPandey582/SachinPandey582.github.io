import {
  Box,
  Center,
  Image,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Tag,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const BlogTags = (props) => {
  return (
    <Flex flexWrap={"wrap"} gap={2} spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="green"
            _hover={{ bgColor: "green.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};

const TechStackTags = (props) => {
  return (
    <Flex flexWrap={"wrap"} gap={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            colorScheme="pink"
            _hover={{ bgColor: "pink.400" }}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </Flex>
  );
};

export default function Card({
  img,
  tag,
  heading,
  content,
  deploy,
  git,
  tsTags,
}) {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        // h={["xl"]}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        className="zoom"
        >
        <Box
        className="cardZoom"
          h={["160px", "210px"]}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image src={img} layout={"fill"} />
        </Box>
        <Stack pt={[1, 20]}>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {heading}
          </Heading>
          <BlogTags tags={tag} />
          <TechStackTags tags={tsTags} />
          <Text color={"gray.500"}>{content}</Text>
        </Stack>
        <Stack direction={"row"} pt={5}>
          <Button
            bg={"green.400"}
            size={"sm"}
            rounded={"full"}
            color={"white"}
            _hover={{ bg: "green.500" }}
            rightIcon={<BsGithub />}
          >
            <Link
              _hover={{ textDecoration: "none" }}
              target={"_blank"}
              href={git}
            >
              Github
            </Link>
          </Button>
          <Button
            bg={"green.400"}
            size={"sm"}
            rounded={"full"}
            color={"white"}
            _hover={{ bg: "green.500" }}
            rightIcon={<BsLink45Deg />}
          >
            <Link
              _hover={{ textDecoration: "none" }}
              target={"_blank"}
              href={deploy}
            >
              Deployment
            </Link>
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
