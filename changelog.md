### Version 0.2.0 (2015-12-03) ###

- Added: The `ignoreCtrlAlt` option. This is useful on Windows when using
  keyboard layouts with an AltGr key.


### Version 0.1.5 (2015-12-01) ###

- Fixed: Dead keys are now handled correctly (ignoring them). This seems to only
  have been noticeable on Windows.


### Version 0.1.4 (2015-02-09) ###

- Improved: `stringify` is now more robust by no longer crashing on missing
  `event.key` or `event.code`.


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
