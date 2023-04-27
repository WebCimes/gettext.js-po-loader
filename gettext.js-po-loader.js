/**
 * Copyright (c) 2023 WebCimes - RICHARD Florian (https://webcimes.com)
 * MIT License - https://choosealicense.com/licenses/mit/
 * Date: 2023-04-27
 * 
 * Based on po2json wrapper from Guillaume Potier (https://github.com/guillaumepotier/gettext.js/blob/master/bin/po2json)
 */

const po2json = require('po2json');

module.exports = function(source) {

    let jsonData = po2json.parse(source);
    let json = {};

    for (var key in jsonData) {
        // Special headers handling, we do not need everything
        if ('' === key) {
          json[''] = {
            'language': jsonData['']['language'],
            'plural-forms': jsonData['']['plural-forms']
          };
    
          continue;
        }
    
        // Do not dump untranslated keys, they already are in the templates!
        if ('' !== jsonData[key][1])
          json[key] = 2 === jsonData[key].length ? jsonData[key][1] : jsonData[key].slice(1);
      }

    return JSON.stringify(json);
}
