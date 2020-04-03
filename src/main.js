const elem = document.querySelector('input[name="date"]');
const datepicker = new Datepicker(elem, {
    'format':'yyyy-mm-dd'
});