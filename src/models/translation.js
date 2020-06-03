const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema(
  {
    original: {
      type: String,
      required: true,
      trim: true,
    },
    translation: {
      type: String,
      default: false,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Translation = mongoose.model('Translation', translationSchema);

module.exports = Translation;
