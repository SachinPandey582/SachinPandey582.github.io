import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub  } from "react-icons/bs";
import Typed from "react-typed";
import "../App.css"
export default function About() {
  const handleResume = () => {
    window.open(`https://drive.google.com/file/d/1YfWUwqKsEIGL-rFuGN6AEri6c3m-rhd8/view?usp=sharing`)
    fetch("/Sachin_pandey_Resume.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        // create an object for the file.
        let file = document.createElement("a");
        file.href = fileUrl;
        file.download = "/Sachin_pandey_Resume.pdf";
        file.click();
      });
    });
  };
  const { colorMode  } = useColorMode();
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
                bg: "green.400",
                zIndex: -1,
              }}
            >
              Hi, I am
            </Text>
            <br />
            <Text color={"green.400"} as={"span"}>
              <Typed
                strings={[
                  "Sachin Pandey",
                  "A Full-Stack Developer",
                  "A Problem Solver",
                  "A Tech-Enthusiast",
                  "An Entrepreneur",
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
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.900",
              }}
              onClick={handleResume}
            >
              {/* <Link
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/drive/folders/1-TBHBQjmB1ygTTIPgF7I3PNFT8g0qtxX?usp=sharing"
                target={"_blank"}
              > */}
              My Resume
              {/* </Link> */}
            </Button>
            <Button rounded={"full"}>
              <Link
                style={{ textDecoration: "none" }}
                target={"_blank"}
                href="https://github.com/SachinPandey582?tab=repositories"
              >
                My Projects
              </Link>
            </Button>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button>
              <Link
                href="https://www.linkedin.com/in/sachin-pandey-web582/"
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
        {colorMode === "dark" ? (
          <Image
          borderRadius={50}
            objectFit={"cover"}
            className="zoom "

            width={["xs", "md"]}
            height={["xs", "md"]}
            src={
              "https://i.postimg.cc/nhwgknMc/Professional-photo.jpg"
            }
            />
            ) : (
              <Image 
              
          borderRadius={40}
              alt={"Login Image"}
              className="zoom"
              objectFit={"cover"}
              width={["xs", "md"]}
              height={["xs", "md"]}
              src={
                
                "https://i.postimg.cc/4dmLfY0m/final-professsional-image.jpg"
            }
          />
        )}
      </Flex>
    </Stack>
  );
}
