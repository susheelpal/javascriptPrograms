/**
 * @module gameProcess
 */
exports.gameProcess = (stake, goal, trials) => {
    let win = 0;
    let lose = 0;
    for (i = 0; i < trials; i++) {
        if (Math.random() < 0.5) {
            win++;
            stake++;
        }
        else {
            lose++;
            stake--;
        }
    }
    console.log('percentage of win :' + win / trials * 100);
    console.log('percentage of lose :' + lose / trials * 100);
}