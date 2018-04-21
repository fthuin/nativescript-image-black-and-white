import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { Image } from 'tns-core-modules/ui/image';

export interface BlackAndWhiteCommon {
    blackAndWhite(image: Image): void;
}
