const stripe = Stripe('pk_test_51NrXLPLGv9ogNUOYPmXCBmgMCb2OxFW3R6Dx9xpAT4BUlZByU2VInO7whyaaQSSxrQEfPxUra1omIzlW1Kn2dS2s00wi1vL5yx');
 const paymentButton = document.querySelector('#paymentButton');

 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });