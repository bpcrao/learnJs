/**
 * Created with IntelliJ IDEA.
 * User: purnaboyapati
 * Date: 27/6/13
 * Time: 10:14 AM
 * To change this template use File | Settings | File Templates.
 */

/**
 * constructor for game
 *
 * @constructor
 */
function Game() {
    this._rolls = [];
    this.current_frame = 0;
}

/**
 * when the player rolls the ball
 * @param numberOfPins indicated pins hit.
 */
// TODO roll should not calculate score
Game.prototype.roll = function (numberOfPins) {
    if (typeof numberOfPins !== 'number') {
        throw new Error('Game.role() expects `pins` argument to be a numberOfPins');
    }
    this._rolls[this.current_frame++] = numberOfPins;
};

/**
 * gets the score
 */
// TODO score is not actually calculating value
Game.prototype.score = function () {
    var _score = 0;
    var numberOfRolls = this._bonusRoll() ? this._bonusRoll() + 1 : this._rolls.length;


    for (var index = 0; index < numberOfRolls; index++) {
        if (this._isStrike(index)) {
            _score = _score + this._rolls[index] + this._rolls[index + 1] + this._rolls[index + 2];
        }
        else if (this.isSpare(index)) {
            _score = _score + this._rolls[index] + 2 * this._rolls[index + 2];
            index++;
        } else {
            _score = _score + this._rolls[index];
        }
    }
    return _score
};

/**
 * tells if its a spare
 *
 * @param frameIndex
 * @return {Boolean}
 */
Game.prototype.isSpare = function (frameIndex) {
    if (frameIndex != this._rolls.length - 1 && this._rolls[frameIndex] + this._rolls[frameIndex + 1] == 10) {
        return true;
    }
    return false;
}


/**
 * tells if its a strike
 * @param frameIndex
 * @return {Boolean}
 * @private
 */
Game.prototype._isStrike = function (frameIndex) {
    if (frameIndex != this._rolls.length - 1 && this._rolls[frameIndex] == 10) {
        return true;
    }
    return false;
}

/**
 *
 * @private
 */
Game.prototype._bonusRoll = function () {
    var hasBonus = false;
    var checkRoll = this._rolls.length - 3;
    if (this.isSpare(checkRoll) || this._isStrike(checkRoll)) {
        return checkRoll;
    }
    return null;
};
