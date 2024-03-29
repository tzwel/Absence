<p align="center"> <img src="src/img/Absence-logo.png" width="auto" height="80px" alt="Absence logo" /> </p>

<h1 align="center"> Absence </h1>
<p align="center">  An (WIP) open-source Gelbooru client </p>
<p align="center"> <a href="https://github.com/tzwel/absence/releases/latest/download/Absence-Setup.exe"> <img src="https://img.shields.io/badge/-Download%20latest%20version-brightgreen"/> </a> </p>

<p align="center"> 
<img src="https://img.shields.io/badge/vanilla-JS-f0db4f?style=flat-square" alt="vanilla JS" />
<img src="https://img.shields.io/github/languages/code-size/tzwel/absence?style=flat-square" alt="Uncompressed code size" />
<!-- <img src="https://img.shields.io/tokei/lines/github/tzwel/absence?style=flat-square" alt="Code lines" /> -->
<a href="https://github.com/tzwel/Absence/releases/latest"> <img src="https://img.shields.io/github/v/release/tzwel/absence?color=yellow&include_prereleases&style=flat-square" alt="Release" /> </a>
</p>

> **Warning**: The Absence client is considered abandonware now (but I will still accept PRs).
It's still fully functional and I still think it's the best desktop Gelbooru client out there, but It won't receive major updates/patches. The codebase is constantly growing and becomes more and more cluttered, and fixing countless new bugs started to become less fun for me over time. Though, I will make efforts to rewrite it in Svelte, and improve on it a lot, stay tuned.

Absence is a feature rich application built in Electron enhancing the original website's experience \
Hence Absence is built in Electron, it allows for high customization and extensibility, providing integration with filesystem using Node

[Old README, literally tl;dr](/README.old.md)

Note: Absence is still a work in progress app, it's recommended to [install it through command line](#run-locally) (if you don't mind worse performance)
 instead of downloading releases, since they might be outdated and contain bugs already fixed in the latest versions

<!-- [![Uncompressed code size](https://img.shields.io/github/languages/code-size/tzwel/absence?style=flat-square)]()
[![Release](https://img.shields.io/github/v/release/tzwel/absence?color=yellow&include_prereleases&style=flat-square)](https://github.com/tzwel/Absence/releases)
-->
## Features

- 100 images per page (as opposed to 42 on Gelbooru)
- Custom right click menu with features such as selecting multiple images, downloading whole pages of images and more
- Multiple color themes (double click the logo)
- Custom folder with saved files & custom client-specific filenames
- Customizable blacklist, including default presets
- Info about files fetched per page, files downloaded, and currently downloading files (could be a lot!)
- Detailed info about currently displayed image such as tags, dimensions, and rating (see screenshots)
- Lots of [handy keyboard (and mouse) shortcuts](https://github.com/tzwel/Absence/wiki/Keyboard-shortcuts) e.g. Enter to download currently displayed image, right arrow to go to the next page/image
- Browsing by trending
- [Search query shorthands](https://github.com/tzwel/Absence/wiki/Search-query-shorthands)
- Full screen mode
- Automatic content adjusting depending on available space
- Compact mode
- Mobile mode (kinda broken)
- Mirroring layout
- Multiplatform

And a lot more

## Screenshots

![App Screenshot](https://raw.githubusercontent.com/tzwel/Absence/main/screenshots/absence.png)
![App Screenshot](https://raw.githubusercontent.com/tzwel/Absence/main/screenshots/Absence2.jpg)
![App Screenshot](https://raw.githubusercontent.com/tzwel/Absence/main/screenshots/Absence3.jpg)

*Above screenshots may be outdated*

## Run Locally

#### Dependencies
[Node](https://nodejs.org)

[Git](https://git-scm.com)

#### Dev dependencies
[Electron](https://www.electronjs.org/)

[Eslint](https://eslint.org)

--- 

Clone repo & install dependencies

```bash
git clone https://github.com/tzwel/Absence.git && cd Absence && npm install
```

Start the server

```bash
npm start
```
> 'electron' is not recognized as internal command, operable program or batch file? \
> Don't forget to install electron, run `npm i -g electron`

## FAQ

#### Autoupdater when

idk

#### New release when

I add a lot of features in a short amount of time, I only create releases once I make huge changes to the codebase, since the process of releasing is very tedious

#### Bugfix when

Create an issue to be sure I know about the bug's existence. \
If I still hadn't fixed the bug you created an issue about, and you know some js, feel free to fix it yourself and create a pull request!

## Acknowledgements

- Icons: [Feather Icons](https://feathericons.com)
- Tooltips: [tooltip.js](https://github.com/matthias-schuetz/Tooltip)

## License

(Licensing may change in the future)

[Apache License 2.0](https://github.com/tzwel/Absence/blob/main/LICENSE.txt)

