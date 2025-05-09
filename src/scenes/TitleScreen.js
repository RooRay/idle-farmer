
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TitleScreen extends Phaser.Scene {

	constructor() {
		super("TitleScreen");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// title
		const title = this.add.text(428, 173, "", {});
		title.scaleX = 2;
		title.scaleY = 2;
		title.text = "idle farmer";
		title.setStyle({ "fontFamily": "Arial", "fontSize": "48px" });

		// play_solid
		const play_solid = this.add.image(463, 453, "play-solid");
		play_solid.scaleX = 0.5;
		play_solid.scaleY = 0.5;
		play_solid.tintFill = true;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(458, 483, 128, 128);
		rectangle_1.scaleX = 1.5;
		rectangle_1.scaleY = 1.4;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;
		rectangle_1.fillAlpha = 0;
		rectangle_1.isStroked = true;
		rectangle_1.lineWidth = 8;

		// text_1
		const text_1 = this.add.text(390, 522, "", {});
		text_1.text = "Start New";
		text_1.setStyle({ "fontSize": "25px" });

		// rectangle_2
		const rectangle_2 = this.add.rectangle(672, 404, 128, 128);
		rectangle_2.scaleX = 0.1;
		rectangle_2.scaleY = 0.75;
		rectangle_2.isFilled = true;

		// rectangle
		const rectangle = this.add.rectangle(672.49, 563.96, 128, 128);
		rectangle.scaleX = 0.1;
		rectangle.scaleY = 0.75;
		rectangle.isFilled = true;

		// text
		const text = this.add.text(654.34, 468.33, "", {});
		text.text = "Or";
		text.setStyle({ "fontSize": "25px" });

		// text_2
		const text_2 = this.add.text(837.1, 396.46, "", {});
		text_2.text = "Continue Existing Save";
		text_2.setStyle({ "fontSize": "25px" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
