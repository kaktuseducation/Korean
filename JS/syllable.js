function generateCombinations(cons, vowel) {
  let result = [];
  
  for (let i = 0; i < cons1.length; i++) {
      for (let j = 0; j < vowel1.length; j++) {
          let tmp = [cons1[i], vowel1[j]];
          result.push(tmp);
      }
  }
  
  return result;
}

let cons1 = ['ㅇ']; // горизонтальные
let vowel1 = ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ']; // вертикальные
let result1 = generateCombinations(cons1, vowel1);


let cons2 = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅎ']; // горизонтальные
let vowel2 = ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ']; // вертикальные
let result2 = generateCombinations(cons2, vowel2);

let cons3 = ['ㅇ', 'ㄱ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅎ']; // горизонтальные
let vowel3 = ['ㅑ', 'ㅕ', 'ㅛ', 'ㅠ']; // вертикальные
let result3 = generateCombinations(cons3, vowel3);


let cons4 = ['ㅋ', 'ㅌ', 'ㅍ', 'ㅊ']; // горизонтальные
let vowel4 = ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ']; // вертикальные
let result4 = generateCombinations(cons4, vowel4);

let cons5 = ['ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ']; // горизонтальные
let vowel5 = ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ']; // вертикальные
let result5 = generateCombinations(cons5, vowel5);

SYLLABLE = {
  'Lesson 1' : {
    'syllable' : result1   
  },

  'Lesson 2' : {
    'syllable' : result2   
  },

  'Lesson 3' : {
    'syllable' : result3   
  },

  'Lesson 4' : {
    'syllable' : result4   
  },

  'Lesson 5' : {
    'syllable' : result5   
  },

  'Lesson 6' : {
    'syllable' : ['애', '에', '얘', '예', '외', '위', '왜', '웨', '외', '위', '의'] // заполняются без массива из-за специфики алфавита
  },
}
