let Animations = {
  currentAnimation:'Animation1',
  animationNames: ['Animation1', 'Animation2'],

  onload(){
    if ((Load.found == true)&&('animationsdata' in Load.data)){
      this.currentAnimation = Load.data.animationsdata.currentAnimation
      if (Prestige.prestiged == true){
        document.getElementById('changeanimation').title = 'Current Animation: ' + this[this.currentAnimation].name
      }
    } else {
      currentAnimation = 'Animation1'
    }
  },

  changeAnimation(){
    if (Prestige.prestigePoints > 0){
      newAnimationIndex = this.animationNames.indexOf(this.currentAnimation) + 1
      if (newAnimationIndex > (this.animationNames.length - 1)){
        newAnimationIndex = 0
      }
      this.currentAnimation = this.animationNames[newAnimationIndex]
      document.getElementById('changeanimation').title = 'Current Animation: ' + this[this.currentAnimation].name
      Prestige.prestigePoints -= 1
      Prestige.updatePrestigePoints()
    }
  },

  Animation1: {
    animation: [
    '\
  \n\
   o\n\
  /|\\\n\
  / \\',
    
    '\
  \n\
   o\n\
   |\n\
  <<',
    
    '\
  \n\
   o\n\
   |\\\n\
  /<',
    
    '\
  \n\
   o\n\
   |\n\
  <<',
    
    '\
   o\n\
  /|\\\n\
  / \\\n\
    ',
    
    '\
  \n\
   o\n\
   |\n\
   >>',
     
    '\
  \n\
   o\n\
  /|\n\
   >\\',
     
    '\
  \n\
   o\n\
   |\n\
   >>',
    
    '\
   o\n\
  /|\\\n\
  / \\\n\
    ',
    
    '\
  \n\
   o\n\
   |\n\
  ((',
    
    '\
  \\\n\
   o\n\
   |\\\n\
  /(',
    
    '\
   o\n\
   |\n\
   ))\n\
    ',
     
    '\
  \n\
   o\n\
   |\n\
   ))',
     
    ' \
    /\n\
   o\n\
  /|\n\
   )\\',
     
    '\
   o\n\
  /|\\\n\
  / \\\n\
    '
    
    ],
    name: 'Get Sturdy'
  },

  Animation2: {
    animation: [
    `\
  \n\
    o\n\
   /|\\\n\
   / \\`,
  
    `\
    o\n\
   /|\\\n\
   / \\\n\
    `,

    `\
  \n\
    o\n\
   /|\\\n\
   / \\`,

    `\
  \n\
   o--^
    v\n\
  `,

    `\
    <\n\
   \\|/\n\
    o\n\
  `,

    `\
  \n\
    \\\n\
  v--o\n\
  `,


    `\
  \n\
   o\n\
  /|\n\
   |`

  ],
    name: 'Backflip'
  }
}
