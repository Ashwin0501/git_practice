let counter=0; //counting begins from zero as is conventionally done
let i=counter+1; //essentially stores 1, so prints 1 more hashtag than the current count. so 2 hashtags when counter is on 1.
let h=""; 
while(counter<7) {
  for(let j=0; j<i; j+=1)
  {
    h=h+"#"; //stores the hashtags in a string h 
  }
  console.log(h); 
  counter+=1; //increments the counter by 1
  i=counter+1;
  h=""; //reinitializes h to empty string / null
}