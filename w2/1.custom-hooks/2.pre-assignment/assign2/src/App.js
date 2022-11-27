import React from "react";
import { Box, Center, Divider, } from "@chakra-ui/react";

import Posts from "./components/Posts/Posts";

function App() {
  return (
    <Box>
      
      <Divider my={4} />
      <Center>
        <Posts />
      </Center>
    </Box>
  );
}

export default App;
