// class PaymentController {
//     constructor(subscriptionService) {
//       this.subscriptionService = subscriptionService;
//     }
  
//     async getPaymentLink(req, res) {
//       try {
//         const payment = await this.subscriptionService.createPayment();
  
//         return res.json(payment);
//       } catch (error) {
//         console.log('algo salio mal',error);
  
//         return res
//           .status(500)
//           .json({ error: true, msg: "Failed to create payment" });
//       }
//     }

// }


// module.exports = PaymentController