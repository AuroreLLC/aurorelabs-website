'use client';

import { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion max-w-lg">
      <div className="accordion-item">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordion-toggle inline-flex items-center gap-x-4 text-start"
          aria-controls="payment-event-collapse"
          aria-expanded={isOpen}
        >
          <span className={`icon-[tabler--plus] ${isOpen ? 'hidden' : 'block'} text-base-content size-4.5 shrink-0`}></span>
          <span className={`icon-[tabler--minus] ${isOpen ? 'block' : 'hidden'} text-base-content size-4.5 shrink-0`}></span>
          When is payment taken for my order?
        </button>
        <div
          id="payment-event-collapse"
          className={`accordion-content ${isOpen ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}
        >
          <div className="px-5 pb-4">
            <p className="text-base-content/80 font-normal">
              Payment is taken during the checkout process when you pay for your
              order. The order number that appears on the confirmation screen
              indicates payment has been successfully processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
