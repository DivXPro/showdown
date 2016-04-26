/**
 * Form HTML ordered (numbered) and unordered (bulleted) lists.
 */
showdown.subParser('fills', function (text, options, globals) {
  'use strict';

  text = globals.converter._dispatch('fills.before', text, options);
  /**
   * Process the contents of a single ordered or unordered list, splitting it
   * into individual list items.
   * @param {string} listStr
   * @param {boolean} trimTrailing
   * @returns {string}
   */
  var fillItem = /$\[\+\]/g,
      fillCount = 0;

  function parseFillItem() {

    var result = '<label class="fillarea" data-drop="true" ng-model="wm.answer" jqyoui-droppable="{index: ' + fillCount + '}">';
    result = result + '<label class="fillarea-fill" ng-show="wm.answer[' + (fillCount) + '].title" data-drag="true" data-jqyoui-options="{revert: \'invalid\'}" ng-model="wm.answer" jqyoui-draggable="{index: '+ fillCount +', placeholder:true, animate:true}">{{wm.answer[' + fillCount + '].title}}</label>';
    result = result + '</label>';

    fillCount++;

    return result;
  }

  text = text.replace(fillItem, parseFillItem);
  text = globals.converter._dispatch('fills.after', text, options);
  return text;
});
