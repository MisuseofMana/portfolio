const comics = {
  pageName: 'Comics',
  description:[`I make comics in my spare time about fantasy, adventure, and friendship. Click a comic to read more.`],
  links:[
    {
      title:"Misuse of Mana",
      category:"Comic",
      description:['An ancient webcomic from long ago, discontinued for now, but boasts a world full of magic, friendship, and world threatening forces.'],
      cardAlt:"Digitally drawn cartoon style drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow.",
      background:"mofmSplash",
      smallBackground:'smallMofmSplash',
      link:"https://tapas.io/episode/793285",
    },
    {
      title:"Psychic Psychic Cowboy",
      category:"Comic",
      description:['A tale about a double psychic cowboy.', 'Coming Soon'],
      cardAlt:"A desert scene depicting the rising sun, which is distorted and giving off rainbow colors.",
      background:"ppcSplash",
      smallBackground:'smallPpcSplash',
    },
    {
      title:"Ire",
      category:"Comic",
      description:['A short comic illustrating a poem about overcoming ones own inner conflict.'],
      cardalt:"Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow.",
      background:"ireSplash",
      smallBackground:'smallIreSplash',
      link:"https://gum.co/gXbKmf",
    }
  ]
};

const books = {
  pageName: 'Books',
  description:[`I've dabbled in self publishing and produced two version of a book named "Dungeons of Amara." <a href="https://gumroad.com/l/CsdPh">You can purchase a digital or physical version of the 2019 edition on my Gumroad.</a> The older version is discontinued with no plans to reprint.`],
  links:[
    {
      title:"Dungeons Of Amara",
      category:"Publication",
      description:['From Amara, comes this bards book of poetry and illustrations depicting baddies, merchants, and adventurers found in dark dungeons, deep caves, and bustling towns.'],
      cardAlt:"Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow.",
      background:"doaSplash",
      smallBackground:'smallDoaSplash',
      link:"https://gum.co/CsdPh",
    },
  ]
}

const coding = {
  pageName: 'Coding',
  description:[`I'm a web developer with a focus on front end UI/UX. I also am trained in SQL and Google Firebase.`, `Click on the Github image below to check out my codebases.`],
  links:[
    {
      title:"@MisuseofMana GitHub",
      category:"Coding",
      description:[`My hobby GitHub, accessible to the public for forking, collaborating, and making connections.`],
      cardAlt:"An image depicting code for a web browser rpg game and the github logo, Octocat, a half octopus, half cat creature.",
      background:"gitSplash",
      smallBackground:'smallGitSplash',
      link:"https://github.com/MisuseofMana",
    },
    // {
    //   title:"D&D Char/Item Generator",
    //   description:[`A work in progress, creating a D&D inspired random item generator and random character generator with my friend David.`],
    //   cardAlt:"Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow.",
    //   background:"doaSplash"
    // },
  ]
}

const podcasts = {
  pageName: 'Podcasts',
  description:[`Among all my other trades, I'm a half-hearted audiophile, there's only so much time in a day for me to create and produce high quality content, so this is my throwaway hobby and collaborative musing time with my friends, family, and podcasting pals.`, `My cohost on "Welcome to Amara" Andy, along with our audio editor <a href="https://www.fiverr.com/shifted_audio">Pedro</a> aid me in bringing to life the world of Amara. In contrast, I make garbage musings under the guise of "This is Nothing".`],
  links:[
    {
      title:"Welcome To Amara",
      category:"Podcast",
      description:["A fully produced podcast of a play by post Dungeon World campaign showcasing a fantasy realm with carefully crafted lore to uncover."],
      cardAlt:"Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow.",
      background:"wtaSplash",
      smallBackground:'smallWtaSplash',
      link:"https://www.welcometoamara.com/",
    },
    {
      title:"This Is Nothing",
      category:"Podcast",
      description:[`Don't worry about this. It's nothing. It's nonsense.`, `It's uncategorizable.`],
      cardAlt:'A textured image resembling dark blue fur, the words "This is Nothing" are seen above the fur.',
      background:"nothingSplash",
      smallBackground:'smallNothingSplash',
      link:"https://soundcloud.com/shibbone"
    },
  ]
}

const games = {
  pageName: 'Games',
  description:[`A list of my esoteric and expirimental web games. I have an interest in cryptography and ciphers that pairs well with my dabbling in web development.`],
  links:[
    {
      title:"Crickburrow Project",
      category:"Web Game",
      description:[`Crickburrow is a narrative cipher game being beamed from another realm. Don't spend long in the stream friend, you'll lose yourself.`],
      cardAlt:"A document discussing the Crickburrow foundation, appears to be a confidental outline.",
      background:"crickSplash",
      smallBackground:'smallCrickSplash',
      link:"http://www.crickburrow.com/"
    },
    
    {
      title:"Moebius Dungeons",
      category:"Web Game",
      description:[`A high fantasy hack and slash adventure where you attack monsters to gain coins, then spend your wealth on lavish equipment and enchantments.`],
      cardAlt:"A ghostly sword set on a vibrant neon pink background.",
      background:"modunSplash",
      smallBackground:'smallModunSplash',
      link:"https://moebiusdungeons.com/"
    },
  ]
}

const photography = {
  pageName: 'Photography',
  description:[`Back in the early 2000's I bought a Cannon Rebel T3 camera and it quickly became a good friend of mine. I twist and alter my mundane life into a catalogue of still frames that tell a story beyond the captured moment. Look carefully, you might find more than you expect.`],
  links:[
    {
      title:"RickCrickCrick",
      category:"Photography",
      description:[`A peek into another realm, where life is a film of epic proportions with captions and perilous adventure. There's more in the universe than meets the eye.`, `Are you paying attention?`],
      cardAlt:"An image depicting code for a web browser rpg game and the github logo, Octocat, a half octopus, half cat creature.",
      background:"rccSplash",
      smallBackground:'smallRccSplash',
      link:"https://rickcrickcrick.tumblr.com",
    },
  ]
}

export default {
  comics,
  books,
  coding,
  podcasts,
  games,
  photography
}