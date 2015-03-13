'use strict';
var chalk = require('chalk');
var pad = require('pad-component');
var wrap = require('word-wrap');
var stringLength = require('string-length');
var stripAnsi = require('strip-ansi');
var ansiStyles = require('ansi-styles');
var ansiRegex = require('ansi-regex')();

var topOffset = 3;
var leftOffset = 17;
var defaultGreeting =
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFNII  8FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFO      8FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFZ        88FFFF8877      I$$ODFFFFFFFFFFFFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8II            INFFFF8                ZFFFFFFFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFO                INFFFFO  I$$$I         7NFFFFFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFF$                  7FFFFFFFFFFFFFFDOI     INFFFFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFF87 I                    IZZFFFFFFFFFFFFFFFDDI   7ZFFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFZI                          8FFFFFFFFFFFFFFFFF7    DFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFNN7                            IDFFFFFFFFFFFFFFFFN    $FFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFD7I                              INFFFFFFFFFFFFFFFF$    NFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFZ                                  ODFFFFFFFFFFFFFFFII  $FFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFN$                                $NFFFFFFFFFFFFFF$I   FFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFD$                              IIFFFFFFFFFFFFFFZ7   FFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFNNO                             DFFFFFFFFFFFFZ7   NFF' + 
  '\nFFFFFFFFFI IIIFFFFFFFFFFFFFFFFF$                           IFFFFFFFFFFFF$I   FFF' + 
  '\nFFFFFFFF       I IFFFFFFFFFFFFFF8$I                         OFFFFFFFFFFF7I   FFF' + 
  '\nFFFFND              NNNFFFFFFFFFFFFD$I                       88FFFFFFFFN    7FFF' + 
  '\nFFF                      FFFFFFFFFFFFN$$                      IDFFFFFFF$    OFFF' + 
  '\nFF                       IIFFFFFFFFFFFFFO                     IIFFFFFFF     NFFF' + 
  '\n                              FFFFFFFFFFFNII                    8FFFFF8    IFFFF' + 
  '\nFFI                            IINFFFFFFFFFFOO                 7FFFFF8     NFFFF' + 
  '\nFFFFFFFI                            FFFFFFFFFF8                NFFFFFI   7$FFFFF' + 
  '\nFFFFFFFFFFFF    I                   IFFFFFFFFFFNI            O8FFFFOO    ODFFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFF                    IFFFFFFFFN$7       7NFFFFFI     NFFFFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFF                  FFFFFFFFFF7    I7FFFFFFZ     OFFFFFFFF' + 
  '\nFFFFFFFFFFFFFFDNFFFFFFFFFFFI                FFFFFFFFF7  I7FFFFFF8     7FFFFFFFFF' + 
  '\nFFFFFFFFFFFFFF$  IZFFFFFFFFFFF                FFFFFFFF77ZFFFFFF8     INFFFFFFFFF' + 
  '\nFFFFFFFFFFFFFF$    FFFFFFFFFFFFFFFF             FFFFFFFFFFFFNII    ZZFFFFFFFFFFF' + 
  '\nFFFFFFFFFFFFFF$    FFFFFFFFFFFFFFFFFF           IFFFFFFFFFFDII    ZFFFFFFFFFFFFF' + 
  '\nFFFFFFFFFFFFFFO    NFFFFFFFFFFFFFFFFFFFFI         NFFFFFFF8      $FFFFFFFFFFFFFF' + 
  '\nFFFFFFFFFFFFFFN    $FFFFFFFFFFFFFFFFFFFFFFF    FFFFFFFN77      ZFFFFFF8 FFFFFFFF' + 
  '\nFFFFFFFFFFFFFFF7I  IFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8       Z$FFFFFF8  8FFFFFFF' + 
  '\nFFFFFFFFFFFFFFF8Z   OFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFN$       8FFFFFF88   $NFFFFFF' + 
  '\nFFFFFFFFFFFFFFFFFZ   $$NFFFFFFFFFFFFFFFFFFFFFFFD$7      I$8FFFFFFD$      8NFFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFZ     ZFFFFFFFFFFFFFFFFFF8$$        7DNFFFFFFFF7I      7$FFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFF$     IZDDFFFFFFFFFDD8$           OFFFFFFFFFFFD       I7FFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFF$         7$$$$$I             Z$NFFFFFFFFFFFFF$        NFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFOI                 IZZ8FFFFFFFFFNI   I FFFFOZ      $FFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFDZO$        77$ODFFFFFFFFFFFFFFF      FFFFFI     IFFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFNNNNFFFFFFFFFFFFFFFFFFFFFFFI    FFFFFO      NFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFI   FFFFFO     ZFFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF     FFFFFI    7FFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFN    FFFFZ     FFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7  DFFFFII   NFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFI   FFF8$  IOFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFI IFFFFZ   ZFF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF    FFFD$  $FF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFN   FF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7  NN' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFO 7FF' + 
  '\nFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8ZFFF';

module.exports = function (message, options) {
  message = (message || 'Welcome to Yeoman, ladies and gentlemen!').trim();
  options = options || {};

  /*
   * What you're about to see may confuse you. And rightfully so. Here's an
   * explanation.
   *
   * When funnelenvysays is given a string, we create a duplicate with the ansi styling
   * sucked out. This way, the true length of the string is read by `pad` and
   * `wrap`, so they can correctly do their job without getting tripped up by
   * the "invisible" ansi. Along with the duplicated, non-ansi string, we store
   * the character position of where the ansi was, so that when we go back over
   * each line that will be printed out in the message box, we check the
   * character position to see if it needs any styling, then re-insert it if
   * necessary.
   *
   * Better implementations welcome :)
   */

  var maxLength = 24;
  var frame;
  var styledIndexes = {};
  var completedString = '';
  var regExNewLine;

  if (options.maxLength) {
    maxLength = stripAnsi(message).toLowerCase().split(' ').sort()[0].length;

    if (maxLength < options.maxLength) {
      maxLength = options.maxLength;
    }
  }

  regExNewLine = new RegExp('\\s{' + maxLength + '}');

  frame = {
    top: '.' + pad('', maxLength + 2, '-') + '.',
    side: ansiStyles.reset.open + '|' + ansiStyles.reset.open,
    bottom: ansiStyles.reset.open + '\'' + pad('', maxLength + 2, '-') + '\''
  };

  message.replace(ansiRegex, function (match, offset) {
    Object.keys(styledIndexes).forEach(function (key) {
      offset -= styledIndexes[key].length;
    });

    styledIndexes[offset] = styledIndexes[offset] ? styledIndexes[offset] + match : match;
  });

  return wrap(stripAnsi(message), { width: maxLength })
    .split(/\n/)
    .reduce(function (greeting, str, index, array) {
      var paddedString;

      if (!regExNewLine.test(str)) {
        str = str.trim();
      }

      completedString += str;

      str = completedString
        .substr(completedString.length - str.length)
        .replace(/./g, function (char, charIndex) {
          if (index > 0) {
            charIndex += completedString.length - str.length + index;
          }

          var hasContinuedStyle = 0;
          var continuedStyle;

          Object.keys(styledIndexes).forEach(function (offset) {
            if (charIndex > offset) {
              hasContinuedStyle++;
              continuedStyle = styledIndexes[offset];
            }

            if (hasContinuedStyle === 1 && charIndex < offset) {
              hasContinuedStyle++;
            }
          });

          if (styledIndexes[charIndex]) {
            return styledIndexes[charIndex] + char;
          } else if (hasContinuedStyle >= 2) {
            return continuedStyle + char;
          } else {
            return char;
          }
        })
        .trim();

      paddedString = pad({
        length: stringLength(str),
        valueOf: function () {
          return ansiStyles.reset.open + str + ansiStyles.reset.open;
        }
      }, maxLength);

      if (index === 0) {
        greeting[topOffset - 1] += frame.top;
      }

      greeting[index + topOffset] =
        (greeting[index + topOffset] || pad.left('', leftOffset)) +
        frame.side + ' ' + paddedString + ' ' + frame.side;

      if (!array[index + 1]) {
        greeting[index + topOffset + 1] =
          (greeting[index + topOffset + 1] || pad.left('', leftOffset)) +
          frame.bottom;
      }

      return greeting;
    }, defaultGreeting.split(/\n/))
    .join('\n') + '\n';
};
