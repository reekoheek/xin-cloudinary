import { define, Component } from '@xinix/xin';

export class CloudinaryImg extends Component {
  get template () {
    return String(`
      <img style="width: 100%; height: 100%" src="[[imgSrc]]" hidden="[[imgSrc|not]]">
    `);
  }

  get props () {
    return Object.assign({}, super.props, {
      cloudName: {
        type: String,
        value: '',
        observer: '_observeSrc(cloudName, src)',
      },

      src: {
        type: String,
        value: '',
        observer: '_observeSrc(cloudName, src)',
      },

      imgSrc: {
        type: String,
        value: '',
      },

      format: {
        type: Object,
      },
    });
  }

  _observeSrc (cloudName, src) {
    let imgSrc = '';
    if (cloudName && src) {
      let format = '';
      if (this.format) {
        let fmt = Object.keys(this.format).map(i => `${i}_${this.format[i]}`).join(',');
        if (fmt) {
          format = fmt + '/';
        }
      }
      imgSrc = `http://res.cloudinary.com/${cloudName}/image/upload/${format}${src}`;

      let image = new window.Image();
      image.onload = () => this.set('imgSrc', imgSrc);
      image.src = imgSrc;
      return;
    }

    this.set('imgSrc', imgSrc);
  }
}

define('cloudinary-img', CloudinaryImg);
