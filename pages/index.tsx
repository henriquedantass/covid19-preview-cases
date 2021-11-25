import { Text, Flex, Stack, Button, Input } from "@chakra-ui/react";
import Router from "next/router";
import { Particles } from "../src/components/Particles";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" p="5rem" flexDir="column" position="relative">
      <Particles />
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
      <Text color="gray.300" fontSize="1.6rem" fontWeight="bold" mb="50px">
        Essa aplicação tem como objetivo <br /> prever a quantidade de casos de
        <br />
        covid-19 nos proximos dias
      </Text>
      <Stack zIndex={100} color="gray.400" letterSpacing="0.02em">
        <Text color="blue.primary" fontSize="1.3rem">
          Entendo a logica que foi pensada
        </Text>
        <Text>
          De acordo com os gŕaficos da apresentados no{" "}
          <a
            target="blank"
            href="https://ourworldindata.org/coronavirus-data"
            style={{ color: "#4FB2EF" }}
          >
            Ourworldindata.
          </a>{" "}
          No dia 22 de janeiro de 2020 tivemos 557 casos confirmados no mundo e
          no dia 23 de novembro de 2022 tivemos 257.56 milhões de casos
          confirmados no mundo. A diferença entre essas duas datas é de 256
          milhões 55 mil e 443 casos. A quantidade de dias entre essas duas
          datas é de 671 dias.
        </Text>
        <Text>
          No entanto, levando como um contexto geral é dificil pegar uma média
          aceitavel de quantos % os casos aumentaram por dia devido no ínicio da
          pandemia nem todos os casos serem confirmados por falta de
          acessibilidade dos testes de covid19.
        </Text>
        <Text>
          Sendo assim levando em consideração as datas de 23 de outubro de 2022
          e 23 de novembro de 2022 onde o gráfico se encontra mais estável
          podemos definir uma quantidade média em % para o crescimento dos
          casos. Entre essas datas podemos notar uma diferença de 30 dias e no
          dia 23/10/2022 tivemos um total de 243.80 milhões de casos, no dia
          23/11/2022 estamos com um valor de 258.79 milhões.
        </Text>
        <Text>
          Por fim, uma estimativa de crescimento após os devidos calculos é de{" "}
          {""}
          <span style={{ color: "#4FB2EF" }}>0.3%</span> a{" "}
          <span style={{ color: "#4FB2EF" }}>0.4%</span> por dia.
        </Text>
      </Stack>
    </Flex>
  );
}
