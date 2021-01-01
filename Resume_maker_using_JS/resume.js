var name = "keshav agrawal";
var career = "Full Stack Web Developer";
var des = "Gym Freak";
console.log("Name:"+ name);
console.log("Career:" + career);
console.log("Description:" + des);
console.log("\n");
var interests = ['Cricket','chess','bollyball']
console.log("MY Interests:")
for(var i=0;i<interests.length;i++){
    console.log("*" + interests[i])
}
console.log("\n");
console.log("My Experience")
var my_experience = {
    Microsoft:{
        pos:"Student Partner",
        des:"Get to collect peoples"
    },
    Coding:{
        pos:"lead",
        des:"i Have to lead a group of so many students"
    }
}
console.log('*' + my_experience.Microsoft.pos + my_experience.Microsoft.des)
console.log('*'+ my_experience.Coding.pos + my_experience.Coding.des)

console.log("\n")
console.log("My Skills")
var skills = ["Python","Web","CP","DSA","Microprocessor","TOC","MATH"]
for(var i =0;i<skills.length;i++){
    console.log("*" + skills[i])
}
