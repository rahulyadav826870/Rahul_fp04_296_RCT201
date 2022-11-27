import React, { useEffect, useState } from "react";
import { Button, Center, Input, useToast } from "@chakra-ui/react";
import { addPost } from "./posts.api";
import useDealayedFetch from "../../hooks/useDealayedFetch";

const AddPost = ({ onAddPost }) => {
  const toast = useToast();
  // const [loading, setLoading] = useState(false);
  const {loading,error,success , data ,exec} =useDealayedFetch(addPost)
  const [message, setMessage] = useState("");

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
    toast({
      title: "Post added successsfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    })
    onAddPost(data)
  }
},[toast,error,success])
  return (
    <Center>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button onClick={()=>exec({content : message})} colorScheme="green" isLoading={loading}>
        Add
      </Button>
    </Center>
  );
};

export default AddPost;
