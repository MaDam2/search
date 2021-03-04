var size = 10;
    getList();
    $("#list").on("click", "a", function(){
        var title = $(this).attr("title");
        var authors = $(this).attr("authors");
        var contents = $(this).attr("contents");
        var price = $(this).attr("price");
        var image = $(this).find("img").attr("src");
        $("#image").attr("src", image);
        $("#title").html(title);
        $("#authors").html(authors + " (" + price + "원)");
        $("#contents").html(contents);
    });
    $("#txtQuery").on("keydown", function(e){
        if(e.keyCode == 13){
            getList();
        }
    });
    $("#btnMore").on("click", function(){
        size += 5;
        getList();
    });

    function getList(){
        var query=$("#txtQuery").val();
        $.ajax({
            type:"get",
            url:url,
            headers:{"Authorization": "KakaoAK b16b87dfd25d35b3c5f76454375203c2"},
            data:{"query":query, "size":size},
            dataType:"json",
            success:function(data){
                var temp = Handlebars.compile($("#temp").html());
                $("#list").html(temp(data)).listview("refresh");
            }
        });
    }