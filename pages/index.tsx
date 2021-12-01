import Router from "next/router";
import { Particles } from "../src/components/Particles";
import {
  Text,
  Flex,
  Stack,
  Button,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { DrawerMenu } from "../src/components/Drawer";

export default function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isWideSize = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100vw"
      h="100vh"
      p={["1rem 2rem", "5rem"]}
      flexDir="column"
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
          onClick={() => Router.push("/chart")}
        >
          Calcular uma estimativa
        </Button>
      ) : (
        <DrawerMenu onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
      )}

      <Text
        color="gray.300"
        fontSize="1.6rem"
        fontWeight="bold"
        w={["", "50%"]}
        mb={["20px", "50px"]}
      >
        Essa aplicação tem como objetivo prever a quantidade de casos de
        covid-19 nos proximos dias
      </Text>
      <Stack zIndex={100} color="gray.400" letterSpacing="0.02em">
        <Text color="blue.primary" fontSize="1.3rem">
          Entendendo a logica que foi usada:
        </Text>
        <Text>
          De acordo com os gŕaficos apresentados no{" "}
          <a
            target="blank"
            href="https://ourworldindata.org/coronavirus-data"
            style={{ color: "#4FB2EF" }}
          >
            Ourworldindata.
          </a>{" "}
          No dia 22 de janeiro de 2020 tivemos 557 casos confirmados no mundo e
          no dia 23 de novembro de 2022 tivemos 257.56 milhões de casos
          confirmados. A diferença entre essas duas datas é de 256 milhões 55
          mil e 443 casos. A quantidade de dias entre essas duas datas é de 671
          dias.
        </Text>
        <Text>
          No entanto, levando como um contexto geral é dificil pegar uma média
          aceitavel de quantos % os casos aumentaram por dia devido no ínicio da
          pandemia nem todos os casos serem confirmados por falta de
          acessibilidade dos testes de covid19 e eles serem valores bem maiores
          por estar ainda no ínicio da pandemia
        </Text>
        <Text>
          Sendo assim foi levado em consideração as datas de 23 de outubro de
          2022 e 23 de novembro de 2022 onde o gráfico se encontra mais estável
          podemos definir uma quantidade média em % para o crescimento dos
          casos. Entre essas datas podemos notar uma diferença de 30 dias e no
          dia inicial (23/10/2022) tivemos um total de 243.80 milhões de casos,
          já no dia final (23/11/2022) estamos com um valor de 258.79 milhões.
        </Text>
        <Text>
          Por fim, uma estimativa de crescimento após os devidos calculos é de
          0.2% ao dia, tendo variações entre 0.15% e 0.26%. Sendo assim, para os
          calculos da aplicação serão utilizados os casos atuais sendo 258.79
          milhões e uma variação de 0.2% por dia.
        </Text>
      </Stack>
    </Flex>
  );
}
