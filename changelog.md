### Version 0.1.3 (2015-02-08) ###

- Improved: If `event.key === "Unidentified"`, fall back on `event.code`. It
  seems like certain problematic keystrokes such as `<s-tab>` has better
  `event.code` support than `event.key` support.


### Version 0.1.2 (2015-01-26) ###

- Fixed: Functions keys (such as `<F1>`) are now recognized by the parser.


### Version 0.1.1 (2015-01-17) ###

- Fixed: `stringify` now turns aliased keynames into the standard `event.key`
  name.


### Version 0.1.0 (2014-10-12) ###

- Initial release.
