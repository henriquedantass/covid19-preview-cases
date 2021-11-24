import { Text, Flex, Input, Button } from "@chakra-ui/react";
import Router from "next/router";
import { Graphics } from "../../src/components/Charts";
import { Particles } from "../../src/components/Particles";

export default function ChartPage() {
  return (
    <Flex w="100vw" h="100vh" flexDir="column" p="5rem" position="relative">
      <Particles />
      <Button
        colorScheme="none"
        color="blue.primary"
        position="absolute"
        right="80px"
        onClick={() => Router.push("/")}
      >
        Voltar
      </Button>
      <Text fontSize="1.2rem" color="blue.primary" textAlign="center" mb="20px">
        Digite a quantidade de dias e veja o gŕafico
      </Text>
      <Flex w="100%" justifyContent="center">
        <Input type="number" border="1px solid gray" w="200px" mr="30px" />
        <Button colorScheme="none" border="2px solid gray" color="blue.primary">
          Calcular
        </Button>
      </Flex>
      <Flex w="100%" h="100%" mt="20px">
        <Graphics />
      </Flex>
    </Flex>
  );
}
