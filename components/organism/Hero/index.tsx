import React from "react";
import useSound from 'use-sound';
import Fade from 'react-reveal/Fade';
import { FaTwitter } from 'react-icons/fa';
import { DownloadIcon } from '@chakra-ui/icons';
import style from '@styles/Gradient.module.css';
import { Container, Box, Heading, Link, Text,Stack, Button,Center } from "@chakra-ui/react";

const Hero : React.FC = props =>{

    const [play, { stop }] = useSound("/sounds/pop.mp3");

    return (
        <>
            <Container maxW="7xl" centerContent paddingTop={{ base :"7", md:"20", lg:"40"}} paddingLeft={{ base :"7", md:"20", lg:"40"}} paddingRight={{ base :"7", md:"20", lg:"40"}} paddingBottom={{ base :"20"}} minH="90vh">
                <Box mt={{base:"44", md:"28", lg:"10"}}>
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <Heading as="h1" textAlign="center" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xl", md:"3xl", sm:"xl", lg:"6xl"}}>
                            Welcome to Vihermawan's, He is a  <Link className={style.transition} href="#" bgClip="text">Developer</Link> also <Link className={style.transition} href="#" bgClip="text">Student</Link> who love to learn new things 
                        </Heading>
                    </Fade>
                    <Fade duration={600} distance="30px" fraction={0.4} bottom>
                        <Text textAlign="center" mt={{ base :"1.5"}} fontSize={{ base :"small", md:"medium", lg:"medium"}}> He also a workaholic person, and have 2 experience as Fullstack Developer. If you have any chance to collaborate or project he will glad to hear it.</Text>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Center mt="2.5">
                            <Stack direction="row" spacing={4}>
                                <Button leftIcon={<DownloadIcon />} colorScheme="teal" variant="solid" size="sm" onClick={()=> play()}>
                                    Portofolio
                                </Button>
                                <Button rightIcon={<FaTwitter />} colorScheme="teal" variant="outline" size="sm" onClick={()=> play()}>
                                    Connect
                                </Button>
                            </Stack>
                        </Center>
                    </Fade>
                </Box>
            </Container>
        </>
    );
}

export default Hero;