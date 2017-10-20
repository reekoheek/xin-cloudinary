# xin-cloudinary

## Upload from input[type=file]

```html
<cloudinary-uploader id="uploader" cloud-name="[[cloudName]]" preset="[[preset]]"></cloudinary-uploader>
<input type="file" id="theFile">
```

```javascript
let result = await this.$.uploader.upload(this.$.theFile.files[0]);
```

## Upload from data url

```html
<cloudinary-uploader id="uploader" cloud-name="[[cloudName]]" preset="[[preset]]"></cloudinary-uploader>
```

```javascript
let result = await this.$.uploader.upload('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
```

## Show image

```html
<cloudinary-img cloud-name="[[cloudName]]" format='{"w":300, "h": 300, "r":"max"}' src="[[showSrc]]"></cloudinary-img>
```