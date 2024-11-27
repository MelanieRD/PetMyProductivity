class User {
  constructor(petName) {
    this.user = 1;
    this.coins = 0;

    this.tasks = {};

    this.room = {
      wall: "default",
      floor: "default",
      curtains: "default",
      view: "default",

      furniture: {},
    };

    this.pet = {
      petName: petName,
      petLevel: 0,
      petExperience: 0,

      needs: {
        hungry: 0,
        love: 0,
        dirty: 0,
      },

      style: {
        type: "default",
        eyes: "default",
        mouth: "default",
        color1: "default",
        color2: "default",
        color3: "default",
      },
    };
  }
}

export default User;
