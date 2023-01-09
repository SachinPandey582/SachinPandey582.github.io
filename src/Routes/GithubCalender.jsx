import { Box, Center, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitCalendar = () => {
  return (
    <div>
      <Heading
        size={"2xl"}
        textAlign={"center"}
        textTransform={"capitalize"}
        ml={10}
      >
        Git Calendar
      </Heading>
      <Center m='auto' mt={10} mb={10} w='95%'>
        <GitHubCalendar username="SachinPandey582" blockSize={15} blockMargin={5} fontSize={16}/>
      </Center>


      <Center  mb="25px" mt="5rem" >
        <Image src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=SachinPandey582&theme=github" />
      </Center>
      <Center>
        <SimpleGrid columns={[1, 2, 2, 2]} spacing={10}>
          <Box>
            <Image src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=SachinPandey582&theme=github" />
          </Box>
          <Box mb="1rem">
            <Image src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=SachinPandey582&theme=github&utcOffset=8" />
          </Box>
        </SimpleGrid>
        </Center>







    </div>
  );
};

export default GitCalendar;