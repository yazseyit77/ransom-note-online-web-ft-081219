
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
