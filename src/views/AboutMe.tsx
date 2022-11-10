import { Box, Container, Grid, theme } from "@chakra-ui/react"

const SKILLS = ['Javascript', 'React', 'Git', 'Python', 'Django', 'Rust']

export const AboutMe = () => (
  <Container centerContent={false} margin='1'>
    <Box textAlign='left'>
      <Box fontSize='30px' textAlign='left' paddingTop='10' paddingBottom='2'>
        Hi, I'm Dameli Ushbayeva!
      </Box>
      <p>I'm a Software Engineer at Sentry. I'm a big fan of Functional Programming and super fast applications ⚡</p>
    </Box>
    <Box textAlign='left'>
      <Box paddingTop='10' paddingBottom='2' fontWeight='semibold'>
        Education
      </Box>
      <Box fontSize='medium'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Box>
    </Box>

    <Box textAlign='left' paddingBottom={6}>
      <Box paddingTop='10' paddingBottom='2' fontWeight='semibold'>
        Skills
      </Box>
      <Box fontSize='medium'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Box>
    </Box>
    <Grid templateColumns='repeat(3, 1fr)' gap={1}>
      {SKILLS.map((skill, index) => {
        return (<Box key={index} bg='green' w='100%' p={4} color='white'>
          {skill}
        </Box>)
      })}
    </Grid>
  </Container>
)
