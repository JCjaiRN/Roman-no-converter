function convertToRoman(num) {
  let roman = '';
  let roman1 = '';
  let roman10 = '';
  let roman100 = '';
  let roman1000 = '';
  let numStr = '' + num;
  if(num<10){
    switch(numStr[0]){
      case '1': roman1 = 'I'; break;
      case '2': roman1 = 'II'; break;
      case '3': roman1 = 'III'; break;
      case '4': roman1 = 'IV'; break;
      case '5': roman1 = 'V'; break;
      case '6': roman1 = 'VI'; break;
      case '7': roman1 = 'VII'; break;
      case '8': roman1 = 'VIII'; break;
      case '9': roman1 = 'IX'; 
    }
    roman = roman1;
  }else if(num < 100){
    //numStr[0] + numStr[1]
    switch(numStr[0]){
      case '1': roman10 = 'X'; break;
      case '2': roman10 = 'XX'; break;
      case '3': roman10 = 'XXX'; break;
      case '4': roman10 = 'XL'; break;
      case '5': roman10 = 'L'; break;
      case '6': roman10 = 'LX'; break;
      case '7': roman10 = 'LXX'; break;
      case '8': roman10 = 'LXXX'; break;
      case '9': roman10 = 'XC'; 
    }

    switch(numStr[1]){
      case '1': roman1 = 'I'; break;
      case '2': roman1 = 'II'; break;
      case '3': roman1 = 'III'; break;
      case '4': roman1 = 'IV'; break;
      case '5': roman1 = 'V'; break;
      case '6': roman1 = 'VI'; break;
      case '7': roman1 = 'VII'; break;
      case '8': roman1 = 'VIII'; break;
      case '9': roman1 = 'IX'; 
    }

    roman = roman10 + roman1;
  }else if(num <1000){
    //numStr[0] + numStr[1] + numStr[2]
    switch(numStr[0]){
      case '1': roman100 = 'C'; break;
      case '2': roman100 = 'CC'; break;
      case '3': roman100 = 'CCC'; break;
      case '4': roman100 = 'CD'; break;
      case '5': roman100 = 'D'; break;
      case '6': roman100 = 'DC'; break;
      case '7': roman100 = 'DCC'; break;
      case '8': roman100 = 'DCCC'; break;
      case '9': roman100 = 'CM'; 
    }
    switch(numStr[1]){
      case '1': roman10 = 'X'; break;
      case '2': roman10 = 'XX'; break;
      case '3': roman10 = 'XXX'; break;
      case '4': roman10 = 'XL'; break;
      case '5': roman10 = 'L'; break;
      case '6': roman10 = 'LX'; break;
      case '7': roman10 = 'LXX'; break;
      case '8': roman10 = 'LXXX'; break;
      case '9': roman10 = 'XC'; 
    }
    switch(numStr[2]){
      case '1': roman1 = 'I'; break;
      case '2': roman1 = 'II'; break;
      case '3': roman1 = 'III'; break;
      case '4': roman1 = 'IV'; break;
      case '5': roman1 = 'V'; break;
      case '6': roman1 = 'VI'; break;
      case '7': roman1 = 'VII'; break;
      case '8': roman1 = 'VIII'; break;
      case '9': roman1 = 'IX'; 
    }

    roman = roman100 + roman10 + roman1;
  }else if(num <10000){
    //numStr[0] + numStr[1] + numStr[2] + numStr[3]
    switch(numStr[0]){
      case '1': roman1000 = 'M'; break;
      case '2': roman1000 = 'MM'; break;
      case '3': roman1000 = 'MMM'; 
      
    }
    switch(numStr[1]){
      case '1': roman100 = 'C'; break;
      case '2': roman100 = 'CC'; break;
      case '3': roman100 = 'CCC'; break;
      case '4': roman100 = 'CD'; break;
      case '5': roman100 = 'D'; break;
      case '6': roman100 = 'DC'; break;
      case '7': roman100 = 'DCC'; break;
      case '8': roman100 = 'DCCC'; break;
      case '9': roman100 = 'CM'; 
    }
    switch(numStr[2]){
      case '1': roman10 = 'X'; break;
      case '2': roman10 = 'XX'; break;
      case '3': roman10 = 'XXX'; break;
      case '4': roman10 = 'XL'; break;
      case '5': roman10 = 'L'; break;
      case '6': roman10 = 'LX'; break;
      case '7': roman10 = 'LXX'; break;
      case '8': roman10 = 'LXXX'; break;
      case '9': roman10 = 'XC'; 
    }
    switch(numStr[3]){
      case '1': roman1 = 'I'; break;
      case '2': roman1 = 'II'; break;
      case '3': roman1 = 'III'; break;
      case '4': roman1 = 'IV'; break;
      case '5': roman1 = 'V'; break;
      case '6': roman1 = 'VI'; break;
      case '7': roman1 = 'VII'; break;
      case '8': roman1 = 'VIII'; break;
      case '9': roman1 = 'IX'; 
    }

    roman = roman1000 + roman100 + roman10 + roman1;
  }
 return roman;
}
