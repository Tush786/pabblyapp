import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Addtask } from "../redux/action";

function Task() {
  const [taskform, setTaskform] = useState({
    title: "",
    taskdate: "",
    description: "",
  });

  const toast = useToast();
  const dispatch=useDispatch();


  function handleChange(e) {
    const { name, value } = e.target;
    const updatedValue =
      name === "taskdate"
        ? new Date(value).toISOString().split("T")[0]
        : value;
    setTaskform((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
    console.log(taskform);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, taskdate, description } = taskform;
    if (!title) {
      toast({
        title: "All field are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!taskdate ) {
      toast({
        title: "All field are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!description) {
      toast({
        title: "All field are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    console.log(taskform);
    dispatch(Addtask(taskform));
  }

  return (
    <div className="w-[40%] m-auto">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            onChange={handleChange}
            name="title"
            placeholder="Enter title"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Task Schedule Date</FormLabel>
          <Input
            onChange={handleChange}
            name="taskdate"
            type="date"
            placeholder="Enter date"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            onChange={handleChange}
            name="description"
            placeholder="Enter description about task"
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Task;
