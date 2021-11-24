import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function Graphics() {
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
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5],
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
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
      ],
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
      name: "Numero de casos",
      data: [
        319300200, 233456123, 300567123, 353456123, 102980203, 200567109,
        101234870,
      ],
    },
  ];

  return (
    <Chart
      type="line"
      width={1200}
      height={400}
      options={options}
      series={series}
    />
  );
}
