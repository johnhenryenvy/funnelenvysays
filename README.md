# funnelenvysays

> Tell Funnel Envy what to say

Like [yosay](https://github.com/yeoman/yosay), but more conversion optimization!

## Install

```sh
$ npm install --save funnelenvysays
```


## Usage

```js
var funnelenvysays = require('funnelenvysays');

console.log(funnelenvysays('Hello, and welcome to my fantastic generator full of whimsy and bubble gum!'));

/*
              .
             :::   ..`
            :::::  :::::      .--------------------------.
          `:::::::     ,:`    | Hello, and welcome to my |
         ,::::::::,     `:    | fantastic generator full |
        :::::::::::`     :.   |   of whimsy and bubble   |
         :::::::::::     ,:   |           gum!           |
           ::::::::::    ,:   '--------------------------'
    @@#     `::::::::`   ::
   @@@@@@     ::::::::   :,
 .@@@@@@@@@    .::::::, `:
    ;@@@@@@@     :::::  ::
        +@@@@@    :::  .,
      `    @@@@,   :   ::
      :,     @@@@     ::
      :,       @@#  `::
      .:           ,::  .
       :.        `::,  .:,
        ::     ,:::`   :::
         ::::::::    .  ::
            `        @  ::`
                      @  :,
                      `  ::
                       @ `:
                          :
                          :
 */
```

## CLI

```
$ npm install --global funnelenvysays
```

```
$ funnelenvysays --help

  Usage
    funnelenvysays <string>
    funnelenvysays <string> --maxLength 8
    echo <string> | funnelenvysays

  Example
    funnelenvysays 'Sindre is a horse'

                  .
                 :::   ..`
                :::::  :::::      .--------------------------.
              `:::::::     ,:`    |     Sindre is a horse    |
             ,::::::::,     `:    '--------------------------'
            :::::::::::`     :.
             :::::::::::     ,:
               ::::::::::    ,:
        @@#     `::::::::`   ::
       @@@@@@     ::::::::   :,
     .@@@@@@@@@    .::::::, `:
        ;@@@@@@@     :::::  ::
            +@@@@@    :::  .,
          `    @@@@,   :   ::
          :,     @@@@     ::
          :,       @@#  `::
          .:           ,::  .
           :.        `::,  .:,
            ::     ,:::`   :::
             ::::::::    .  ::
                `        @  ::`
                          @  :,
                          `  ::
                           @ `:
                              :
                              :
```


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
