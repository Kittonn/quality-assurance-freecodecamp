"use strict";

module.exports = function (app) {
  app
    .route("/api/issues/:project")

    .get(function (req, res) {
      let { project } = req.params;
    })

    .post(function (req, res) {
      let { project } = req.params;
    })

    .put(function (req, res) {
      let { project } = req.params;
    })

    .delete(function (req, res) {
      let { project } = req.params;
    });
};
