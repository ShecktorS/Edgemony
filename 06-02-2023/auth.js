const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "io") {
    req.user = { name: "io" };
    next();
  } else {
    res.status(401).send("Non hai il permesso di accedere");
  }
};

module.exports = authorize;
