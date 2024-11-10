export class PetAnimation {
  petImage = new Image();
  constructor(petImageSpriteSRC, petSpriteWidth, petSpriteHeight, petSpriteFrames) {
    this.petImage.src = petImageSpriteSRC;
    this.petSpriteWidth = petSpriteWidth;
    this.petSpriteHeight = petSpriteHeight;
    this.petSpriteFrames = petSpriteFrames;
  }
}
