/**
 * Utility function to combine class names, filtering out falsy values.
 */
export function cn(...classes: (string | undefined | null | false | 0)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formats a numeric price into a concise human-readable string (e.g. $1.2M, $450K).
 */
export function formatPrice(price: number): string {
  if (price >= 1_000_000) {
    const formatted = (price / 1_000_000).toFixed(1).replace(/\.0$/, '');
    return `$${formatted}M`;
  }
  if (price >= 1_000) {
    const formatted = (price / 1_000).toFixed(1).replace(/\.0$/, '');
    return `$${formatted}K`;
  }
  return `$${price.toLocaleString()}`;
}

/**
 * Calculates standard Equated Monthly Installment (EMI).
 * Formula: EMI = [P x r x (1 + r)^n] / [(1 + r)^n - 1]
 * 
 * @param principal Loan principal amount
 * @param rate Annual interest rate percentage (e.g. 7.5 for 7.5%)
 * @param years Loan tenure in years
 * @returns Monthly EMI rounded to the nearest integer
 */
export function calculateEMI(principal: number, rate: number, years: number): number {
  if (principal <= 0 || years <= 0) return 0;
  if (rate <= 0) {
    return Math.round(principal / (years * 12));
  }

  const monthlyRate = rate / 12 / 100;
  const totalMonths = years * 12;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  return Math.round(emi);
}

/**
 * Returns a time-appropriate greeting ('Good morning', 'Good afternoon', or 'Good evening').
 */
export function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour < 12) {
    return 'Good morning';
  }
  if (hour < 18) {
    return 'Good afternoon';
  }
  return 'Good evening';
}
