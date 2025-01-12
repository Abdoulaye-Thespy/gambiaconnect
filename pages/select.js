import React from "react";
import { Check } from 'lucide-react';

function SelectAlternative({ 
  options = [], 
  value, 
  onChange, 
  className = "",
  placeholder = "Select an option"
}) {
  // Ensure options is an array and has valid items
  const safeOptions = Array.isArray(options) 
    ? options.map(option => 
        typeof option === 'string' 
          ? { value: option, label: option } 
          : option
      )
    : [];

  // If no options, show a placeholder
  if (safeOptions.length === 0) {
    return (
      <div className="text-gray-500 p-4 border rounded">
        {placeholder}
      </div>
    );
  }

  return (
    <div className={`grid gap-2 ${className}`}>
      {safeOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          onClick={() => onChange(option.value)}
          className={`
            group relative flex items-center rounded-lg border p-3 text-left 
            transition-all duration-200 ease-in-out 
            hover:bg-gray-50 hover:shadow-sm
            focus:outline-none focus:ring-2 focus:ring-primary/50
            ${value === option.value 
              ? "border-primary bg-primary/5 shadow-sm" 
              : "border-gray-200 hover:border-primary/30"
            }
          `}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`
                  flex h-5 w-5 shrink-0 items-center justify-center 
                  rounded-full border-2 transition-all
                  ${value === option.value 
                    ? "border-primary bg-primary text-white" 
                    : "border-gray-300"
                  }
                `}
              >
                {value === option.value && (
                  <Check className="h-3 w-3" />
                )}
              </div>
              <div className="grid gap-1">
                <div className={`
                  text-sm font-medium leading-none
                  ${value === option.value 
                    ? "text-primary" 
                    : "text-gray-700"
                  }
                `}>
                  {option.label || option.value}
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