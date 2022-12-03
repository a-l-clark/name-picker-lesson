import React from "react";
import { useAppState } from "../providers/app-state";

export function ResetSearch() {
  const { searchTerm, setSearchTerm } = useAppState();
  if (!searchTerm) {
    return null;
  }

  return (
    <button className="reset-search" onClick={() => setSearchTerm("")}>
      reset search
    </button>
  );
}
