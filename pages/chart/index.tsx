import { useState, useEffect } from "react";
import Router from "next/router";
import {
  Text,
  Flex,
  Input,
  Button,
  useToast,
  useBreakpointValue,
  useDisclosure,
  UseToastOptions,
} from "@chakra-ui/react";
import { Graphics } from "../../src/components/Charts";
import { DrawerMenu } from "../../src/components/Drawer";
import covid19API from "../../src/services/covid19api";

export default function ChartPage() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentCases, setCurrentCases] = useState();
  const [days, setDays] = useState("");
  const [futureCases, setFutureCases] = useState([]);
  const [futureCasesOfThisDay, setFutureCasesOfThisDay] = useState([]);

  const isWideSize = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    covid19API
      .get("/api")
      .then((response) => {
        const data = response.data;
        setCurrentCases(data.confirmed.value);
      })
      .catch(() => {
        shootToast({
          status: "error",
          title: "Desculpe, algo deu errado",
        });
      });
  }, []);

  const shootToast = ({ status, title }: UseToastOptions) => {
    toast({
      title: title,
      status: status,
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  const resetInfos = () => {
    setFutureCases([]);
    setFutureCasesOfThisDay([]);
    setDays("");
  };

  const handleCalculateCasesOfCovid = (value, totalCases) => {
    let days = parseInt(value);
    let currentCases = totalCases;
    const percentage = 0.2;

    if (value === "") {
      shootToast({
        status: "error",
        title: "Digite uma quantidade de dias válida",
      });
    }

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
      shootToast({ status: "success", title: "Simulação concluída" });
    }
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      p={["2rem", "3rem"]}
      position="relative"
    >
      <Flex w="100%" mb="20px">
        <Text color="blue.primary">
          Quantidade de casos confirmados no mundo:{" "}
          <span style={{ color: "#FFF" }}>{currentCases}</span>
        </Text>
      </Flex>
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
          value={days}
          border="1px solid gray"
          w="200px"
          mr="30px"
          onChange={(e) => setDays(e.target.value)}
        />
        <Button
          onClick={() => {
            resetInfos();
            handleCalculateCasesOfCovid(days, currentCases);
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
