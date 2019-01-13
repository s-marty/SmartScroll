// ==UserScript==
// @version         18.12.25
// @name            Smart Scroll
// @description     Provides buttons to scroll web pages up and down
// @license         MIT
// @compatible      firefox
// @compatible      chrome
// @namespace       https://github.com/s-marty/SmartScroll
// @homepageURL     https://github.com/s-marty/SmartScroll
// @supportURL      https://github.com/s-marty/SmartScroll/wiki
// @icon            data:image/png;base64,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
// @downloadURL     scripts/smartScroll.user.js
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QHFFSLZ7ENUQN&source=url
// @include         /^https?://.*$/
// @exclude         /[^\s]+\.(jpe?g|png|gif|bmp|svg)(\?[^\s]+)?$/
// @run-at          document-end
// @grant           GM.getValue
// @grant           GM.setValue
// @grant           GM_getValue
// @grant           GM_setValue
// @noframes
// ==/UserScript==
