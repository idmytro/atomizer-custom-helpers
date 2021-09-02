module.exports = [
  {
    type: "pattern",
    name: "Inset",
    matcher: "Inset",
    allowParamToValue: true,
    styles: {
      top: "$0",
      left: "$0",
      bottom: "$0",
      right: "$0"
    }
  },
  {
    type: "pattern",
    name: "InsetX",
    matcher: "InsetX",
    allowParamToValue: true,
    styles: {
      left: "$0",
      right: "$0"
    }
  },
  {
    type: "pattern",
    name: "InsetY",
    matcher: "InsetY",
    allowParamToValue: true,
    styles: {
      top: "$0",
      bottom: "$0"
    }
  },
];
