'use client';

import React, { useState } from 'react';
import { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [imageError, setImageError] = useState(false);

  // Status badge styling
  const statusStyles: Record<Property['status'], { bg: string; text: string; label: string }> = {
    available: { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', text: 'Available', label: 'Available' },
    upcoming: { bg: 'bg-amber-50 text-amber-700 border-amber-200', text: 'Upcoming', label: 'Upcoming' },
    sold: { bg: 'bg-rose-50 text-rose-700 border-rose-200', text: 'Sold', label: 'Sold' },
  };

  const statusConfig = statusStyles[property.status] || statusStyles.available;
  const displayedAmenities = property.amenities ? property.amenities.slice(0, 4) : [];
  const extraAmenitiesCount = property.amenities ? Math.max(0, property.amenities.length - 4) : 0;

  return (
    <div className="w-full max-w-[320px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col animate-fadeIn transition-all hover:shadow-md">
      {/* Property Image Header */}
      <div className="relative w-full h-44 bg-gradient-to-tr from-slate-700 via-slate-800 to-indigo-900 overflow-hidden flex items-end">
        {!imageError && property.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={property.image}
            alt={property.title}
            onError={() => setImageError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white/90 p-4 text-center">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-200">
              {property.type}
            </span>
            <span className="text-sm font-medium mt-1 text-white/80">{property.developer || 'Horizon Properties'}</span>
          </div>
        )}

        {/* Status Badge Over Image */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <span
            className={`px-2 py-0.5 text-[11px] font-semibold rounded-full border shadow-sm capitalize ${statusConfig.bg}`}
          >
            {statusConfig.label}
          </span>
        </div>

        {/* Gradient overlay for title readability */}
        <div className="relative z-10 w-full bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-8">
          <h3 className="text-white text-sm font-semibold truncate leading-tight drop-shadow-sm">
            {property.title}
          </h3>
          <p className="text-white/80 text-[11px] truncate">{property.developer}</p>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-3.5 flex flex-col gap-3 flex-1 justify-between">
        <div>
          {/* Price & Location */}
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              {property.priceFormatted || `$${property.price?.toLocaleString()}`}
            </span>
            <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
              {property.type}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-gray-600 mt-1">
            <svg
              className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="truncate">
              {property.location}, {property.city}
            </span>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-1.5 py-2.5 my-2.5 border-y border-gray-100 text-gray-700 text-xs">
            {/* Bedrooms */}
            <div className="flex items-center gap-1.5 justify-center bg-gray-50/80 rounded py-1">
              <svg
                className="w-3.5 h-3.5 text-[#7047eb]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="font-medium">{property.bedrooms} Beds</span>
            </div>

            {/* Bathrooms */}
            <div className="flex items-center gap-1.5 justify-center bg-gray-50/80 rounded py-1">
              <svg
                className="w-3.5 h-3.5 text-[#7047eb]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span className="font-medium">{property.bathrooms} Baths</span>
            </div>

            {/* Area */}
            <div className="flex items-center gap-1.5 justify-center bg-gray-50/80 rounded py-1">
              <svg
                className="w-3.5 h-3.5 text-[#7047eb]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              <span className="font-medium truncate">
                {property.area} {property.areaUnit || 'sq.ft'}
              </span>
            </div>
          </div>

          {/* Possession Date */}
          {property.possession && (
            <div className="text-[11px] text-gray-500 mb-2">
              <span className="font-medium text-gray-700">Possession: </span>
              {property.possession}
            </div>
          )}

          {/* Amenities Pills */}
          {displayedAmenities.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {displayedAmenities.map((amenity, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-medium"
                >
                  {amenity}
                </span>
              ))}
              {extraAmenitiesCount > 0 && (
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-medium">
                  +{extraAmenitiesCount} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-gray-100">
          <a
            href={property.link || '#'}
            className="inline-flex items-center justify-center px-2 py-1.5 text-[11px] font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors text-center truncate"
          >
            Details
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center px-2 py-1.5 text-[11px] font-semibold text-[#7047eb] bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors text-center truncate"
          >
            Gallery
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center px-2 py-1.5 text-[11px] font-semibold text-white bg-[#7047eb] rounded-lg hover:bg-[#5f34dc] shadow-sm transition-colors text-center truncate"
          >
            Tour
          </button>
        </div>
      </div>
    </div>
  );
}
