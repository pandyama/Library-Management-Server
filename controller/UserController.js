var db = undefined;
var FORM_COLLECTION = undefined;

const DATABASE_NAME = "";

const register = (req, res, next) => {
  console.log("Signup", req.body);
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ success: false });
  }

  return res.status(200).json({ success: true });
};

const login = (req, res, next) => {
  console.log("login", req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false });
  }

  return res.status(200).json({ success: true });
};

module.exports = { register, login };
