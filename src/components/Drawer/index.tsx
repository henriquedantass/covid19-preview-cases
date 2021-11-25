import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import Router from "next/router";

export const DrawerMenu = ({ onOpen, onClose, isOpen }) => {
  const btnRef = useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="Search database"
        icon={<GiHamburgerMenu />}
        onClick={onOpen}
        colorScheme="none"
        size="lg"
        w="20px"
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.800" backdropFilter="10px">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="gray.50">Menu</DrawerHeader>
          <DrawerBody>
            <Stack>
              <Button
                w="fit-content"
                colorScheme="none"
                color="blue.primary"
                onClick={() => Router.push("/chart")}
              >
                Calcular uma estimativa
              </Button>
              <Button
                w="fit-content"
                colorScheme="none"
                color="blue.primary"
                onClick={() => Router.push("/")}
              >
                Voltar para home
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
