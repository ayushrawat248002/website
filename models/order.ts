import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    // 🆔 Razorpay order id
    order_id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    // 👤 user reference (optional but recommended)
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    
        order_createdAt : {
                type : Number
        }
    ,

    // 💰 amount
    amount: {
      type: Number,
      required: true,
    },

    // 💱 currency
    currency: {
      type: String,
      default: "INR",
    },

    // 📊 order status
    status: {
      type: String,
      enum: ["created", "paid", "failed"],
      default: "created",
      index: true,
    },

    // 💳 successful payment reference
    payment_id: {
      type: String,
      default: null,
    },

    // 🔁 number of attempts (optional but useful)
    attempts: {
      type: Number,
      default: 0,
    },

    // 🧾 receipt (from Razorpay)
    receipt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

orderSchema.index({order_createdAt : -1})

export const Order =  mongoose.models.Order ||
  mongoose.model("Order", orderSchema);