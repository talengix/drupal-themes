(function (Drupal) {

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null });
  
  jQuery(document).ready(function () {

    // Track the purchase event
    jQuery('button[value="Pay Now"]').click(function () {
      // Get the product name and price DrupalSettings
      let orderId = drupalSettings.orderId;
      let currency = drupalSettings.currency;
      let totalPrice = drupalSettings.totalPrice;
      let orderItems = drupalSettings.orderItems.map(orderItem => ({
        item_name: orderItem.title,
        item_id: orderItem.product_id,
        price: parseFloat(orderItem.price),
        quantity: orderItem.quantity,
      }));

      let purchaseData = {};
      purchaseData.event = 'purchase';
      purchaseData.ecommerce = {
        currency: currency,
        value: totalPrice,
        tax: 0,
        transaction_id: orderId,
        items: orderItems,
      };

      window.dataLayer.push(purchaseData);
    });

    // Track the login event
    jQuery('button[value="Sign In"]').click(function () {
      window.dataLayer.push({
        event: 'login',
        data: {
          email: jQuery('input[data-drupal-selector="edit-name"]').val(),
        }
      });
    });
  });
  
})(Drupal);