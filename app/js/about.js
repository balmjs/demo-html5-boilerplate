import { DEBUG } from './config/global';
import './components/navigation';
import $ from 'jquery';

if (DEBUG) {
  console.log('about page');
}

function showWidth() {
  let width = $(window).width();
  let height = $(window).height();
  console.log(width);
}

showWidth();

$(window).on('resize', () => {
  showWidth();
});
