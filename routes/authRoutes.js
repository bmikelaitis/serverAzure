const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const AzureStrategy = require("passport-azure-ad-oauth2").Strategy;

//defines the app object from the index.js profile
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/azure",
    passport.authenticate("azure_ad_oauth2", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/auth/azure/callback", passport.authenticate("azure_ad_oauth2"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
