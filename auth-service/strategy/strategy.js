const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: ACCESS_TOKEN_SECRET,
};

passport.use(
  new JwtStrategy(options, async (jwtPayload, done) => {
    const user = await User.find((user) => user.id === jwtPayload.id);

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  })
);

const generateToken = (user) => {
  const payload = { id: user.id, username: user.email };
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
};

module.exports = { generateToken };
