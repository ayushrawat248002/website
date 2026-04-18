import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    // 🔗 Link to order
    order_id: {
      type: String,
      required: true,
      index: true,
    },

    // 💳 Razorpay payment id (IMPORTANT)
    payment_id: {
      type: String,
      required: true,
      unique: true, // 🔥 prevents duplicate payments
    },

    // 🔐 signature (optional but useful)
    signature: {
      type: String,
    },

    // 💰 amount paid
    amount: {
      type: Number,
      required: true,
    },

    // 📊 payment status
    status: {
      type: String,
      enum: ["created", "captured", "failed"],
      default: "created",
    },

    // 💳 payment method (card, upi, netbanking)
    method: {
      type: String,
    },

  },
  {
    timestamps: true,
  }
);

export const Payment =  mongoose.models.Payment ||
  mongoose.model("Payment", paymentSchema);