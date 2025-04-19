(function($, window) {
  // Add radio-group validator 
  $.formUtils.addValidator({
    name : 'lgld_radio_group',
    validatorFunction : function(val, $el, conf, lang, $form)
    {   // preset return var
      var checkResult = true;
      // get name of element. since it is a checkbox group, all checkboxes will have same name
      var elname = $el.attr('name');
      // get count of checked checkboxes with this name
      var checkedCount = $("input[type=radio][name^='"+elname+"']:checked", $form).length;
      // Test > 0
      if (checkedCount == 0) {
        this.errorMessage = "Please select a required option";
        checkResult = false;
      }

      // Modify group border
      if (checkResult) {
        $el.closest('.lgld-field-display').css('border', '0px');
      }
      else {
        $el.closest('.lgld-field-display').css('border', '1px solid red');
      }
        
      return checkResult;  
    }
  //   errorMessage : '', // set above in switch statement
  //   errorMessageKey: '' // not used});
  });

  // Add checkbox-group validator 
  $.formUtils.addValidator({
    name : 'lgld_checkbox_group',
    validatorFunction : function(val, $el, conf, lang, $form)
    {   // Use the default function
      var checkResult =  $.formUtils.validators.validate_checkbox_group.validatorFunction(val, $el, conf, lang, $form) 

      // Modify group border
      if (checkResult) {
        $el.closest('.lgld-field-display').css('border', '0px');
      }
      else {
        $el.closest('.lgld-field-display').css('border', '1px solid red');
      }
        
      return checkResult;  
    }
  //   errorMessage : '', // set above in switch statement
  //   errorMessageKey: '' // not used});
  });

  // Add amount validator
  $.formUtils.addValidator({
    name : 'lgld_amount',
    validatorFunction : function(val, $el, conf, lang, $form)
    {  
      var ifCheckedId = $el.valAttr("check-id");
      var validateIfCheckedElement = $form.find('input[id="' + ifCheckedId + '"]')
      if (ifCheckedId == undefined || validateIfCheckedElement.is(':checked')) { 
        var decimalSeparator = $el.valAttr('decimal-separator') || conf.decimalSeparator;
        if(val !== '') {
          if(val.match(new RegExp('^([0-9,]+)\\'+decimalSeparator+'?([0-9]{0,2})$')) !== null) {
              return true;
          }
        }
        return false;
      }
      return true;
    },
    errorMessage : '',
    errorMessageKey: 'badInt'
  });

  // Add amount validator
  $.formUtils.addValidator({
    name : 'lgld_dropdown',
    validatorFunction : function(val, $el, conf, lang, $form)
    {  
      var invalidOption = $el.valAttr("invalid-option");
      return $el.val() == invalidOption ?  false : true;
    },
    errorMessage : 'You must select an option',
    //errorMessageKey: 'badInt'
  });

  // Add future date validator
  $.formUtils.addValidator({
    name: 'lgld_futuredate',
    validatorFunction : function(val, $el, conf, lang, $form)
    {
      if (val.length === 0 || !val.trim()) return true
      var dateFormat = 'yyyy-mm-dd';
      if($el.valAttr('format')) {
          dateFormat = $el.valAttr('format');
      }
      else if( conf.dateFormat ) {
          dateFormat = conf.dateFormat;
      }

      var dt_parts =  $.formUtils.parseDate(val, dateFormat);
      var checkResult =  dt_parts !== false;

      if (checkResult) {
        var dt = new Date(dt_parts[0],
                          dt_parts[1]-1,
                          dt_parts[2]).getTime();
        checkResult = dt > new Date().getTime();
      }
      return checkResult
    },
    errorMessage : 'Invalid date format or not in the future'
  });
})(jQuery, window);
