const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    media: {
      url: String,
      filename: String,
      required: false,
    },
    mimetype: {
      type: String,
      required: false,
    },
    fileOriginalName: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
