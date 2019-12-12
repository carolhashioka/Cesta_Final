const { Schema, model } = require("mongoose");
const MonthlyQuoteSchema = new Schema(
  {
    month: {
      type: String,
      required: true
    },
    commerce: {
      type: Schema.Types.ObjectId,
      ref: "Commerce"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    meat: {
      type: Number,
      required: true
    },
    milk: {
      type: Number,
      required: true
    },
    beans: {
      type: Number,
      required: true
    },
    rice: {
      type: Number,
      required: true
    },
    flour: {
      type: Number,
      required: true
    },
    potato: {
      type: Number,
      required: true
    },
    tomato: {
      type: Number,
      required: true
    },
    bread: {
      type: Number,
      required: true
    },
    coffee: {
      type: Number,
      required: true
    },
    banana: {
      type: Number,
      required: true
    },
    sugar: {
      type: Number,
      required: true
    },
    oil: {
      type: Number,
      required: true
    },
    butter: {
      type: Number,
      required: true
    }
  },
  {
    timestamp: true
  }
);
module.exports = model("MonthlyQuote", MonthlyQuoteSchema);
