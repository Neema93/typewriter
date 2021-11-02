const sentence = ['\r|','\r/','\r-','\r\\','\r|','\r/','\r-','\r\\','\r|'];
//loop through charecter
x = 0;
for (const key of sentence) {
  setTimeout(() => {        
      process.stdout.write(key);  
  },x = x + 300);
 
}