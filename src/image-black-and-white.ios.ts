/**
 * Implementation of iOS module comes from
 * https://github.com/bradmartin/nativescript-image-filters
 */

import { Image } from 'tns-core-modules/ui/image';
import { fromNativeSource } from 'tns-core-modules/image-source';
import { BlackAndWhiteCommon } from './image-black-and-white.common';

export class ImageBlackAndWhite implements BlackAndWhiteCommon {
    blackAndWhite(img: Image): void {
        const inputImage = CIImage.alloc().initWithCGImage(
            img.ios.image.CGImage
        );
        const filter = CIFilter.filterWithName('CIPhotoEffectMono');
        filter.setValueForKey(inputImage, kCIInputImageKey);
        filter.setDefaults();
        const filteredImg = filter.valueForKey(kCIOutputImageKey);
        const outputCGImage = new CIContext(null).createCGImageFromRect(
            filteredImg,
            filteredImg.extent
        );
        const outputUIImage = UIImage.imageWithCGImage(outputCGImage);
        img.src = fromNativeSource(outputUIImage);
    }
}
