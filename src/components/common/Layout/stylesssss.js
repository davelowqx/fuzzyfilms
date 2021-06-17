import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    --gold: #E1C48F;
    --blue: #627A99;
    --light-grey: #C7CED6;
    --dark-grey: #707070;
    --black: #212121;
    --white: #fff;
  }

  ::selection {
    background: var(--light-grey);
  },


  html {
    font-family: 'Roboto', Helvetica, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
      display: block;
    }
    audio,
    canvas,
    progress,
    video {
      display: inline-block;
    }
    audio:not([controls]) {
      display: none;
      height: 0;
    }
    progress {
      vertical-align: baseline;
    }
    [hidden],
    template {
      display: none;
    }
    a {
      color: var(--gold);
      text-decoration: none;
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
      outline-width: 0;
    }
    a:hover {
      color: inherit;
      background-color: var(--light-grey);
    }
    a:active{
      color: inherit;
      background-color: var(--blue);
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: inherit;
      font-weight: bolder;
    }
    dfn {
      font-style: italic;
    }
    mark {
      color: inherit;
      background-color: var(--gold);
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font: inherit;
      margin: 0;
    }
    optgroup {
      font-weight: 700;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    [type='reset'],
    [type='submit'],
    button,
    html [type='button'] {
      -webkit-appearance: button;
    }
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring,
    button:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    fieldset {
      border: 1px solid silver;
      margin: 0 2px;
      padding: 0.35em 0.625em 0.75em;
    }
    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }
    textarea {
      overflow: auto;
    }
    [type='checkbox'],
    [type='radio'] {
      box-sizing: border-box;
      padding: 0;
    }
    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }
    [type='search'] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type='search']::-webkit-search-cancel-button,
    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-input-placeholder {
      color: inherit;
      opacity: 0.54;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    html {
      font: 112.5%/1.45em georgia, serif;
      box-sizing: border-box;
      overflow-y: scroll;
    }
    * {
      box-sizing: inherit;
    }
    *:before {
      box-sizing: inherit;
    }
    *:after {
      box-sizing: inherit;
    }
    img {
      border-style: none;
      width: 100%;
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 0;
    }
    h1 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: var(--black);
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 2.25rem;
      line-height: 1.1;
    }
    h2 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: var(--black);
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1.62671rem;
      line-height: 1.1;
    }
    h3 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: var(--black);
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1.38316rem;
      line-height: 1.1;
    }
    h4 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1rem;
      line-height: 1.1;
    }
    h5 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 0.85028rem;
      line-height: 1.1;
    }
    h6 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 0.78405rem;
      line-height: 1.1;
    }
    hgroup {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    ul {
      margin-left: 1.45rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      list-style-position: outside;
      list-style-image: none;
    }
    ol {
      margin-left: 1.45rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      list-style-position: outside;
      list-style-image: none;
    }
    dl {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    dd {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    p, pre {
      font-family: LibreFranklin;
      font-size: 0.85028rem;
      line-height: 1.42;
      color: var(--dark-grey);
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      margin-bottom: 1rem;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
    figure {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
    }
    figcaption {
      margin-bottom: 0;
      font-family: LibreFranklin;
      text-align: center;
      font-size: 0.65rem;
      color: var(--dark-grey);
    }
    table {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      font-size: 1rem;
      line-height: 1.45rem;
      border-collapse: collapse;
      width: 100%;
    }
    fieldset {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    blockquote {
      margin-left: 1.45rem;
      margin-right: 1.45rem;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    form {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    noscript {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    iframe {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: calc(1.45rem - 1px);
      background: var(--light-grey);
      border: none;
      height: 0.5px;
    }
    address {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    b {
      font-weight: bold;
    }
    strong {
      font-weight: bold;
    }
    dt {
      font-weight: bold;
    }
    th {
      font-weight: bold;
    }
    li {
      margin-bottom: calc(1.45rem / 2);
    }
    ol li {
      padding-left: 0;
    }
    ul li {
      padding-left: 0;
    }
    li > ol {
      margin-left: 1.45rem;
      margin-bottom: calc(1.45rem / 2);
      margin-top: calc(1.45rem / 2);
    }
    li > ul {
      margin-left: 1.45rem;
      margin-bottom: calc(1.45rem / 2);
      margin-top: calc(1.45rem / 2);
    }
    blockquote *:last-child {
      margin-bottom: 0;
    }
    li *:last-child {
      margin-bottom: 0;
    }
    p *:last-child {
      margin-bottom: 0;
    }
    li > p {
      margin-bottom: calc(1.45rem / 2);
    }
    code {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    kbd {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    samp {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    abbr {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    acronym {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    abbr[title] {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
      text-decoration: none;
    }
    thead {
      text-align: left;
    }
    td,
    th {
      text-align: left;
      border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
      font-feature-settings: 'tnum';
      -moz-font-feature-settings: 'tnum';
      -ms-font-feature-settings: 'tnum';
      -webkit-font-feature-settings: 'tnum';
      padding-left: 0.96667rem;
      padding-right: 0.96667rem;
      padding-top: 0.725rem;
      padding-bottom: calc(0.725rem - 1px);
    }
    th:first-child,
    td:first-child {
      padding-left: 0;
    }
    th:last-child,
    td:last-child {
      padding-right: 0;
    }
    tt,
    code {
      background-color: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
        'Liberation Mono', Menlo, Courier, monospace;
      padding: 0;
      padding-top: 0.2em;
      padding-bottom: 0.2em;
    }
    pre code {
      background: none;
      line-height: 1.42;
    }
    code:before,
    code:after,
    tt:before,
    tt:after {
      letter-spacing: -0.2em;
      content: ' ';
    }
    pre code:before,
    pre code:after,
    pre tt:before,
    pre tt:after {
      content: '';
    }
    @media only screen and (max-width: 480px) {
      html {
        font-size: 100%;
      }
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', Helvetica, sans-serif;
      color: var(--black);
      background-color: var(--white);
      transition: .3s all;
      font-weight: normal;
      word-wrap: break-word;
      font-kerning: normal;
      -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    }

    button {
      cursor: pointer;
      padding: 0.7rem 2.5rem;
      width: unset;
      border: none;
      -webkit-appearance: none;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: var(--black);
      background: var(--gold);
      transition-duration: 0.3s;
      border-radius: 3px;
      @media (max-width: 960px) {
        width: 100%;
      }
    }
    textarea, input {
      width: 100%;
      box-sizing: border-box;
      border: 2px solid var(--gold);
      padding: 0.8rem 1rem;
      border-radius: 3px;
      margin-bottom: 0.5rem;
      transition: 0.3s;
      resize: vertical;
      font-size: 1rem;


      &::placeholder {
        color: var(--light-grey);
      }
    }

    button:not([disabled]):hover {
	background: var(--light-grey);
    }
    button:active {
	background: var(--blue);
    }
    button:disabled{
	cursor: default;
	    opacity: 0.25;
    }

    input, select, textarea, button {
      &:focus {
        outline: none;
      }
    }
  }
`;
