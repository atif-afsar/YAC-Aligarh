import { useCallback, useEffect, useId, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

/**
 * @param {{ id: string; label: string }[]} options
 * @param {string} value — selected option id
 * @param { (id: string) => void } onChange
 * @param {string} [label] — field label (visible above control)
 * @param {string} [className] — extra wrapper classes
 */
export default function FilterDropdown({ options, value, onChange, label, className = "" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listId = useId();
  const selected = options.find((o) => o.id === value) ?? options[0];

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) close();
    };
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div className={`relative min-w-0 ${className}`} ref={rootRef}>
      {label && (
        <p className="mb-1.5 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
          {label}
        </p>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={[
          "flex w-full min-h-[46px] items-center justify-between gap-2 rounded-xl border bg-white px-4 py-2.5 text-left text-sm font-medium text-gray-900 shadow-sm transition duration-200",
          open
            ? "border-[#DC3545]/45 shadow-[0_8px_18px_-12px_rgba(220,53,69,0.6)]"
            : "border-gray-200/90 shadow-gray-200/50 hover:border-gray-300 hover:shadow-md",
          "focus:outline-none focus:ring-2 focus:ring-[#DC3545]/25 focus:ring-offset-2",
        ].join(" ")}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
      >
        <span className="truncate">{selected?.label}</span>
        <FaChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      <div
        id={listId}
        role="listbox"
        className={[
          "absolute left-0 right-0 z-20 mt-1.5 max-h-64 overflow-y-auto rounded-xl border border-rose-100/70 bg-white py-1 shadow-[0_18px_35px_-20px_rgba(0,0,0,0.3)] transition-all duration-200 ease-out",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {options.map((opt) => {
          const isSelected = opt.id === value;
          return (
            <button
              key={opt.id}
              type="button"
              role="option"
              aria-selected={isSelected}
              onClick={() => {
                onChange(opt.id);
                close();
              }}
              className={[
                "flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors duration-150",
                isSelected
                  ? "bg-rose-50 font-semibold text-[#DC3545]"
                  : "text-gray-800 hover:bg-gray-50",
              ].join(" ")}
            >
              {isSelected && (
                <span className="text-[#DC3545] text-xs" aria-hidden>
                  ✓
                </span>
              )}
              <span className={isSelected ? "pl-0" : "pl-4"}>{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
