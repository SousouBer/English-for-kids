// ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'],

const actionA = [
    {
      word: 'cry',
      translation: 'ტირილი',
      image: 'img/cry.jpg',
      audioSrc: 'audio/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'ცეკვა',
      image: 'img/dance.jpg',
      audioSrc: 'audio/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'ყვინთვა',
      image: 'img/dive.jpg',
      audioSrc: 'audio/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'ხატვა',
      image: 'img/draw.jpg',
      audioSrc: 'audio/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'თევზაობა',
      image: 'img/fish.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'ფრენა',
      image: 'img/fly.jpg',
      audioSrc: 'audio/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'ჩახუტება',
      image: 'img/hug.jpg',
      audioSrc: 'audio/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'ახტომა',
      image: 'img/jump.jpg',
      audioSrc: 'audio/jump.mp3'
    }
  ];

const actionB = [
    {
      word: 'open',
      translation: 'გაღება',
      image: 'img/open.jpg',
      audioSrc: 'audio/open.mp3'
    },
    {
      word: 'play',
      translation: 'თამაში',
      image: 'img/play.jpg',
      audioSrc: 'audio/play.mp3'
    },
    {
      word: 'point',
      translation: 'ხატვა',
      image: 'img/point.jpg',
      audioSrc: 'audio/point.mp3'
    },
    {
      word: 'ride',
      translation: 'ტარება',
      image: 'img/ride.jpg',
      audioSrc: 'audio/ride.mp3'
    },
    {
      word: 'run',
      translation: 'სირბილი',
      image: 'img/run.jpg',
      audioSrc: 'audio/run.mp3'
    },
    {
      word: 'sing',
      translation: 'სიმღერა',
      image: 'img/sing.jpg',
      audioSrc: 'audio/sing.mp3'
    },
    {
      word: 'skip',
      translation: 'ხტუნაობა',
      image: 'img/skip.jpg',
      audioSrc: 'audio/skip.mp3'
    },
    {
      word: 'swim',
      translation: 'ცურვა',
      image: 'img/swim.jpg',
      audioSrc: 'audio/swim.mp3'
    }
  ];

const animalA =  [
    {
      word: 'cat',
      translation: 'კატა',
      image: 'img/cat.jpg',
      audioSrc: 'audio/cat.mp3'
    },
    {
      word: 'chick',
      translation: 'ქათამი',
      image: 'img/chick.jpg',
      audioSrc: 'audio/chick.mp3'
    },
    {
      word: 'chicken',
      translation: 'წიწილა',
      image: 'img/chicken.jpg',
      audioSrc: 'audio/chicken.mp3'
    },
    {
      word: 'dog',
      translation: 'ძაღლი',
      image: 'img/dog.jpg',
      audioSrc: 'audio/dog.mp3'
    },
    {
      word: 'horse',
      translation: 'ცხენი',
      image: 'img/horse.jpg',
      audioSrc: 'audio/horse.mp3'
    },
    {
      word: 'pig',
      translation: 'ღორი',
      image: 'img/pig.jpg',
      audioSrc: 'audio/pig.mp3'
    },
    {
      word: 'rabbit',
      translation: 'კურდღელი',
      image: 'img/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3'
    },
    {
      word: 'sheep',
      translation: 'ცხვარი',
      image: 'img/sheep.jpg',
      audioSrc: 'audio/sheep.mp3'
    }
  ];

const animalB =  [
    {
      word: 'bird',
      translation: 'ჩიტი',
      image: 'img/bird.jpg',
      audioSrc: 'audio/bird.mp3'
    },
    {
      word: 'fish',
      translation: 'თევზი',
      image: 'img/fish1.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'frog',
      translation: 'ბაყაყი',
      image: 'img/frog.jpg',
      audioSrc: 'audio/frog.mp3'
    },
    {
      word: 'giraffe',
      translation: 'ჟირაფი',
      image: 'img/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3'
    },
    {
      word: 'lion',
      translation: 'ლომი',
      image: 'img/lion.jpg',
      audioSrc: 'audio/lion.mp3'
    },
    {
      word: 'mouse',
      translation: 'თაგვი',
      image: 'img/mouse.jpg',
      audioSrc: 'audio/mouse.mp3'
    },
    {
      word: 'turtle',
      translation: 'კუ',
      image: 'img/turtle.jpg',
      audioSrc: 'audio/turtle.mp3'
    },
    {
      word: 'dolphin',
      translation: 'დელფინი',
      image: 'img/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3'
    }
  ];

  const clothes = [
    {
      word: 'skirt',
      translation: 'ქვედაბოლო',
      image: 'img/skirt.jpg',
      audioSrc: 'audio/skirt.mp3'
    },
    {
      word: 'pants',
      translation: 'შარვალი',
      image: 'img/pants.jpg',
      audioSrc: 'audio/pants.mp3'
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'img/blouse.jpg',
      audioSrc: 'audio/blouse.mp3'
    },
    {
      word: 'dress',
      translation: 'კაბა',
      image: 'img/dress.jpg',
      audioSrc: 'audio/dress.mp3'
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'img/boot.jpg',
      audioSrc: 'audio/boot.mp3'
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'img/shirt.jpg',
      audioSrc: 'audio/shirt.mp3'
    },
    {
      word: 'coat',
      translation: 'პალტო',
      image: 'img/coat.jpg',
      audioSrc: 'audio/coat.mp3'
    },
    {
      word: 'shoe',
      translation: 'ფეხსაცმელი',
      image: 'img/shoe.jpg',
      audioSrc: 'audio/shoe.mp3'
    }
  ];

 const emotions = [
    {
      word: 'sad',
      translation: 'მოწყენილი',
      image: 'img/sad.jpg',
      audioSrc: 'audio/sad.mp3'
    },
    {
      word: 'angry',
      translation: 'გაბრაზებული',
      image: 'img/angry.jpg',
      audioSrc: 'audio/angry.mp3'
    },
    {
      word: 'happy',
      translation: 'ბედნიერი',
      image: 'img/happy.jpg',
      audioSrc: 'audio/happy.mp3'
    },
    {
      word: 'tired',
      translation: 'დაღლილი',
      image: 'img/tired.jpg',
      audioSrc: 'audio/tired.mp3'
    },
    {
      word: 'surprised',
      translation: 'გაოცებული',
      image: 'img/surprised.jpg',
      audioSrc: 'audio/surprised.mp3'
    },
    {
      word: 'scared',
      translation: 'შეშინებული',
      image: 'img/scared.jpg',
      audioSrc: 'audio/scared.mp3'
    },
    {
      word: 'smile',
      translation: 'ღიმილი',
      image: 'img/smile.jpg',
      audioSrc: 'audio/smile.mp3'
    },
    {
      word: 'laugh',
      translation: 'სიცილი',
      image: 'img/laugh.jpg',
      audioSrc: 'audio/laugh.mp3'
    }
  ];

const places = [
  {
    word: 'desert',
    translation: 'უდაბნო',
    image: 'img/desert.jpg',
    audioSrc: 'audio/desert.mp3'
  },
  {
    word: 'mountain',
    translation: 'მთა',
    image: 'img/mountain.jpg',
    audioSrc: 'audio/mountain.mp3'
  },
  {
    word: 'sea',
    translation: 'ზღვა',
    image: 'img/sea.jpg',
    audioSrc: 'audio/sea.mp3'
  },
  {
    word: 'forest',
    translation: 'ტყე',
    image: 'img/forest.jpg',
    audioSrc: 'audio/forest.mp3'
  },
  {
    word: 'jungle',
    translation: 'ჯუნგლები',
    image: 'img/jungle.jpg',
    audioSrc: 'audio/jungle.mp3'
  },
  {
    word: 'village',
    translation: 'სოფელი',
    image: 'img/village.jpg',
    audioSrc: 'audio/village.mp3'
  },
  {
    word: 'city',
    translation: 'ქალაქი',
    image: 'img/city.jpg',
    audioSrc: 'audio/city.mp3'
  },
  {
    word: 'building',
    translation: 'შენობა',
    image: 'img/building.jpg',
    audioSrc: 'audio/building.mp3'
  }  
];

const fruit = [
  {
    word: 'strawberry',
    translation: 'მარწყვი',
    image: 'img/strawberry.jpg',
    audioSrc: 'audio/strawberry.mp3'
  },
  {
    word: 'pineapple',
    translation: 'ანანასი',
    image: 'img/pineapple.jpg',
    audioSrc: 'audio/pineapple.mp3'
  },
  {
    word: 'berry',
    translation: 'ბალი',
    image: 'img/cherry.jpg',
    audioSrc: 'audio/berry.mp3'
  },
  {
    word: 'kiwi',
    translation: 'კივი',
    image: 'img/kiwi.jpg',
    audioSrc: 'audio/kiwi.mp3'
  },
  {
    word: 'apple',
    translation: 'ვაშლი',
    image: 'img/apple.jpg',
    audioSrc: 'audio/apple.mp3'
  },
  {
    word: 'peach',
    translation: 'ატამი',
    image: 'img/peach.jpg',
    audioSrc: 'audio/peach.mp3'
  },
  {
    word: 'avocado',
    translation: 'ავოკატო',
    image: 'img/avocado.jpg',
    audioSrc: 'audio/avocado.mp3'
  },
  {
    word: 'fig',
    translation: 'ლეღვი',
    image: 'img/fig.jpg',
    audioSrc: 'audio/fig.mp3'
  }  
]

export {
  animalA,
  animalB,
  actionA,
  actionB,
  clothes,
  emotions,
  fruit,
  places
};