/* utils/helpers.js */
export function currency(n){ return Number(n).toFixed(2); }
export function clamp(v,min,max){ return Math.max(min,Math.min(max,v)); }
