const { model, Schema } = require("mongoose");

const issueScheme = new Schema(
  {
    assigned_to: { type: String, default: "" },
    status_next: { type: String, default: "" },
    open: { type: Boolean, default: true },
    issue_title: { type: String },
    issue_text: { type: String },
    created_by: { type: String },
  },
  {
    timestamps: {
      createdAt: "created_on",
      updatedAt: "updated_on",
    },
  }
);

module.exports = model("issue", issueScheme);
