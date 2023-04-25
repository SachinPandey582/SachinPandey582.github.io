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
  Box,
} from "@chakra-ui/react";
import Card from "./Card";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import ProjectCard from "./NewCard";
;

const Projects = () => {

  const html = `https://i.postimg.cc/fRbKFQ8X/Html.png`;

  const css = `https://i.postimg.cc/VNpDnZBt/Css.png`;
  const react = `https://i.postimg.cc/mkwYXmM8/react.png`;
  const redux = `https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png`;
  // const node=`https://seeklogo.com/images/N/node-node-js-logo-81A4CC16D2-seeklogo.com.png`
  const js = `https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png`;
  const git = `https://i.postimg.cc/hPcMLdx2/git.png`;
  const github = `https://i.postimg.cc/rySQRJdd/github.png`;
  const next = `https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png`;
  const typescript = `https://i.postimg.cc/4Nfb7TkM/typescript.png`;
  const cypress = `https://i.postimg.cc/sx9mFjFP/cypress1.webp`;
  const chakra = `https://i.postimg.cc/BnhhQnjM/chakra.png`;
  const express = `https://i.postimg.cc/G2DzQPq5/express.png`;
  const vs = `https://i.postimg.cc/CKqjThkZ/vscode.png`;
  // const npm=`https://i.postimg.cc/1tDc6mzx/npm-node-package-manager.png`
  const dsa = `https://i.postimg.cc/15BBJ3rs/Dsa.png`;
  const kitten=`https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png`




  let spritsVilla = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/DwQGG2Yq/Screenshot-from-2023-02-27-12-23-15.png",
        },
        {
          img: "https://i.postimg.cc/kgP8DVwJ/Screenshot-from-2023-02-27-12-23-42.png",
        },
        {
          img: "https://i.postimg.cc/MHhB7XSY/Screenshot-from-2023-02-27-12-24-47.pngg",
        },
        {
          img: "https://i.postimg.cc/7HwVmR3H/Screenshot-from-2023-02-27-12-24-36.png",
        },
        {
          img: "https://i.postimg.cc/qqtn6y9R/Screenshot-from-2023-02-27-12-22-57.png",
        },
        {
          img:"https://i.postimg.cc/SK6rfnmd/Screenshot-from-2023-02-27-13-04-15.png"
        },
        {
          img:"https://i.postimg.cc/DZ7cj7ZT/Screenshot-from-2023-02-27-13-04-47.png"
        },{
          img:"https://i.postimg.cc/5tnFPsJy/Screenshot-from-2023-02-27-12-26-02.png"
        }
      ],
      des: ` Spirits Villa offer you the convenience of shopping for everything that you need for your home - household cleaning items & personal care products from a single virtual store.`,
      title: "Spirits Villa",
      techstack: [
        { src: react, name: "React" },
        { src: chakra, name: "Chakra" },
        { src: redux, name: "Redux" },
        { src: express, name: "Express" },
        // { src: mongo, name: "MongoDb" },
        // { src: node, name: "Node JS" },
      ],
      live: `https://spirits-villa-git-main-hanumat-sharan.vercel.app/`,
      github: `https://github.com/HANUMAT-SHARAN/Spirits_Villa`,
      dplink:
        "https://drive.google.com/file/d/1ZxLPLoWJSycKiZG8YNNpk2NBx-a2IYvE/view?usp=sharing",
    },
  ]


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
            img={"https://i.postimg.cc/SK6rfnmd/Screenshot-from-2023-02-27-13-04-15.png"}
            tag={["Collaborative"]}
            tsTags={["HTML", "CSS", "JavaScript",
            
              "ES-6", "LocalStorage","React","Redux","Mongodb", ]}
            heading={"CraftsVilla Cloned Website "}
            content={
              "Sprits Villa offer you the convenience of shopping for everything that you need for your home - be it fresh fruits & vegetables, rice, dals, oil, packaged food, dairy item, frozen, pet food, household cleaning items & personal care products from a single virtual store."
            }
            deploy={"https://natural-volcano-6886-sy8i.vercel.app/"}
            git={"https://github.com/SachinPandey582/Natural-volcano-6886"}
          />
        </GridItem>


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
            deploy={"https://symphonious-begonia-c44e9b.netlify.app/"}
            git={"https://github.com/SachinPandey582/punchy-car-5123"}
          />
        </GridItem>
      
      </Grid>
      {/* <Box  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" py={"5"}>
      <ProjectCard arr={spritsVilla}/>

        </Box> */}
    </Container>
  );
};

export default Projects;
