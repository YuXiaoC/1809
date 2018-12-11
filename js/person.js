let person = {
    name:'laoma',
    age:18,
 }
//一个文件只能存在一个module.exports暴露出口
//想要暴露多个，则使用exports
//  module.exports = person;
 exports.getName = function(){
     return 'YuXiaoC';
 }
 exports.setName = function(name){
     return person.name = name;
 }