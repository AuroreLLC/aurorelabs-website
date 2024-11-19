'use client';

import { useState } from 'react';

const Accordion = () => {
  return (
    <div class="accordion divide-neutral/20 max-w-lg divide-y">
    <div class="accordion-item active" id="payment-basic">
      <button class="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="payment-basic-collapse" aria-expanded="true" >
        <span class="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
        <span class="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
        When is payment taken for my order?
      </button>
      <div id="payment-basic-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-basic" role="region" >
        <div class="px-5 pb-4">
          <p class="text-base-content/80 font-normal">
            Payment is taken during the checkout process when you pay for your order. The order number that appears on the
            confirmation screen indicates payment has been successfully processed.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Accordion;
