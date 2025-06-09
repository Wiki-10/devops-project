const ip = require("ip");

exports.cidrToMask = (req, res) => {
  const value = req.query.value;
  const cidr = parseInt(value, 10);

  if (isNaN(cidr) || cidr < 0 || cidr > 32) {
    return res.status(400).json({
      error: "Invalid CIDR value",
    });
  }

  const mask = ip.fromPrefixLen(cidr);

  res.status(200).json({
    function: "cidrToMask",
    input: value,
    output: mask,
  });
};
