import { Schema, model, models, Document } from "mongoose";
import bcrypt from "bcrypt";

interface CartItem {
  productId: Schema.Types.ObjectId;
  quantity: number;
}

interface Address {
  fullName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface PaymentMethod {
  type: "card" | "upi" | "netbanking";
  provider?: string; // e.g. Visa, Mastercard, Paytm
  last4?: string; // last 4 digits for cards
  upiId?: string;
}

export interface UserDocument extends Document {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  cart: CartItem[];
  wishlist: string[];
  addresses: Address[];
  paymentMethods: PaymentMethod[];
  createdAt: Date;
  updatedAt: Date;
  checkPassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    // Cart
    cart: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    // Wishlist
    wishlist: [
     
      {
        type: String,
      }
    
    ],

    // Addresses
    addresses: [
      {
        fullName: String,
        phone: String,
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
      },
    ],

    // Payment Methods
    paymentMethods: [
      {
        type: {
          type: String,
          enum: ["card", "upi", "netbanking"],
        },
        provider: String,
        last4: String,
        upiId: String,
      },
    ],
  },
  {
    collection: "User",
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
userSchema.methods.checkPassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = models.User || model<UserDocument>("User", userSchema);

export default User;