import "./import/modules";

const $body = $('body');

$body.on('click', '.btn-burger', () => {
    $body.toggleClass('menu-open');
})