import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
 
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  Link,
} from '@chakra-ui/react';


import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';


import { BsGithub, BsDiscord, BsPerson, BsYoutube, BsLinkedin } from 'react-icons/bs';

export default function contact() {
  return (
    <Container  maxW="full" mt={0} centerContent overflow="hidden" id="Contact">
      <Flex>
        <Box
          bg="green.600"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 12 }}>
          <Box p={4}>
            <Stack direction={{base:'column', md: 'row'}} gap={10}>
              <Box>
                <Box m='auto' textAlign='center'>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        // width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #ed64a6' }}
                        leftIcon={<MdPhone color="#ed64a6" size="20px" />}>
                        +91-9528124125
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        // width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #ed64a6' }}
                        leftIcon={<MdEmail color="#ed64a6" size="20px" />}>
                        SachinPandey582@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        // width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #ed64a6' }}
                        leftIcon={<MdLocationOn color="#ed64a6" size="20px" />}>
                        Uttarakhand, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <Link href='https://youtu.be/c6ZhmFNE-jw'
                    target={'_blank'}>
                       <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#ed64a6' }}
                      icon={<BsYoutube size="28px" />}
                    />
                    </Link>
                   
                   
                    <Link href='https://github.com/SachinPandey582'
                    target={'_blank'}> 
                    
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#ed64a6' }}
                      icon={<BsGithub size="28px" />}
                      />
                      </Link>

                      <Link href='https://www.linkedin.com/in/sachin-pandey-web582/'
                    target={'_blank'}>
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#ed64a6' }}
                      icon={<BsLinkedin size="28px" />}
                    />
                       </Link>
                  </HStack>
                </Box>
              </Box>



              <Box>
                <Box bg="white" borderRadius="lg" p={5}>
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md"  placeholder='Your Name'/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md"  placeholder='Your Name'/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="pink.400"
                          color="white"
                          _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>

      </Flex>
    </Container>
  );
}