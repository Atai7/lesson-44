$(function () {

  let data = [];

  $('.form').on('submit', function (e) {
    e.preventDefault();

    let country = $("#country").val();

    $.ajax({
      url: `https://restcountries.com/v3.1/name/${country}?fields=flags`,
    })
    .done(function (response) {
      let flags = response[0].flags;

      let item = {
        country,
        flag: flags.svg,
        date: $("#date").val(),
        impressions: $("#info").val(),
      };

      data.push(item); // [{}]

      printAdventure(item, data.length);

    })
  })

  function printAdventure(data, number) {
    let template = $('#article').html();
    let copyTpl = $(template).clone(true);


    copyTpl.find(".note__number span").text(number);
    copyTpl.find(".place__point").text(data.country);
    copyTpl.find(".note__date").text(data.date);
    copyTpl.find(".flag-img").attr("src", data.flag);
    copyTpl.find(".note__info").text(data.impressions);

    $(".adventures").append(copyTpl);

  }

})
