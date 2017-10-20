import { define, Component } from '@xinix/xin';

import '../cloudinary-img';
import '../cloudinary-uploader';

class Pane extends Component {
  get props () {
    return Object.assign({}, super.props, {
      cloudName: {
        type: String,
        value: '',
      },

      preset: {
        type: String,
        value: '',
      },

      uploadedFileData: {
        type: Object,
        value: () => ({}),
      },

      uploadedUrlData: {
        type: Object,
        value: () => ({}),
      },

      imageDataUrl: {
        type: String,
        value: 'data:image/webp;base64,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',
      },

      showSrc: {
        type: String,
        value: '',
      },
    });
  }

  async fileInputChanged (evt) {
    if (evt.target.files.length < 1) {
      return;
    }

    let data = await this.$.uploaderFile.upload(evt.target.files[0]);
    this.set('uploadedFileData', data);
  }

  async uploadImageClicked (evt) {
    evt.preventDefault();
    let data = await this.$.uploaderUrl.upload(this.imageDataUrl);
    this.set('uploadedUrlData', data);
  }
}

define('my-pane', Pane);
