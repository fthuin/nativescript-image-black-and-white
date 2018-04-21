import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Image } from 'tns-core-modules/ui/image';
import { ImageBlackAndWhite } from 'nativescript-image-black-and-white';

export class HelloWorldModel extends Observable {
    private imageBlackAndWhite: ImageBlackAndWhite;

    constructor() {
        super();
        this.imageBlackAndWhite = new ImageBlackAndWhite();
    }

    onImageTap(args) {
        const image: Image = <Image>args.object;
        this.imageBlackAndWhite.blackAndWhite(image);
    }
}
