"use client";

import { useState } from "react";
import type { CompetitorInfo } from "@/i18n/partner-translations";

type Labels = {
  buttonLabel: string;
  dialogTitle: string;
  productHeader: string;
  vendorHeader: string;
  licenseHeader: string;
  priceHeader: string;
  noSimilar: string;
  close: string;
};

export default function CompetitorDialog({
  productName,
  info,
  labels,
}: {
  productName: string;
  info: CompetitorInfo;
  labels: Labels;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1 text-xs text-primary-600 hover:text-primary-800 font-medium transition-colors"
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        {labels.buttonLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Dialog */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {labels.dialogTitle}
            </h3>
            <p className="text-sm text-gray-500 mb-5">{productName}</p>

            {info.hasCompetitors ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-ivory-100 text-left">
                      <th className="px-3 py-2.5 font-semibold text-gray-700 rounded-tl-lg">
                        {labels.productHeader}
                      </th>
                      <th className="px-3 py-2.5 font-semibold text-gray-700">
                        {labels.vendorHeader}
                      </th>
                      <th className="px-3 py-2.5 font-semibold text-gray-700">
                        {labels.licenseHeader}
                      </th>
                      <th className="px-3 py-2.5 font-semibold text-gray-700 rounded-tr-lg">
                        {labels.priceHeader}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {info.competitors.map((c) => (
                      <tr
                        key={c.product}
                        className="border-t border-ivory-200"
                      >
                        <td className="px-3 py-2.5 font-medium text-gray-900">
                          {c.product}
                        </td>
                        <td className="px-3 py-2.5 text-gray-600">
                          {c.vendor}
                        </td>
                        <td className="px-3 py-2.5 text-gray-600">
                          {c.license}
                        </td>
                        <td className="px-3 py-2.5 text-gray-600 whitespace-nowrap">
                          {c.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-primary-50 border border-primary-200 rounded-xl p-5">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <p className="text-sm font-medium text-primary-800">
                  {labels.noSimilar}
                </p>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {labels.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
