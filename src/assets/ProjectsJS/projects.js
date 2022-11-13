import Wordle from '../../assets/branding/Wordle-Clone.png'
import TicTacToe from '../../assets/branding/Tic-Tac-toe.png'
import Filmingo from '../../assets/branding/Filmingo.png'
import PizzaPanda from '../../assets/branding/PizzaPanda.png'

export const projects = [
  {
    title: 'Wordle-Clone', 
    deploymentLink: 'https://luigis-wordle.netlify.app', 
    repositoryLink: 'https://github.com/KnucklesLT/wordleDupe',
    image: Wordle,
    description: `
    Let me paint you a tale of my love for wordle. It was 2021 and we were a SOLID year and change into the pandemic. Most of us were confined at home to be good people for our friends and family but the boredom was immense. Then like a shining beacon of mental hope, came wordle, the (relatively) simple game of guessing a five letter word and trying to guess the secret word based on the hints given from that first guess.
    The hints being,
      whether the letter tiles turned black (letter not in the word)
      yellow (letter in the word but wrong place)
      or green (letter in the word AND in the right place)
    What a dream, something for your mind to grab on to while the world continued its insanity. Thus, my love for wordle was born.
    `
  },

  {
    title: 'Tic-Tac-Toe', 
    deploymentLink: 'https://luigi-tejadas-tic-tac-toe.netlify.app',
    repositoryLink: 'https://github.com/KnucklesLT/ttt-weekend',
    image: TicTacToe,
    description: ``
  },
  {
    title: 'PizzaPanda',
    deploymentLink: 'https://pizza-panda.fly.dev/',
    repositoryLink: 'https://github.com/KnucklesLT/PizzaPanda',
    image: PizzaPanda,
    description: `
    Welcome to PizzaPanda Portion Planner, where you can contribute meals to the community and use those meals to help meal plan your days! When I first started this project, all I had was the name (PizzaPanda, gotta love alliteration) and an AI generated image of a panda eating a pizza in the style of Vincent Van Gogh. After a brainstorming session with my instructors, I landed on meal planning (again for the alliteration). Thus PizzaPanda Portion Planner was born!
    `
  },
  {
    title: 'Filmingo-Fantasy-Films', 
    deploymentLink: 'https://filmingo-fantasy-films.netlify.app', 
    repositoryLink: 'https://github.com/KnucklesLT/fantasy-film-front-end',
    image: Filmingo,
    description: `
    Have you ever thought that though a movie may have been good, it would have been way better had there been a different actor/actress in a particular role? Well, then you have come to the right place.This application is a group project inspired by the concept of creating your own Dreamcast for any movie of your choice.
    
    Like fantasy sports, the idea of Fantasy Filmmaker is to allow the user the ability to search for any actor or movie that they enjoy and swap out the leading stars for any actor/actress they would prefer for the role. Maybe you enjoyed the Equalizer, but thought Samuel Jackson would give a better performance as Robert McCall than Denzel Washington. Maybe you want Robert de Niro to play Alan Grant in Jurassic Park? All of these options are now available to you here!
    `
    
  },
]