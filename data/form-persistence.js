/*jshint esnext: true */
(function() {
'use strict';

var ptoForm = document.querySelector('.pto-form');

restoreSavedValues();
attachInputHandler();

function attachInputHandler() {
  ptoForm.addEventListener('input', Utils.throttle(onInput, 500));
}

function onInput(e) {
  var input = e.target;
  var persistKey = input.dataset.persist;
  if (persistKey) {
    var value = e.target.textContent;
    persist(persistKey, value);
  }
}

function persist(key, value) {
  localStorage.setItem(key, value);
}

function restoreSavedValues() {
  var storageLength = localStorage.length;
  for (var i = 0; i < storageLength; i++) {
    var persistKey = localStorage.key(i);
    var value = localStorage.getItem(persistKey);
    document.querySelector(`[data-persist=${persistKey}]`).textContent = value;
  }
}

})();