(function(global){
  'use strict';
  function TargetClass() {
  }
  TargetClass.prototype.getStringVal = function(){
    return "expected";
  }
  TargetClass.prototype.getIntVal = function() {
    return 9876543210;
  }
  TargetClass.prototype.getObjVal = function() {
    return {"foo": ['bar', 'baz']};
  }
  TargetClass.prototype.getArrayVal = function() {
    return [10,20,30];
  }
  TargetClass.prototype.getDefinedVal = function() {
    return this.getStringVal();
  }
  TargetClass.prototype.getGtVal = function() {
    return 4;
  }
  TargetClass.prototype.getGtEqVal = function() {
    return 25;
  }
  TargetClass.prototype.getLtVal = function() {
    return -1;
  }
  TargetClass.prototype.getLtEqVal = function() {
    return 123;
  }
  global['TargetClass'] = TargetClass;
})(this);
