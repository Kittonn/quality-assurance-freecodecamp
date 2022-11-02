"use strict";

const Issue = require("../model/issue.model");

module.exports = function (app) {
  app
    .route("/api/issues/:project")

    .get(async (req, res) => {
      const { project } = req.params;
      req.query.project = project;
      const issues = await Issue.find({ ...req.query });

      return res.status(200).json(issues);
    })

    .post(async (req, res) => {
      try {
        const { project } = req.params;

        if (
          !req.body.issue_title ||
          !req.body.issue_text ||
          !req.body.created_by
        ) {
          return res.status(200).json({ error: "required field(s) missing" });
        }

        const issue = await Issue.create({
          project,
          ...req.body,
        });

        return res.status(200).json(issue);
      } catch (error) {
        console.log(error);
      }
    })

    .put(async (req, res) => {
      // const { project } = req.params;

      // if (!req.body._id) {
      //   return res.status(200).json({ error: "missing _id" });
      // }
      // if (!req.body) {
      //   return res
      //     .status(200)
      //     .json({ error: "no update field(s) sent", _id: _id });
      // }
      // const issue = await Issue.findOneAndUpdate({ _id }, req.body, {
      //   new: true,
      //   runValidation: true,
      // });
      // if (!issue) {
      //   return res.status(200).json({ error: "could not update", _id: _id });
      // }

      // return res.status(200).json({ result: "successfully updated", _id: _id });
    })

    .delete(async (req, res) => {
      // const { project } = req.params;
      // const { _id } = req.body;

      // if (!_id) {
      //   return res.status(200).json({ error: "missing _id" });
      // }
      // const deleteIssue = await Issue.findOneAndDelete({ _id });
      // if (!deleteIssue) {
      //   return res.status(200).json({ error: "could not delete", _id: _id });
      // }
      // return res.status(200).json({ result: "successfully deleted", _id: _id });
    });
};
