import express from "express"
import { isAuthenticatedUser } from "../../middlewares/auth.js";
import {  stripeCheckoutSession, stripeWebhook} from "../../controller/paymentController.js";

const PaymentRouter=express.Router();


 PaymentRouter.post("/checkout_session",isAuthenticatedUser,stripeCheckoutSession);
 
 PaymentRouter.post("/webhook",express.raw({ type: 'application/json' }),stripeWebhook);


 


export default PaymentRouter;

