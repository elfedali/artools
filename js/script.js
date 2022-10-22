jQuery(document).ready(function ($) {
  $textarea = $("#formControlTextarea");
  $(".kb-key").on("mousedown", function (e) {
    e.preventDefault();
    $key_value = $(this).data("value");

    if ($key_value == "del" || $key_value == "delete") {
      // delete where the cursor is in the textarea
      $textarea.val($textarea.val().slice(0, -1));
    } else if ($key_value == "space") {
      $textarea.val($textarea.val() + " ");
      $textarea.focus();
    } else if ($key_value == "enter") {
      $textarea.val($textarea.val() + "\n");
      $textarea.focus();
    } else if ($key_value == "tab") {
      $textarea.val($textarea.val() + "\t");
      $textarea.focus();
    } else if ($key_value == "clear") {
      $textarea.val("");
      $textarea.focus();
    } else {
      // edit where the cursor is in the textarea
      var start = $textarea[0].selectionStart;
      var end = $textarea[0].selectionEnd;
      var text = $textarea.val();
      var before = text.substring(0, start);
      var after = text.substring(end, text.length);
      $textarea.val(before + $key_value + after);
      $textarea.focus();
      $textarea[0].selectionStart = start + 1;
      $textarea[0].selectionEnd = start + 1;
    }
  });

  $("#delete_text").click(function (e) {
    e.preventDefault();
    $textarea.val("");
    $textarea.focus();
  });

  /**Open Google */
  $("#openGoogle").click(function (e) {
    var text = $("#formControlTextarea").val();
    var q = "https://www.google.com/search?q=" + text;

    if (text != "") {
      window.open(q);
    } else {
      alert("لم تكتب شيأ بعد !");
      e.preventDefault();
    }
  });
  /**Open Youtube */
  $("#openYoutube").click(function (e) {
    var text = $("#formControlTextarea").val();
    var q = "https://www.youtube.com/results?search_query=" + text;

    if (text != "") {
      window.open(q);
    } else {
      alert("لم تكتب شيأ بعد !");
      e.preventDefault();
    }
  });
  /**Open Translate to en  */
  $("#openTranslateEn").click(function (e) {
    var text = $("#formControlTextarea").val();
    var q =
      "https://translate.google.com/#view=home&op=translate&sl=ar&tl=en&text=" +
      text;

    if (text != "") {
      window.open(q);
    } else {
      alert("لم تكتب شيأ بعد !");
      e.preventDefault();
    }
  });

  /**Open Translate to en  */
  $("#openTranslateFr").click(function (e) {
    var text = $("#formControlTextarea").val();
    var q =
      "https://translate.google.com/#view=home&op=translate&sl=ar&tl=fr&text=" +
      text;

    if (text != "") {
      window.open(q);
    } else {
      alert("لم تكتب شيأ بعد !");
      e.preventDefault();
    }
  });

  $("#reverseText").on("click", function () {
    // reverse text in textarea
    var text = $("#formControlTextarea").val();
    var reversed = text.split("").reverse().join("");
    $("#formControlTextarea").val(reversed);
  });

  /*Select and copy */
  $("#copy").on("click", function (e) {
    var input = $("#formControlTextarea");
    if (input.val() != "") {
      input.focus();
      input.select();
      document.execCommand("copy");
      alert("تم النسخ !");
    } else {
      alert("لم تكتب شيأ بعد !");
      e.preventDefault();
    }
  });
}); // end
