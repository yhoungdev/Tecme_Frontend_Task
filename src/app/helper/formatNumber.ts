export const formatNumber = (number: number) => {
    const formattedNumber = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD', 
    }).format(number);
  
    return formattedNumber;
  };
  