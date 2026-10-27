import { tool } from 'ai';
import { z } from 'zod';
import { searchProperties, getPropertyById } from '@/lib/ai/property-data';
import { Property, EMIResult, VisitBooking } from '@/lib/types';

export const chatTools = {
  search_properties: tool({
    description:
      'Search for available properties based on the user preferences. Use this when the user asks about properties, homes, apartments, villas, or wants to see listings.',
    parameters: z.object({
      type: z
        .enum(['apartment', 'villa', 'penthouse', 'plot', 'commercial'])
        .optional()
        .describe('Type of property desired'),
      minPrice: z.number().optional().describe('Minimum price budget'),
      maxPrice: z.number().optional().describe('Maximum price budget'),
      bedrooms: z.number().optional().describe('Number of bedrooms required'),
      location: z.string().optional().describe('Preferred neighborhood or area name'),
      city: z.string().optional().describe('City name'),
    }),
    execute: async (filters): Promise<Property[]> => {
      const results = searchProperties(filters);
      return results;
    },
  }),

  schedule_visit: tool({
    description:
      'Schedule a property visit or viewing for a client. Use this when the user wants to see a property in person or book a site visit.',
    parameters: z.object({
      propertyId: z.string().describe('ID of the property to visit'),
      name: z.string().describe('Full name of the client'),
      phone: z.string().describe('Contact phone number of the client'),
      preferredDate: z.string().describe('Preferred date for the viewing (e.g. 2025-05-15 or next Saturday)'),
      preferredTime: z.string().describe('Preferred time for the viewing (e.g. 11:00 AM)'),
    }),
    execute: async ({
      propertyId,
      name,
      phone,
      preferredDate,
      preferredTime,
    }): Promise<VisitBooking> => {
      const property = getPropertyById(propertyId);
      const propertyTitle = property ? property.title : 'Selected Property';

      return {
        confirmed: true,
        propertyId,
        propertyTitle,
        name,
        phone,
        preferredDate,
        preferredTime,
        message: `Your visit for ${propertyTitle} has been confirmed for ${preferredDate} at ${preferredTime}. We have notified our consultant to meet you there.`,
      };
    },
  }),

  calculate_emi: tool({
    description:
      'Calculate the monthly EMI (Equated Monthly Installment) for a property purchase. Use when user asks about financing, monthly payments, mortgage, or loan details.',
    parameters: z.object({
      propertyPrice: z.number().describe('Total price of the property'),
      downPaymentPercent: z
        .number()
        .default(20)
        .describe('Down payment percentage (default 20%)'),
      interestRate: z
        .number()
        .default(8.5)
        .describe('Annual interest rate percentage (default 8.5%)'),
      loanTermYears: z
        .number()
        .default(20)
        .describe('Loan duration in years (default 20 years)'),
    }),
    execute: async ({
      propertyPrice,
      downPaymentPercent = 20,
      interestRate = 8.5,
      loanTermYears = 20,
    }): Promise<EMIResult> => {
      const downPayment = Math.round((propertyPrice * downPaymentPercent) / 100);
      const loanAmount = propertyPrice - downPayment;

      const monthlyInterestRate = interestRate / (12 * 100);
      const totalMonths = loanTermYears * 12;

      let emi = 0;
      if (loanAmount > 0) {
        if (monthlyInterestRate > 0) {
          const compounding = Math.pow(1 + monthlyInterestRate, totalMonths);
          emi = Math.round(
            (loanAmount * monthlyInterestRate * compounding) / (compounding - 1)
          );
        } else {
          emi = Math.round(loanAmount / totalMonths);
        }
      }

      const totalPayment = emi * totalMonths;
      const totalInterest = Math.max(0, totalPayment - loanAmount);

      return {
        propertyPrice,
        downPayment,
        loanAmount,
        emi,
        interestRate,
        loanTermYears,
        totalPayment,
        totalInterest,
      };
    },
  }),
};
