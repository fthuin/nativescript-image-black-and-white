# nativescript-image-black-and-white

This plugin allows you to put an image in black and white (also called gray scale filter). It is using native iOS and Android features, so it is very nice in terms of performance and **it does not contain any third-party library** so it is very small.

<img src="./screenshots/ios_before.jpg" alt="ios-before" width="250">
<img src="./screenshots/ios_after.jpg" alt="ios-after" width="250">

<img src="./screenshots/android_before.jpg" alt="android-before" width="250">
<img src="./screenshots/android_after.jpg" alt="android-after" width="250">

## Installation

```bash
tns plugin add nativescript-image-black-and-white
```

## Usage

```typescript
import { Image } from 'tns-core-modules/ui/image';
import { ImageBlackAndWhite } from 'nativescript-image-black-and-white';

const image: Image = ...; // Initialize or get your image
const imageBlackAndWhite = new ImageBlackAndWhite();
imageBlackAndWhite.blackAndWhite(image);
```

Do not hesitate to look at the demo for a working example (screenshots come from there).

## API

This library is very simple, you create a new instance of `ImageBlackAndWhite`, you call the only method which is `blackAndWhite` with a Nativescript Image as parameter.

```
class ImageBlackAndWhite {
    blackAndWhite(img: Image): void;
}
```

## Thanks

Thanks to NativeScript team for the the plugin-seed and demo app template.

Thanks to Brad Martin for its implementation of [nativescript-image-filters](https://github.com/bradmartin/nativescript-image-filters).

## License

Most of the code comes from NativeScript team (plugin-seed and demo app) :
Apache License Version 2.0, January 2004

iOS implementation comes from [nativescript-image-filters](https://github.com/bradmartin/nativescript-image-filters) released by Brad Martin under MIT License.

My implementation for Android is under WTFPL.
