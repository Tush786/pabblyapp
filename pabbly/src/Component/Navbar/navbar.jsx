import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Icon
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  import { MdConnectWithoutContact } from "react-icons/md";
  import { Link as RouterLink } from "react-router-dom";
  
  const Links = ["channels", "about", "posts"];
  
  const NavLink = ({ children }) => (
    <Link
      fontSize="lg"
      as={RouterLink}
      to={children}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        bg: useColorModeValue("blackAlpha.300", "rgba(0, 0, 0, 0.20)")
      }}
      _active={{
        bg: "rgba(0, 0, 0, 0.40)"
      }}
      _focus={{ boxShadow: "none" }}
    >
      {children.toUpperCase()}
    </Link>
  );
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Box
          bg={useColorModeValue("white", "gray.900")}
          px={4}
          fontFamily="monospace"
          borderWidth="1px"
          boxShadow="md"
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box fontSize="2xl" fontWeight="bold">
                <Icon as={MdConnectWithoutContact} marginRight="0.5rem" />
                SEVERLESS APP
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                /*
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  //_focus={{ boxShadow: "0 0 1px 2px rgb(241, 90, 34)" }}
                  _focus={{ boxShadow: "none" }}
                  */
                >
                  <Avatar size={"sm"} bg="grey" />
                </MenuButton>
                <MenuList>
                  <MenuItem
                    _hover={{
                      bg: useColorModeValue("#D3D3D3", "rgba(0, 0, 0, 0.20)")
                    }}
                    _focus={{
                      bg: useColorModeValue("#D3D3D3", "rgba(0, 0, 0, 0.20)")
                    }}
                    /*
                    _active={{
                      bg: useColorModeValue("#D3D3D3", "rgba(0, 0, 0, 0.20)")
                    }}
                    _expanded={{
                      bg: useColorModeValue("#D3D3D3", "rgba(0, 0, 0, 0.20)")
                    }}*/
                  >
                    Link 1
                  </MenuItem>
                  <MenuItem
                    _hover={{
                      bg: useColorModeValue("#D3D3D3", "rgba(0, 0, 0, 0.20)")
                    }}
                  >
                    Link 2
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    _hover={{
                      bg: useColorModeValue("#D3D3D3", "rgba(0, 0, 0, 0.20)")
                    }}
                  >
                    Link 3
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
  
        <Box p={4}>Main Content Here</Box>
      </>
    );
  }
  