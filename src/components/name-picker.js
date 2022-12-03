import React from "react";
import { useNames } from "../providers/names";
import { NameList } from "./name-list";
import { useAppState } from "../providers/app-state";

export function NamePicker() {
  const { searchTerm, shortList, setShortList } = useAppState();
  function addToShortList(id) {
    setShortList([...shortList, id]);
  }
  const fitleredNames = useNames()
    .filter((entry) =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((entry) => !shortList.includes(entry.id))
    .sort(compare);
  return <NameList nameList={fitleredNames} onItemClick={addToShortList} />;
}

function compare(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
}
