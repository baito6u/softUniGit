function building(input) {
    let floorsCount = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    for (let curFloor = floorsCount; curFloor >= 1; curFloor--) {
        let curFloorRooms = '';

        for (let curRoom = 0; curRoom < roomsPerFloor; curRoom++) {

            if (curFloor == floorsCount){
                curFloorRooms += `L${curFloor}${curRoom} `;
            } else if (curFloor % 2 == 0) {
                curFloorRooms += `O${curFloor}${curRoom} `;
            } else {
                curFloorRooms += `A${curFloor}${curRoom} `;
            }
        }
        console.log(curFloorRooms);
    }

}

building(["4", "4"]);