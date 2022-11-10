import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  extendTheme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { NavBar } from "./components/NavBar"

const colors = {
  green: '#335c67',
  yellow100: '#fff3b0',
  yellow200: '#e09f3e',
  red: '#9e2a2b',
  brown: '#540b0e',
}

const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Raleway', sans-serif`,
}

const theme = extendTheme({ colors, fonts })

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <NavBar></NavBar>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Grid>
    </Box>
  </ChakraProvider>
)
