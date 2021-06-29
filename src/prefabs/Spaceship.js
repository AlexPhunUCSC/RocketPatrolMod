class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, extraShip) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        //extra points for new ship
        this.extraPoints = extraShip;
        this.moveSpeed = game.settings.spaceshipSpeed;
        //new spaceship speed
        this.newMoveSpeed = game.settings.newSpaceShipSpeed;
    }

    update() {
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}