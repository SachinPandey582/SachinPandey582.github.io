import React from "react";
import {
  Heading,
  Divider,
  Tag,
  useColorModeValue,
  Container,
  Grid,
  GridItem,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import Card from "./Card";
import { BsGithub, BsLink45Deg } from "react-icons/bs";



const Projects = () => {
  return (
    <Container maxW={"7xl"} p="12" id="Projects">






      {/* // project section..... */}
      <Heading as="h2" marginTop="5">
        My Projects
      </Heading>
      <Divider marginTop="5" />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={"2"}
        
      >
        <GridItem>
          <Card
            img={"/news1.png"}
            tag={["Collaborative"]}
            tsTags={["HTML", "CSS", "JavaScript",
            
              "ES-6", "LocalStorage" ]}
            heading={"DNAINDIA Cloned Website "}
            content={
              "This website is about all types of news & updates. and Also there is a EzMall section there .   This is a collaborative project in a team of 6 member."
            }
            deploy={"https://cerulean-nasturtium-c2ac46.netlify.app/"}
            git={"https://github.com/rahulbnc463/Team_DNA"}
          />
        </GridItem>
        <GridItem>
          <Card
            img={"/Rev.png"}
            tag={["Collaborative"]}
            tsTags={["HTML", "CSS", "JavaScript",
            
              "ES-6", "LocalStorage" ]}
            heading={"REV Cloned Website "}
            content={
              "This is the website on Car rental idea ,here you can rent a car and check out all the features of this website"
            }
            deploy={"https://righteous-glove-4452.vercel.app/"}
            git={"https://github.com/SachinPandey582/righteous-glove-4452"}
          />
        </GridItem>


        {/* // other 2 project */}

 
        <GridItem>
          <Card
            img={"/orbitz.png"}
            tag={["Collaborative"]}
            tsTags={["HTML", "CSS", "JavaScript","typeScript","Redux","React" ,"ES-6","LocalStorage" ]}
            heading={"ORBITZ Cloned Website "}
            content={
              "Orbitz has advocated for safe, inclusive travel for more than 20 years with our historic support of the LGBTQIA+ community. "
            }
            deploy={"https://serious-ink-3246.vercel.app/"}
            git={"https://github.com/VivekJawale/Orbitz-clone"}
          />
        </GridItem>
        <GridItem>
          <Card
            img={"/fitness.png"}
            tag={["Individual"]}
            tsTags={["HTML", "CSS","typeScript","Redux","React"
            
              ,"ES-6", "LocalStorage" ]}
            heading={"FITNESSMANIA Cloned Website "}
            content={
              "This is the Website about the fitness Routine  i have added the admin Panel where admin has the power to delete the user whoever he want"
            }
            deploy={"https://symphonious-begonia-c44e9b.netlify.app/login"}
            git={"https://github.com/SachinPandey582/punchy-car-5123"}
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Projects;
