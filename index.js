function distanceFromHqInBlocks(location){
    let blocks = location - 42;
    return Math.abs(blocks);
}

function distanceFromHqInFeet(location){
    let blocks = distanceFromHqInBlocks(location);
    let feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start)*264;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if ( distance > 400 && distance < 2000) {
        return (distance-400) *.02;
    } else if ( distance >= 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}