const express = require('express');
let sortJsonArray = require('sort-json-array');

const app = express();
const data = require('./public/heroes.json');
let heroinfo;

app.get('/api/heroes', (req, res) => {
  console.log(data);
  heroinfo = data.map(function(hero) {
      let info = {
        "name": hero.name,
        "realname": hero.biography.fullName,
        "placebirth": hero.biography.placeOfBirth,
        "image":hero.images.sm,
        "race": hero.appearance.race
      }
      return info;
    
  }).filter(Boolean)
  
  //console.log(heroinfo);
  res.json(heroinfo);
});

app.get('/api/fuerzamayor60', (req,res)=>{
  heroinfo = data.map(function(hero) {
    if(hero.powerstats.strength > '60'){
      let info = {
        "name": hero.name,
        "realname": hero.biography.fullName,
        "placebirth": hero.biography.placeOfBirth,
        "image":hero.images.sm
      }
      return info;
    }
  }).filter(Boolean)
  
  console.log(heroinfo);
  res.json(heroinfo);
});

app.get('/api/top10poder', (req,res)=>{
  heroinfo = data.sort((hero1,hero2) => (hero2.powerstats.power > hero1.powerstats.power) ? 1 : ((hero1.powerstats.power > hero2.powerstats.power) ? -1 : 0)).map(hero =>  {
      let info = {
        "name": hero.name,
        "realname": hero.biography.fullName,
        "placebirth": hero.biography.placeOfBirth,
        "image":hero.images.sm
      }
      return info;
    
  }).slice(0,10).filter(Boolean)
  console.log(heroinfo);
  res.json(heroinfo);
});

app.get('/api/veloz60eintelmenos60',(req,res) => {
  heroinfo = data.map(function(hero) {
    if(hero.powerstats.speed > '60' && hero.powerstats.intelligence < '60'){
      let info = {
        "name": hero.name,
        "realname": hero.biography.fullName,
        "placebirth": hero.biography.placeOfBirth,
        "image":hero.images.sm
      }
      return info;
    }
  }).filter(Boolean)
  console.log(heroinfo);
  res.json(heroinfo);

});

app.get('/api/top10intelihuman', (req,res)=>{
 

  heroinfo = data.sort((hero1,hero2) => (hero2.powerstats.intelligence > hero1.powerstats.intelligence) ? 1 : ((hero1.powerstats.intelligence > hero2.powerstats.intelligence) ? -1 : 0))
  .filter(hero => (hero.appearance.race === 'Human')).map(hero => {
      let info = {
        "name": hero.name,
        "realname": hero.biography.fullName,
        "placebirth": hero.biography.placeOfBirth,
        "image":hero.images.sm,
        "race": hero.appearance.race
      }
      return info;        
    
  }).slice(0,10).filter(Boolean)
  console.log(heroinfo);
  res.json(heroinfo);
});

app.get('/api/top10veloz', (req,res)=>{
  const bySpeed = data.sort(function(a,b){
    return b.powerstats.speed - a.powerstats.speed;
  })

  heroinfo = (bySpeed).map(hero =>  {
     if(hero.appearance.race !== 'Human'){
      let info = {
        "name": hero.name,
        "realname": hero.biography.fullName,
        "placebirth": hero.biography.placeOfBirth,
        "image":hero.images.sm,
        "race": hero.appearance.race
      }
      return info;
    }     
    
  }).slice(0,10).filter(Boolean)
  console.log(heroinfo);
  res.json(heroinfo);
});

app.get('/api/fuerza80', (req, res) => {
  const heroinfo = data.map(hero => {
    if(hero.powerstats.strength > '80' && hero.appearance.gender === 'Female' && hero.appearance.race !== 'Human' ){
      let info = {
        "name": hero.name,
        "realname": hero.biography.fullName,
        "placebirth": hero.biography.placeOfBirth,
        "image":hero.images.sm,
        "race": hero.appearance.race
      }
      return info;
    }
    
    
  }).filter(Boolean)
  res.json(heroinfo);
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
