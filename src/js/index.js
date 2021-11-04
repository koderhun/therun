import './import/modules';

const $body = $('body');

$body.on('click', '.btn-burger', () => {
  $body.toggleClass('menu-open');
});


// анимация
let player;

if ($('#animation-desktop').is(':visible')) {
  player = LottieInteractivity.create({
    mode: 'scroll',
    player: '#animation-desktop',
    actions: [
      {
        visibility: [0.35, 1],
        type: 'loop',
        frames: [0, 365],
      },
    ],
  }).player;
} else {
  player = LottieInteractivity.create({
    mode: 'scroll',
    player: '#animation-mobile',
    actions: [
      {
        visibility: [0.3, 1],
        type: 'loop',
        frames: [0, 365],
      },
    ],
  }).player;
}

let framesCounter = null;
let playerStarted = false;
let secondSlide = false;
let thirdSlide = false;
let playerStopped = false;

console.log('an')
player.addEventListener('enterFrame', function (e) {
  let frame = ~~e.currentTime;
  if (frame === framesCounter) {
    return;
  }

  framesCounter = frame;

  switch (frame) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      if (!playerStarted) {
        $('#animation-slide-1').addClass('section-3__slide_show-up-and-fade-in');
        playerStarted = true;
        secondSlide = false;
        thirdSlide = false;
        playerStopped = false;

        // $('#animation-slide-1').fadeIn(500);
      }

      break;
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
      if (!secondSlide) {
        $('#animation-slide-1').addClass('section-3__slide_hide-up-and-fade-out');
        setTimeout(function () {
          $('#animation-slide-1')
            .removeClass('section-3__slide_show-up-and-fade-in')
            .removeClass('section-3__slide_hide-up-and-fade-out');
        }, 510);

        $('#animation-slide-2').addClass('section-3__slide_show-up-and-fade-in');

        secondSlide = true;
      }

      // $('#animation-slide-1').fadeOut(500);
      // $('#animation-slide-2').fadeIn(500);
      break;
    case 210:
    case 211:
    case 212:
    case 213:
    case 214:
    case 215:
      if (!thirdSlide) {
        $('#animation-slide-2').addClass('section-3__slide_hide-up-and-fade-out');
        setTimeout(function () {
          $('#animation-slide-2')
            .removeClass('section-3__slide_show-up-and-fade-in')
            .removeClass('section-3__slide_hide-up-and-fade-out');
        }, 510);

        $('#animation-slide-3').addClass('section-3__slide_show-up-and-fade-in');

        thirdSlide = true;
      }

      // $('#animation-slide-3').fadeIn(500);
      // $('#animation-slide-2').fadeOut(500);
      break;
    case 360:
    case 361:
    case 362:
    case 363:
    case 364:
    case 365:
      if (!playerStopped) {
        $('#animation-slide-3').addClass('section-3__slide_fade-out');
        setTimeout(function () {
          $('#animation-slide-3')
            .removeClass('section-3__slide_show-up-and-fade-in')
            .removeClass('section-3__slide_fade-out');
        }, 1010);

        playerStarted = false;
        playerStopped = true;
      }

      // $('#animation-slide-3').fadeOut(1000);
      break;
  }
});



// End анимация