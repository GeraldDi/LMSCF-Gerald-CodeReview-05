i=0;
for (i=0; i<data.length; i++){
	$("#list").append('<div id="colelement'+i+'" class ="col-lg-3 col-md-6 col-sm-12 bg-black"> <img src="' + data[i].picture+ '" class="pic">'+'</div>'
	+'<div class ="col-lg-3 col-md-6 col-sm-12 bg-black">' + data[i].title + "<br>"+
	"Description:" +data[i].desc+ "<br>"+
    "Like:"+ '<div id="likenr'+i+'" >' +data[i].likes + '</div>'+"<br>"+
    '<button id="button'+i+'" class="likebutton">Likebutton</button>'+'</div>');
}


$(".likebutton").on('click',function(){
	b=(this).id.slice(6);
	d=$("#likenr"+b).text()
	d++;
	$("#likenr"+b).text(d);
	
})





