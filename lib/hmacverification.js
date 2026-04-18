import crypto from "crypto";

/**
 * Verify Razorpay payment signature (handler response)
 */
export function verifyPaymentSignature({
  order_id,
  payment_id,
  signature,
  secret,
}) {
  const body = order_id + "|" + payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  return expectedSignature === signature;
}

/**
 * Verify Razorpay webhook signature
 */
export function verifyWebhookSignature({
  rawBody,
  signature,
  secret,
}) {
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  return expectedSignature === signature;
}