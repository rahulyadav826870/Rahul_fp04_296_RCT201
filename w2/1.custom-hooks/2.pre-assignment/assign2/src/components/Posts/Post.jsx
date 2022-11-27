import React, { useEffect } from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { deletePost } from "./posts.api";
import useDealayedFetch from "../../hooks/useDealayedFetch";

const Post = ({ id, content, onDelete }) => {
  const toast = useToast();
  // const [loading, setLoading] = useState(false);
  const {loading,error,success,exec} =useDealayedFetch(deletePost)



  useEffect(()=>{
    if(error){
      toast({
        title: "Error Occurred while fetching data",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
    }else if(success){
      onDelete(id)
      toast({
        title: "Deleted successsfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })

    }
  },[toast,error,success])

  return (
    <Flex gap={2}>
      <Box>{content}</Box>
      <Button
        size="sm"
        isLoading={loading}
        loadingText="Deleting..."
        onClick={()=>exec(id)}
      >
        Delete
      </Button>
    </Flex>
  );
};

export default Post;
