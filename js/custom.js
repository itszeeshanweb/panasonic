
function addDiv(parent_div, content, attrs) {
    var div = document.createElement('div');
    var parent = document.getElementById(parent_div);
  
    for (var key in attrs) {
      if (attrs.hasOwnProperty(key)) {
        div.setAttribute(key, attrs[key]);
      }
    }
    div.innerHTML = content;
    if (parent) {
      parent.appendChild(div);
    }
  }
  
  var button = document.getElementsByTagName('button')[0];
  if (button) {
    button.addEventListener('click', function() {
      // change dynamically your new div
      addDiv('parent', 'hi', {
        'class': 'someclass someclass',
        'data-attr': 'attr'
      });
    });
  }



  document.addEventListener("change", function(event) {
    let element = event.target;
    if (element && element.matches(".form-element-field")) {
        element.classList[element.value ? "add" : "remove"]("-hasvalue");
    }
    });







$(".productscategory").each(function () {
    var $this = $(this),
      numberOfOptions = $(this).children("option").length;
  
    $this.addClass("select-hidden2");
    $this.wrap('<div class="select2"></div>');
    $this.after('<div class="select-styled2"></div>');
  
    var $styledSelect = $this.next("div.select-styled2");
    $styledSelect.text($this.children("option").eq(0).text());
    // console.log($styledSelect);
  
    var $list = $("<ul />", {
      class: "select-options2",
      id:"product_sel"

    }).insertAfter($styledSelect);
    // console.log("test");
    // console.log($list);
  
    for (var i = 0; i < numberOfOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val()
      }).appendTo($list);
      //if ($this.children('option').eq(i).is(':selected')){
      //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
      //}
    }
  
    var $listItems = $list.children("li");
    console.log($list);
    $(document).on('click', '.select-styled2',function (e) {
      e.stopPropagation();
      $("div.select-styled2.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-options2").hide();
        });
      $(this).toggleClass("active").next("ul.select-options2").toggle();
    });
  
    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      $list.hide();
      //console.log($this.val());
    });
  
    $(document).click(function () {
      $styledSelect.removeClass("active");
      $list.hide();
    });
  });

let count = 0;
$(".plus-btn").click( function(){
  console.log($(this));
    if(count < 2){
        var cloneElement = $("#add-category").clone();
        if(cloneElement.hasClass('first_element')){
          cloneElement.removeClass('first_element');
        }
        $("#addCategoryContainer").append(cloneElement);
        cloneElement.find(".form-element-field").removeClass("-hasvalue").val("");
        // cloneElement.find(".form-element-field").remove("required");
    }
    count++;

    if(count >= 1){
      cloneElement.children(".col:last-child").children("#plus-btn-add").hide();
      cloneElement.children(".col:last-child").children("#closeRow").show();
    }
    if(count == 2){
        $(this).attr("disabled", true);
    }
    
    var close = cloneElement.children(".col:last-child").children("#closeRow");
    $(close).on("click", function(){
      $(this).parent().parent().prev().find('#plus-btn-add').attr('disabled',false);
      if($(this).parents().parent().prev()){
        $(this).parent().parent().siblings('.first_element').find('#plus-btn-add').attr('disabled',false);
      }
      $(this).parents("#add-category").remove();
      count = count-1;
    });  
});



$(".addCategoryBtn").click( function(){
    var createAddCategory = $(".addCategory").clone();
    $("#AardArea").append(createAddCategory);

    // $('.select-styled2').click(function(){
    //   // console.log( $("div.select-styled2.active")
    //   // .not(this));
      
    //   $("div.select-styled2.active")
    //     .not(this)
    //     .each(function () {
    //       // alert(1);
    //       $(this).removeClass("active").next("ul.select-options2").hide();
    //     });
    //     // console.log($(this).toggleClass("active").next("ul.select-options2").toggle());
    //   $(this).toggleClass("active").next("ul.select-options2").toggle();
    // });

    $('.select-options2 li').click(function(){
      // console.log($(this).parent().parent().parent().parent().parent().siblings('#addCategoryContainer'));
      if($(this).index() == 0){
        $(this).parent().parent().parent().parent().parent().siblings('#addCategoryContainer').hide()
      }
      else{
        $(this).parent().parent().parent().parent().parent().siblings('#addCategoryContainer').show();
      }
      $(this).parent().siblings('.select-styled2').text($(this).text()).removeClass("active");
      $(this).parent().siblings('.productscategory').val($(this).attr("rel"));
      $(this).parent().hide();
      
    })

    
});





$("#product_sel li").click(function(){
  // alert("The paragraph was clicked.");
  $("#addCategoryContainer").show();
});
// $('.select-options2 li').click(function(){
//   console.log($(this));
// })


$("#product_sel li:first").click(function(){
  // alert("The paragraph was clicked.");
  $("#addCategoryContainer").hide();
});
$("#file-upload").change(function(){
  let path = $(this).val();
  filename = path.replace(/C:\\fakepath\\/i, '');
  $("#fileText").append(filename + ' <a href="#" onclick="closeFileText()"><i class="bi bi-x-circle-fill"></i></a>').show();
  $(".custom-file-upload").hide();
  
});
function closeFileText(){
  $(".custom-file-upload").show();
  $("#fileText").html("").hide();
  $("#file-upload").val("");
}














// Upload Invoice
(function ($) {
var customDragandDrop = function (element) {
$(element).addClass("kwt-file__input");
var element = $(element).wrap(
`<div class="kwt-file">
    <div class="kwt-file__drop-area"><span class='kwt-file__choose-file $'>${
    element.attributes.data_btn_text
        ? "" === element.attributes.data_btn_text.textContent
            ? `<i class="bi bi-cloud-upload"></i>`
            : `${element.attributes.data_btn_text.textContent}`
        : `<i class="bi bi-cloud-upload"></i>`
}</span>${element.outerHTML}</span><span class="kwt-file__msg">${
    "" === element.placeholder ? "or drop files here" : `${element.placeholder}`
}</span><div class="kwt-file__delete"></div></div></div>`
);
var element = element.parents(".kwt-file");

element.on("dragenter focus click", ".kwt-file__input", function (e) {
$(this).parents(".kwt-file__drop-area").addClass("is-active");
});

element.on("dragleave blur drop", ".kwt-file__input", function (e) {
$(this).parents(".kwt-file__drop-area").removeClass("is-active");
});

element.on("change", ".kwt-file__input", function (e) {
let filesCount = $(this)[0].files.length;
let textContainer = $(this).next(".kwt-file__msg");
if (1 === filesCount) {
    let fileName = $(this).val().split("\\").pop();
    textContainer
        .text(fileName)
        .next(".kwt-file__delete")
        .css("display", "block");
} else if (filesCount > 1) {
    textContainer
        .text(filesCount + " files selected")
        .next(".kwt-file__delete")
        .css("display", "inline-block");
} else {
    textContainer.text(
        `${
            "" === this[0].placeholder
                ? "or drop files here"
                : `${this[0].placeholder}`
        }`
    );
    $(this)
        .parents(".kwt-file")
        .find(".kwt-file__delete")
        .css("display", "none");
}
});

// Delete selected file.
element.on("click", ".kwt-file__delete", function (e) {
let deleteElement = $(this);
deleteElement.parents(".kwt-file").find(`.kwt-file__input`).val(null);
deleteElement
    .css("display", "none")
    .prev(`.kwt-file__msg`)
    .text(
        `${
            "" ===
            $(this).parents(".kwt-file").find(".kwt-file__input")[0].placeholder
                ? "or drop files here"
                : `${
                        $(this).parents(".kwt-file").find(".kwt-file__input")[0].placeholder
                  }`
        }`
    );
});
};

          $.fn.kwtFileUpload = function (e) {
          var _this = $(this);
          $.each(_this, function (index, element) {
          customDragandDrop(element);
          });
          return this;
          };
          })(jQuery);

  jQuery(document).ready(function ($) {
  $(".demo1").kwtFileUpload();
  });































