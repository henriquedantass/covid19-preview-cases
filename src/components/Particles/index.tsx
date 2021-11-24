import Particle from "react-particles-js";
import { Box } from "@chakra-ui/react";

export const Particles = () => {
  return (
    <Box w="100vw" h="100%" position="absolute" zIndex="0">
      <Particle
        params={{
          particles: {
            number: {
              value: 15,
            },
            size: {
              value: 3,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
          },
        }}
      />
    </Box>
  );
};
