// ready
jQuery(document).ready(function ($) {
  var url =
    "https://script.google.com/macros/s/AKfycbw8zk6TzLbiZuQvpC7b0c-DJh0tGoNHFjkvEreyMNW_fPgy_MICPO0ePt6EE0QZ_TI/exec";
  const data = {
    text: "مرحبا",
    source_lang: "ar",
    target_lang: "en",
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    cors: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});
