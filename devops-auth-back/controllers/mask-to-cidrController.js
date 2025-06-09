const ip = require("ip");

exports.maskToCidr = (req, res) => {
  const mask = req.query.value;

  if (!ip.isV4Format(mask)) {
    return res.status(400).json({
      error: "Invalid subnet mask format. Example: 255.255.255.0",
    });
  }

  try {
    cidr = mask
      .split(".")
      .map(Number)
      .map((num) => num.toString(2))
      .map((bin) => bin.split("1").length - 1)
      .reduce((a, b) => a + b, 0);
    // const cidr = ip.maskToPrefixLength(mask);
    res.status(200).json({
      function: "maskToCidr",
      input: mask,
      output: cidr,
    });
  } catch (err) {
    res.status(400).json({
      error: "Could not convert mask to CIDR",
    });
  }
};
