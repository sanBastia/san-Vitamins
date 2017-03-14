const model = require('../models')
const axios = require('axios')


module.exports = {

    seed : function(req,res){
              axios.get('http://www.quotzzy.co/api/quote')
        .then(function (response) {
        if(!response.data.author){
          var data = {
            quotes: response.data.text,
            author: "Anonymous",
            wiki: "Anonymous"
          }
        }else{
          var data = {
            quotes: response.data.text,
            author: response.data.author.name,
            wiki: response.data.author.wiki
          }
        }

        model.create(data)
        .then(function(item){
          console.log(item);
          if(item)
            res.render('index',{data : item})
          else {
            res.render('index', {data: 'no data'})
          }
        }).catch(function(err){
          if(err) throw err
        })

        })
        .catch(function (error) {
        console.log(error);
        });


  },

  quote : function(req,res){

        axios.get('http://www.quotzzy.co/api/quote')
          .then(function (response) {
              if(!response.data.author){
              var data = {
                quotes: response.data.text,
                author: "Anonymous",
                wiki: "Anonymous"
              }
              }else{
              var data = {
                quotes: response.data.text,
                author: response.data.author.name,
                wiki: response.data.author.wiki
              }
              }

          model.create(data)
          .then(function(item){
          console.log(item);
          if(item)
            res.json({data : item})

          }).catch(function(err){
          if(err) throw err
          })
          })
          .catch(function (error) {
          console.log(error);
          });
      }

}
