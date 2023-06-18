import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const currentTime = localStorage.getItem(CURRENT_TIME_KEY);

function updateTime(data) {
  localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
}

player.on('timeupdate', throttle(updateTime, 1000));

if (currentTime !== undefined) {
  const seconds = parseFloat(currentTime);

  player
    .setCurrentTime(seconds)
    .then(function () {
      // player
      //   .play()
      //   .then(function () {
      //   })
      //   .catch(function (error) {
      //     console.error(error);
      //   });
    })
    .catch(function (error) {
      console.error(error);
    });
}
