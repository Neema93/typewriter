//add string
const sentence = "hello there from lighthouse labs";
//loop through charecter
x = 0;
for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);  
  },x = x + 50);
}
