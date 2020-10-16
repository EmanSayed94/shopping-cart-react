export const formatCurrency=(num=0)=>{
    return Number(num.toFixed(2)).toLocaleString() + " ";
  }