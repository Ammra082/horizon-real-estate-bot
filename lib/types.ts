export interface Property {
  id: string;
  title: string;
  type: 'apartment' | 'villa' | 'penthouse' | 'plot' | 'commercial';
  price: number;
  priceFormatted: string;
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  image: string;
  amenities: string[];
  description: string;
  status: 'available' | 'sold' | 'upcoming';
  developer: string;
  possession: string;
  link: string;
  featured: boolean;
}

export interface AppointmentSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
}

export interface SearchFilters {
  type?: Property['type'];
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  location?: string;
  city?: string;
}

export interface EMIResult {
  propertyPrice: number;
  downPayment: number;
  loanAmount: number;
  emi: number;
  interestRate: number;
  loanTermYears: number;
  totalPayment: number;
  totalInterest: number;
}

export interface VisitBooking {
  confirmed: boolean;
  propertyId: string;
  propertyTitle?: string;
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
