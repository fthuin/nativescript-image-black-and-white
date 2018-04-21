import { ImageSource } from 'tns-core-modules/image-source';
import { Image } from 'tns-core-modules/ui/image';
import { BlackAndWhiteCommon } from './image-black-and-white.common';

export class ImageBlackAndWhite implements BlackAndWhiteCommon {
    blackAndWhite(img: Image): void {
        const matrix: android.graphics.ColorMatrix = new android.graphics.ColorMatrix();
        matrix.setSaturation(0);
        const filter: android.graphics.ColorMatrixColorFilter = new android.graphics.ColorMatrixColorFilter(
            matrix
        );
        img.android.setColorFilter(filter);
    }
}
