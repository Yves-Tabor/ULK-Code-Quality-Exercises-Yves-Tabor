const getDiscount = (totalAmount) =>
    totalAmount * (totalAmount > 100 ? 0.1 : 0.05);