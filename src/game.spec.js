/**
 * Created with IntelliJ IDEA.
 * User: purnaboyapati
 * Date: 27/6/13
 * Time: 10:06 AM
 * To change this template use File | Settings | File Templates.
 */
(function () {

    beforeEach(function () {
        this.game = new Game();
    });

    function rollMany(rolls, pins) {
        var i = 0;
        for (i; i < rolls; i++) {
            this.roll(pins);
        }
    }

    ;

    function rollSpare() {
        this.roll(5);
        this.roll(5);
    }

    ;

    function rollStrike() {
        this.roll(10);
    }

    ;

    describe("Ten-Ping Bowling Kata", function () {

        describe("Gutter Game", function () {
            it("should score 0 for a gutter game, all rolls are 0", function () {
                var i = 0;

                rollMany.call(this.game, 20, 0)
                this.game.score().should.equal(0);
            });
        });

        describe("Score game if all rows hit only one pin", function () {
            it("should score 20", function () {
                var i = 0;
                rollMany.call(this.game, 20, 1)
                this.game.score().should.equal(20);
            });
        });

        describe("Score game if a spare is rolled", function () {
            it("should score 20 for a spare |5,5| 5 ", function () {
                rollSpare.call(this.game);
                this.game.roll(5);
                this.game.score().should.equal(20);
            })
        });

        describe("Score game strike followed by two rolls", function () {
            it("should score 20 for a strike |10|2,3| ", function () {
                rollStrike.call(this.game);
                this.game.roll(2);
                this.game.roll(3);
                rollMany.call(this.game, 17, 0);
                this.game.score().should.equal(20);
            })
        });


        describe("Score a perfect game of 300", function () {
            it("should score 300 for all strikes ", function () {
                rollMany.call(this.game, 12, 10);
                this.game.score().should.equal(300);
            })
        });


    });
})();