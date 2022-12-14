import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Typed from "react-typed";

export default function About() {

  const handleResume = () => {
    fetch("/Sachin_pandey_resume.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        // create an object for the file.
        let file = document.createElement("a");
        file.href = fileUrl;
        file.download = "/Sachin_pandey_resume.pdf";
        file.click();
      });
    });
  };


  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      pt={10}
      id="About"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"xl"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                // height: useBreakpointValue({ base: "20%", md: "30%" }),
                // position: "absolute",
                // bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Hi, I Am
            </Text>
            <br />
            <Text color={"red.400"} as={"span"}>
              <Typed
                strings={[
                  "Sachin Pandey",
                  "A Full-Stack Developer",
                  "A Tech-Enthusiast",
                  
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
              ></Typed>
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
          Motivated and innovative aspiring full-stack web developer
with hands-on experience in building websites with MERN
stack and various web technologies including HTML, CSS, and
JS. Curious to learn about emerging web technologies. Looking
forward to making a significant contribution to an organization
through dedicated effort.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"red.400"}
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
              onClick={handleResume}
            >
              
              My Resume
            
            </Button>
            <Button rounded={"full"}>
              <Link
                style={{ textDecoration: "none" }}
                target={"_blank"}
                href="https://github.com/pgariya?tab=repositories"
              >
                My Projects
              </Link>
            </Button>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button>
              <Link
                href="https://www.linkedin.com/in/prakash-gariya-a7580a239/"
                target={"_blank"}
              >
                <BsLinkedin />
              </Link>
            </Button>
            
            <Button>
              <Link href="https://github.com/SachinPandey582" target={"_blank"}>
                <BsGithub />
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent={"center"}>
       
          <Image
          borderRadius={50}
            objectFit={"cover"}
            className="zoom"
            width={["xs", "md"]}
            height={["xs", "md"]}
            src={
              "/1111.jpg"
            }
            />
            
        
      </Flex>
   ??</Stack>
????);
}