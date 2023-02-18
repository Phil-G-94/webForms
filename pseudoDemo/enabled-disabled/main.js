// once DOM is loaded,
// grab a reference to <input id="billing-checkbox" /> and attach
// a 'change' event listener to listen for a change in selected input and 
// then pass the toggleBilling function as callback
document.addEventListener('DOMContentLoaded',
  () => {
  document
    .querySelector('#billing-checkbox')
    .addEventListener('change', toggleBilling)
}, false);

function toggleBilling() {
  // grab a ref to name, address and postcode <input> elements and store in variable. 
  const billingItems = document.querySelectorAll('#billing input[type="text"]');

  // grab a reference to all of the billing labels
  const billingLabels = document.querySelectorAll('.billing-label');

  for (let i = 0; i < billingItems.length; i++) {
    // iterate through each element in billingItems, all <input> elements with id of #billing and type="text"
    // if an index's .disabled property returns true assign it a false value;     
    billingItems[i].disabled = !billingItems[i].disabled;

    /*
      Toggles switching...
      if grabbing each [i]'s 'class' attribute returns 'billing-label disabled-label'
    */
    if(billingLabels[i].getAttribute('class') === 'billing-label disabled-label') {
      // assign its 'class' attribute a value of 'billing label'
      billingLabels[i].setAttribute('class', 'billing label')
    } else {
      // otherwise, assign a value of 'billing-label disabled-label' 
      billingLabels[i].setAttribute('class', 'billing-label disabled-label')
    }
  };
};
