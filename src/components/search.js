import React, { useEffect, useRef } from "react";
import { useAppState } from "../providers/app-state";

export function Search() {
  const { searchTerm, setSearchTerm } = useAppState();
  const inputRef = useRef();

  useEffect(() => {
    //inputRef.current.focus();
  }, []);

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <header>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a name..."
        value={searchTerm}
        onChange={handleChange}
      />
    </header>
  );
}
