import hotImage from '../assets/hot.jpg';
import juicyImage from '../assets/juicy.jpg';
import cosyImage from '../assets/cosy.jpg';

export const rawData = [
  {
    header: 'hot',
    redBoxes: [
      'Hot freshly ground black coffee or a cup of exquisite tea?',
      'We give you that perfect cup every time.',
    ],
    blackBox: [
      { left: 'Mocha Latte', right: '€ 7.50' },
      { left: 'Caffe Formaggio', right: '€ 5.00' },
      { left: 'Espresso', right: '€ 3.50' },
      { left: 'Chai Verde Latte', right: '€ 5.50' },
    ],
    image: hotImage,
  },
  {
    header: 'juicy',
    redBoxes: [
      'Ripe fruit - freshly squeezed.',
      "It's as simple as that. Chunky or smooth - it's your choice.",
    ],
    blackBox: [
      { left: 'Branched Apricots', right: '€ 4.20' },
      { left: 'Deep Rasberries', right: '€ 3.50' },
      { left: 'Smooth Oranges', right: '€ 6.50' },
    ],
    image: juicyImage,
  },
  {
    header: 'cosy',
    redBoxes: [
      'Hang around. Enjoy the settings.',
      'Use our fast WiFi. Borrow a newspaper or a novel.',
    ],
    blackBox: [
      { left: 'Mon-Sun ', right: '8am – 11pm' },
      { left: 'Caffe Retro', right: 'Canto VI' },
      { left: '0123-45 67 89', right: 'caffe@lorem.pge' },
    ],
    image: cosyImage,
  },
];
