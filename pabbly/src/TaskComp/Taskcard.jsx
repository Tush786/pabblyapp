import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { MdEditSquare,MdDelete } from "react-icons/md";


function Taskcard({title,description,taskdate}) {
  console.log(title)
  return (
    <div className='w-[400px]'>
      <Card className="text-left">
  <CardHeader className="flex justify-between items-center">
    <Heading size='md'>Client Report</Heading>
    <Box className="flex justify-center items-center">
    <MdEditSquare/>
    <MdDelete/>
    </Box>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Task 
        </Heading>
        <Text pt='2' fontSize='sm'>
          {title}
        </Text>
      
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Task Sheduled Date
        </Heading>
        <Text pt='2' fontSize='sm'>
         {taskdate}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
         Description
        </Heading>
        <Text pt='2' fontSize='sm'>
     {description}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
    </div>
  )
}

export default Taskcard
