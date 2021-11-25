import dynamic from "next/dynamic";
import { Flex } from "@chakra-ui/react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface GraphicsProps {
  totalCasesOfCovid: number[];
  dailyCasesOfCovid: number[];
  widthOfGraphic: number;
}

export function Graphics({
  totalCasesOfCovid,
  dailyCasesOfCovid,
  widthOfGraphic,
}: GraphicsProps) {
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          yaxis: {
            show: false,
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "right",
            verticalAlign: "top",
          },
        },
      },
    ],
    stroke: {
      width: [5, 7, 5],
      curve: "smooth",
    },
    title: {
      text: "Casos confirmados",
      align: "left",
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex] + "";
      },
    },

    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },

    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };

  const series = [
    {
      name: "Numero total de casos",
      data: totalCasesOfCovid,
    },
    {
      name: "Numero de casos neste dia",
      data: dailyCasesOfCovid,
    },
  ];

  return (
    <Flex w="100%" justifyContent="center">
      <Chart
        type="line"
        width={widthOfGraphic}
        height={400}
        //@ts-ignore
        options={options}
        series={series}
      />
    </Flex>
  );
}
