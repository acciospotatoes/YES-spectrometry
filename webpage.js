var layout = {
  title: {
    text: "Reflective Spectrum; ALTA 3-Orange Folder",
    font: {
      family: "Courier New, monospace",
      size: 24
    },
    xref: "paper",
    x: 0.5
  },
  xaxis: {
    title: {
      text: "Color/wavelength(nm)",
      font: {
        family: "Courier New, monospace",
        size: 18,
        color: "#7f7f7f"
      }
    }
  },
  yaxis: {
    title: {
      text: "% Reflectance",
      font: {
        family: "Courier New, monospace",
        size: 18,
        color: "#7f7f7f"
      }
    }
  }
};
TESTER = document.getElementById("tester");
Plotly.newPlot(
  TESTER,
  [
    {
      x: [470, 525, 560, 585, 600, 645, 700, 735, 810, 880, 940],
      y: [
        13.75404531,
        20.76813656,
        30.05865103,
        70.49689441,
        89.48194662,
        102.9950083,
        107.6923077,
        109.7744361,
        111.6013072,
        112.312812,
        112.2047244
      ]
    }
  ],
  layout
);
