import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  allImages = [];

  getImages() {
    return this.allImages = imagesDetails.slice(0);
  }

  getImage(id: number) {
    return imagesDetails.slice(0).find(Images => Images.id === id);
  }
}

export const imagesDetails = [
  { id: 1, brand: 'perro', url: 'assets/images/perro1.jpg' },
  { id: 2, brand: 'perro', url: 'assets/images/perro2.jpg' },
  { id: 3, brand: 'gato', url: 'assets/images/gato1.jpg' },
  { id: 4, brand: 'gato', url: 'assets/images/gato2.jpeg' },
  { id: 5, brand: 'perro', url: 'assets/images/perro3.jpg' },
];
