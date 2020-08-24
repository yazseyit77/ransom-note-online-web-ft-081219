
function buildHistogram(magazine){
  let histogram = {};

  magazine.forEach(letter => {
    if(histogram[letter]){
      histogram[letter] +=1 ;
    }else{
      histogram[letter] = 1;
    }
  });
  return histogram;
}

function canBuildNote(magazine, note){
  let histogram = buildHistogram(magazine);

  for(let i = 0; i < note.length; i++){
    if(!histogram[note.charAt(i)]){
      return false;
    } else {
      histogram[note.charAt(i) -= 1];
    }
  }
}
