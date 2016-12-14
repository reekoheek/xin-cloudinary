import xin from 'xin';

class CloudinaryImg extends xin.Component {
  get template () {
    return String(`
      <img style="width: 100%; height: 100%" src="[[imgSrc]]">
    `);
  }

  get props () {
    return Object.assign({}, super.props, {
      cloudName: {
        type: String,
      },

      src: {
        type: String,
      },

      imgSrc: {
        type: String,
        computed: '_computeImgSrc(cloudName, src)',
      },

      format: {
        type: Object,
      },
    });
  }

  _computeImgSrc (cloudName, src) {
    let format = '';
    if (this.format) {
      let fmt = Object.keys(this.format).map(i => `${i}_${this.format[i]}`).join(',');
      if (fmt) {
        format = fmt + '/';
      }
    }
    let imgSrc = `http://res.cloudinary.com/${cloudName}/image/upload/${format}${src}`;
    return imgSrc;
  }
}

xin.define('cloudinary-img', CloudinaryImg);

export default CloudinaryImg;
