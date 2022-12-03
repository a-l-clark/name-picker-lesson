import React from "react";

export function Footer() {
  return (
    <footer className="credit">
      Lesson from: &nbsp;
      <a
        href="https://egghead.io/courses/build-a-name-picker-app-intro-to-react-hooks-context-api-1ded"
        target="_blank"
        rel="noopener noreferrer"
      >
        eddhead.io - Build a "Name Picker" App
      </a>
      <br />
      <br />
      Sources of names list: &nbsp;
      <a
        href="https://www.yahoo.com/parenting/atticus-tops-baby-names-2015-124073377716.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Yahoo - Top Baby Names in 2015
      </a>
      , &nbsp;
      <a
        href="https://www.verywellfamily.com/unisex-baby-names-2759884"
        target="_blank"
        rel="noopener noreferrer"
      >
        verywellfamily - 100 Gender-Neutral Names for Your Baby
      </a>
      , &nbsp;
      <a
        href="https://www.goodhousekeeping.com/life/parenting/a31401884/gender-neutral-baby-names/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Good Housekeeping - 100 Clever Gender Neutral Names
      </a>
    </footer>
  );
}
