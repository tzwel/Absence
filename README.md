<p align="center"> <img src="src/img/Absence-logo.png" width="auto" height="80px" alt="Absence logo" /> </p>

<h1 align="center"> Absence </h1>
<p align="center">  An (WIP) open-source Gelbooru client </p>

<p align="center"> 
<img src="https://img.shields.io/github/languages/code-size/tzwel/absence?style=flat-square" alt="Uncompressed code size" />
<a href="https://github.com/tzwel/Absence/releases"> <img src="https://img.shields.io/github/v/release/tzwel/absence?color=yellow&include_prereleases&style=flat-square" alt="Release" /> </a>
</p>

Absence is a feature rich application built in Electron enhancing the original website's experience \
Since Absence is built in Electron, it allows for high customisation and extensibility, providing integration with filesystem using Node

[Old README, literally tl;dr](/README.old.md)

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
- Lots of handy keyboard (and mouse) shortcuts e.g. Enter to download currently displayed image, right arrow to go to the next page/image
- Browsing by trending
- [Search query shortlands](https://github.com/tzwel/Absence/wiki/Search-query-shortlands)
- Fullscreen mode
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
> 'electron' is not recognized as internal command, operable program or batch file?
> Don't forget to install electron, run `npm i -g electron`

## FAQ

#### Autoupdater when

idk

#### New release when

I add a lot of features in a short amount of time, I only create releases once I make huge changes to the codebase, since the process of releasing is very tedious

#### Bugfix when

Create an issue to be sure I know about the bug's existence. \
If I still didn't fix the bug you created an issue about and you know some js, feel free to fix it yourself and create a pull request!

## Acknowledgements

- Icons: [Feather Icons](https://feathericons.com)
- Tooltips: [tooltip.js](https://github.com/matthias-schuetz/Tooltip)

## License

(Licensing may change in the future)

[Apache License 2.0](https://github.com/tzwel/Absence/blob/main/LICENSE.md)

