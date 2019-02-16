# ![SmartScroll](https://raw.githubusercontent.com/s-marty/SmartScroll/master/images/smartScroll_h1.png) [![latest version](https://img.shields.io/github/release/s-marty/SmartScroll/all.svg)](https://github.com/s-marty/SmartScroll/releases/latest)


**[Download](https://github.com/s-marty/SmartScroll/raw/master/src/smartScroll.user.js) | [Help](https://github.com/s-marty/SmartScroll/wiki/Help) | [Donate](https://github.com/s-marty/SmartScroll/wiki/Donate)**

A userscript to provide two page-scrolling buttons on right margin enabling a one-click page scroll to the top or bottom.

In addition, a mouse-over or middle-click of the buttons will scroll the page up or downwards at a selectable speed.

---

![Buttons](https://raw.githubusercontent.com/s-marty/SmartScroll/master/images/buttons.png)

## Features

* Able to leap tall pages in a single click
* Up and down, slow or faster than a speeding bullet
* More robust than a locomotive
* Slow scroll by middle mouse button or mouse hover
* 26 Slow scrolling speeds
* Doesn't interfere with the page's native onScroll event
* Conquers bottomless or never-ending pages in most cases
* Disableable per site
* No extra @require files (jquery et.al.)
* Double-click on either button for settings
* Compatable with [![Firefox 43+](https://img.shields.io/badge/Firefox-43%2B-orange.svg)](https://www.mozilla.org/firefox)
* Compatable with [![Chrome  62+](https://img.shields.io/badge/Chrome-62%2B-blue.svg)](http://www.google.com/chrome/)
* Compatable with [![Greasemonkey 3.9+](https://img.shields.io/badge/Greasemonkey-3.9%2B-orange.svg)](http://www.greasespot.net/)
* Compatable with [![Tampermonkey 4.7+](https://img.shields.io/badge/Tampermonkey-4.7%2B-blue.svg)](https://tampermonkey.net/)
* Compatable with [![Violentmonkey 2.10+](https://img.shields.io/badge/Violentmonkey-2.10%2B-green.svg)](https://github.com/Violentmonkey/Violentmonkey)


## Usage

When Smart Scroll is first run, simply run the mouse pointer over either button to scroll slowly up or down. Clicking on either button will scroll to the top or to the bottom. Double-clicking on a button will open the settings page.

The buttons are set to disappear after 3 seconds only if they are over a video player. If the page is scrolled manually they may remain hidden. To show them again, either move the mouse over a video while the buttons are not over it, or press the up or down keyboard keys once. They will remain visible till the next time.


## Settings

Smart Scroll comes with a settings modal. As mentioned above, double click on a button to access it.

![Settings_Modal](https://raw.githubusercontent.com/s-marty/SmartScroll/master/images/Settings.png)


The **slow scrolling speed** may be adjusted to your favorite speed by sliding the range finder.

Checking **bottomless pages** will try it's best to recalculate the page height for those sites who add continuous content as you scroll down. It may not work on all sites.

**Auto page refresh** will re-load the current page only when critical changes are made to settings.

**Fade out over video** will cause the buttons to cloak. When the mouse is moved, they will show then re-cloak after 3 seconds. The up or down keys will also de-cloak them.

The **slow scroll trigger** may be set to mousing-over (Hover) or middle mouse button click (Middleclick.)

**Button position** is always on the right-hand margin. Vertically, you may set the buttons to top (plus up to 99 pixels), or page middle, or page bottom (minus up to 99 pixels.)

**Ignored sites** will not have the Smart Scroll script initiated. Non ignored sites will have a green + button to add that site to the list. Previously ignored sites have 
a red x button to remove them from the list. You may add and remove as many sites at once as needed. Nothing will be changed in the registry until the Save button is clicked. Just Cancel to back out.

And of course please don't forget to [**donate**](https://github.com/s-marty/SmartScroll/wiki/Donate) to keep this script well maintained.

**Happy Scrolling**
