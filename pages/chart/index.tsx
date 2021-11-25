import { useState } from "react";
import Router from "next/router";
import {
  Text,
  Flex,
  Input,
  Button,
  useToast,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Graphics } from "../../src/components/Charts";
import { Particles } from "../../src/components/Particles";
import { DrawerMenu } from "../../src/components/Drawer";

export default function ChartPage() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [days, setDays] = useState<string>("");
  const [futureCases, setFutureCases] = useState([]);
  const [futureCasesOfThisDay, setFutureCasesOfThisDay] = useState([]);

  const isWideSize = useBreakpointValue({
    base: false,
    lg: true,
  });

  const toastParams = {
    title: "Simulação concluida",
    status: "success",
    duration: 9000,
    isClosable: true,
    position: "top-right",
  };

  /**
   * FUNÇÃO PARA PREVER OS CASOS DE COVID-19
   * O VALOR DE CASOS CONFIRMADOS NO MUNDO FOI CONSIDERADO O DO DIA 23/11/2022 QUE É O DIA
   * EM QUE EU INICIEI ESSE DESAFIO.
   *
   *
   * PARA EVITAR CRIAR UM NOVO STATE NO REACT A MINHA FUNÇÃO RECEBE ALÉM DO NÚMERO DE DIAS
   * UMA QUANTIDADE INICIAL DE CASOS NO DIA QUE FOI DEFINIDO A DA DATA EM QUE INICIEI O DESAFIO
   */

  const shootToast = () => {
    toast({
      title: "Simulação concluida",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  const handleCalculateCasesOfCovid = (value, totalCases) => {
    let days = parseInt(value);
    let currentCases = totalCases;
    const percentage = Math.random() * (0.4 - 0.3) + 0.3;

    if (days > 0) {
      const newCases = currentCases * (percentage / 100) + currentCases;
      const difference = newCases - currentCases;
      const newTotalCases = currentCases + difference;
      const decreaseDays = days - 1;

      setFutureCases((oldState) => [...oldState, Math.ceil(newTotalCases)]);

      setFutureCasesOfThisDay((oldState) => [
        ...oldState,
        Math.ceil(difference),
      ]);

      handleCalculateCasesOfCovid(decreaseDays, newTotalCases);
    }

    if (days === 0) {
      shootToast();
    }
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      p={["2rem", "5rem"]}
      position="relative"
    >
      {isWideSize && <Particles />}
      {isWideSize ? (
        <Button
          w="fit-content"
          position="absolute"
          right="50px"
          colorScheme="none"
          color="blue.primary"
          onClick={() => Router.push("/")}
        >
          Voltar para home
        </Button>
      ) : (
        <DrawerMenu onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
      )}
      <Text fontSize="1.2rem" color="blue.primary" textAlign="center" mb="20px">
        Digite a quantidade de dias e veja o gŕafico
      </Text>
      <Flex w="100%" justifyContent="center">
        <Input
          color="white"
          type="number"
          border="1px solid gray"
          w="200px"
          mr="30px"
          onChange={(e) => setDays(e.target.value)}
        />
        <Button
          onClick={() => {
            setFutureCases([]);
            setFutureCasesOfThisDay([]);
            handleCalculateCasesOfCovid(days, 258079000);
          }}
          colorScheme="none"
          border="2px solid gray"
          color="blue.primary"
          disabled={parseInt(days) <= 0 ? true : false}
        >
          Calcular
        </Button>
      </Flex>
      <Flex w="100%" h="100%" mt="20px">
        <Graphics
          dailyCasesOfCovid={futureCasesOfThisDay}
          totalCasesOfCovid={futureCases}
          widthOfGraphic={isWideSize ? 1000 : 350}
        />
      </Flex>
    </Flex>
  );
}
