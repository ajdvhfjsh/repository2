//function Loadjson(file,callback) {
  //var xhr = new XMLHttpRequest();
  //xhr.overrideMimeType("application/json");
  //xhr.open("GET",file,true);
  //xhr.onreadystatechange=function(){
    //if(xhr.readyState === 4 && xhr.status == "200"){
      //callback(xhr.responseText);
    //}

  //};
  //xhr.send(null);
//}
//Loadjson("data.json",function(text)
//{
//  var data =JSON.parse(text);
  //console.log(data);
  //basics(data.details);
//careerinfo(data.career);
//education(data.education);
//skills(data.skills);
//achivements(data.achivement);
//})
function loadjson(file){
return new Promise((resolve,reject)=>{
  return fetch(file).then(response=>{
    if(response.ok){
      resolve(response.json());
    }else{
      reject(new Error('error'));
    }
  })
 })
}
var newfile=loadjson("data.json");
newfile.then(data=>{console.log(data);
basics(data.details);
careerinfo(data.career);
education(data.education);
skills(data.skills);
achivements(data.achivement);


})
var childone=document.querySelector(".child1");
function basics(det){
  var image=document.createElement("img");
  image.src=det.image;
  childone.appendChild(image);
  var name=document.createElement("h4");
  name.textContent=det.name;
  childone.appendChild(name);

  var phone=document.createElement("h4");
  phone.textContent=det.phoneno;
  childone.appendChild(phone);

  var email=document.createElement("a");
  email.herf="mailto:ramyasrithogati1998@gmail.com";
  email.textContent=det.email;
  childone.appendChild(email);

  var add=document.createElement("h2");
  add.textContent="Address:"
  childone.appendChild(add);

  var hr=document.createElement("hr");
  childone.appendChild(hr);

  var p=document.createElement("p");
  p.textContent=det.Address;
  childone.appendChild(p);
}
var childtwo=document.querySelector(".child2");
function careerinfo(info){
  var heading=document.createElement("h2");
  heading.textContent="Carrer Objective:"
  childtwo.appendChild(heading);

  var hr=document.createElement("hr");
  childtwo.appendChild(hr);

  var c=document.createElement("p");
  c.textContent=info.info;
  childtwo.appendChild(c);
}
function education(edu){
  var hd=document.createElement("h2");
  hd.textContent="Educational Qualification"
  childtwo.appendChild(hd);

  var hr=document.createElement("hr");
  childtwo.appendChild(hr);

  var table1=document.createElement("table");
  table1.border="1";
  childtwo.appendChild(table1);

  tabledata="";
  for(i=0;i<edu.length;i++){
    tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
  }
  table1.innerHTML=tabledata;
}
function skills(tec){
  var hd=document.createElement("h2");
  hd.textContent="Technical skills:"
  childtwo.appendChild(hd);

  var hr=document.createElement("hr");
  childtwo.appendChild(hr);

  for(i=0;i<tec.length;i++){
    var title=document.createElement("h4");
    title.textContent=tec[i].title;
    childtwo.appendChild(title);

    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=tec[i].info;
    eduul.appendChild(eduli);
    childtwo.appendChild(eduul);
  }
}
  function achivements(ach){
    var hd=document.createElement("h2");
    hd.textContent="achivements:"
    childtwo.appendChild(hd);

    var hr=document.createElement("hr");
    childtwo.appendChild(hr);

    for(i=0;i<ach.length;i++){
      var title=document.createElement("h4");
      title.textContent=ach[i].title;
      childtwo.appendChild(title);

      var eduul=document.createElement("ul");
      var eduli=document.createElement("li");
      eduli.textContent=ach[i].info;
      eduul.appendChild(eduli);
      childtwo.appendChild(eduul);
    }
  }
  function openpage(){
    window.open("resume.html","_self",true)
  }
