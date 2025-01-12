import React from "react";
import { Check } from 'lucide-react';

function SelectAlternative({ options, value, onChange, className }) {
  return (
    <div className={`grid gap-2 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          onClick={() => onChange(option.value)}
          className={`group relative flex items-center rounded-lg border p-4 text-left transition-colors hover:bg-gray-100 ${
            value === option.value ? "border-primary" : ""
          }`}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-primary ${
                  value === option.value ? "bg-primary text-white" : ""
                }`}
              >
                {value === option.value && (
                  <Check className="h-3 w-3" />
                )}
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium leading-none">
                  {option.value}
                </div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default SelectAlternative;