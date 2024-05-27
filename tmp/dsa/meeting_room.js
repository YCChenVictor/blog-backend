const meetings = [[1, 3], [5, 7], [4, 6], [7, 9], [9, 10]];

function rooms(meetings) {
  // this way will consider the first element. Which is to check whether the first start is smaller than the first end
  let numberOfRooms = 0;
  const starts = meetings.map((meeting) => meeting[0]).sort((a, b) => a - b);
  const ends = meetings.map((meeting) => meeting[1]).sort((a, b) => a - b);
  
  console.log(starts);
  console.log(ends);

    let endPointer = 0;
  
    for (let i = 0; i < starts.length; i++) {
      console.log(starts[i]);
      console.log(ends[endPointer]);
      console.log('===');
      if (starts[i] < ends[endPointer]) {
        // Meeting overlaps with an existing one, so a new room is needed
        numberOfRooms += 1;
      } else {
        // Meeting ends, move endPointer to the next end time
        endPointer += 1;
      }
    }
  
    return numberOfRooms;
  }

rooms(meetings);
