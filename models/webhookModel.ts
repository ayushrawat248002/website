import mongoose, { Schema, models, model } from "mongoose";

const PaymentWebhookSchema = new Schema(
  {
    // 🔑 Core identifiers
    paymentId: {
      type: String,
      required: true,
      unique: true, // prevents duplicate webhook inserts
      index: true,
    },
    orderId: {
      type: String,
      index: true,
    },
    statusWeb : {
         type : String,
         default : 'not marked'
    },

    // 💰 Payment details
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "INR",
    },
    status: {
      type: String,
      enum: ["created", "authorized", "captured", "failed"],
      index: true,
    },
    method: {
      type: String, // upi, card, netbanking, wallet
    },

    // 🏦 UPI / Acquirer data
    vpa: String,
    upiTransactionId: String,
    rrn: String,

    // 👤 Customer info
    email: String,
    contact: String,

    // 📊 Financial breakdown
    fee: Number,
    tax: Number,
    amountRefunded: {
      type: Number,
      default: 0,
    },

    // 🚩 Flags
    captured: Boolean,
    international: Boolean,

    // ❌ Error handling
    error: {
      code: String,
      description: String,
      source: String,
      step: String,
      reason: String,
    },

    // 🧾 Optional metadata
    notes: {
      type: Schema.Types.Mixed, // flexible object/array
    },

    // 📦 Store full webhook payload (VERY important)
    raw: {
      type: Schema.Types.Mixed,
      required: true,
    },

    // ⏱ Razorpay timestamp
    createdAtRazorpay: {
      type: Number,
      index: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);


// ⚡ Indexes for performance
PaymentWebhookSchema.index({ orderId: 1, status: 1 });
PaymentWebhookSchema.index({ createdAtRazorpay: -1 });


// ✅ Prevent model overwrite in Next.js (hot reload safe)
const PaymentWebhook =
  models.PaymentWebhook || model("PaymentWebhook", PaymentWebhookSchema);

export default PaymentWebhook;