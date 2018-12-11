const http = require('http');
const cheerio = require('cheerio')
const request = require('request');
const path = require('path');
const fs = require('fs');
request('http://www.netbian.com/youxi/',function(error,resopone,body){
    let $ = cheerio.load(body);
//    console.log($('#main img'));
    $('#main .list img').each(function(idx,ele){
        // console.log(ele);
        let src = $(ele).attr('src');
        let fileName = path.basename(src);
        console.log(fileName);
        request(src).pipe(fs.createWriteStream('../img/'+fileName));



        // if(src.startsWith('/')){
        //     src = 'http://www.netbian.com'+src;
        //     try{
        //         request(src,function(err,res,body){
        //             try{
        //                 let $ = cheerio.load(body);
        //                 $('.pic img').each(function(idx,ele){
        //                     let url = $(ele).attr('src');
        //                     // console.log(url);
        //                     let imgName = path.basename(url);
        //                     request(url).pipe(fs.createWriteStream('./img/'+imgName));
        //                 })
        //                 // console.log($)
        //             }catch(e){

        //             }
                    
        //         });
        //     }catch(e){

        //     }
        // }
    });
});