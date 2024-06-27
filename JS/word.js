function isCorrectWord(currentWord, transFind, array) {
  for (let i = 0; i < array.length; i++) {
      // если перевод тот который мы ищем и word у кнопки и у объекта совпадает
      if (array[i].trans == transFind && array[i].word == currentWord) {
          return true
      }
  }
  return false;
}

WORD = {
  'Lesson 1' : [
    {
      'word' : '오',
      'read' : '[o]',
      'trans' : 'five'
    },
    {
      'word' : '이',
      'read' : '[i]',
      'trans' : 'tooth'
    },
    {
      'word' : '아우',
      'read' : '[au]',
      'trans' : 'younger sibling'
    }, 
    {
      'word' : '아이',
      'read' : '[ai]',
      'trans' : 'kid'
    }, 
    {
      'word' : '오이',
      'read' : '[oi]',
      'trans' : 'cucumber'
    }
  ],

  'Lesson 2' : [
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    }
  ],

  'Lesson 3' : [
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
  ],

  'Lesson 4' : [
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    }
  ],

  'Lesson 5' : [
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    }
  ],

  'Lesson 6' : [
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    },
    {
      'word' : '',
      'read' : '[]',
      'trans' : ''
    }
  ],
}
