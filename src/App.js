import { Fragment } from "react";
import { Footer } from "./components/footer";
import { NamePicker } from "./components/name-picker";
import { ResetSearch } from "./components/reset-search";
import { Search } from "./components/search";
import { ShortList } from "./components/short-list";

export default function App() {
  return (
    <Fragment>
      <Search />
      <NamesContainer />
      <Footer />
    </Fragment>
  );
}

function NamesContainer() {
  return (
    <main>
      <ShortList />
      <NamePicker />
      <ResetSearch />
    </main>
  );
}
