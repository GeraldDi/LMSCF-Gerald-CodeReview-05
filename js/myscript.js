i=0;
for (i=0; i<data.length; i++){
	$("#list").append('<div id="colelement'+i+'" class ="col-lg-2 offset-1 mb-5 col-md-6 col-sm-12 bg-black mr-n5"> <img src="' + data[i].picture+ '" class="pic">'+'</div>'
	+'<div class ="col-lg-3 col-md-6 col-sm-12 bg-black mb-5 ml-lg-n5 ml-sm-5">' + data[i].title + "<br><br>"+
	"Description: <br>" +data[i].desc+ "<br><br>"+
     '<div id="likenr'+i+'" class="likenumb h2">' +data[i].likes + '</div>'+"<br>"+
    '<button id="button'+i+'" class="likebutton h3">Like here</button>'+'</div>');
}


$(".likebutton").on('click',function(){
	b=(this).id.slice(6);
	d=$("#likenr"+b).text()
	d++;
	$("#likenr"+b).text(d);
	
})





