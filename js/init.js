$(function () {
    var descMDE = new SimpleMDE({ element: document.getElementById("dropbox-desc") });
    $("#dropbox-tags").select2({
        width: 'resolve',
        placeholder: "Select tags"
    });
    var sourceforgePatt = new RegExp("^https?:\/\/?(?:www\.)?(sourceforge)\.net\/(projects)(\/)?([a-zA-Z0-9-]*)\/?$"),
        thingiversePatt = new RegExp("^https?:\/\/?(?:www\.)?(thingiverse)\.com\/(thing)(:)?([0-9]*)\/?$"),
        pinshapePatt = new RegExp("^https?:\/\/?(?:www\.)?(pinshape)\.com\/(items)(\/)?([a-zA-Z0-9-]*)\/?$"),
        instructablesPatt = new RegExp("^https?:\/\/?(?:www\.)?(instructables)\.com\/(id)(\/)?([a-zA-Z0-9-]*)\/?$"),
        githubPatt = new RegExp("^https?:\/\/?(?:www\.)?(github)\.com\/?([a-zA-Z0-9]*)(\/)?([a-zA-Z]*)\/?$");

    $('.tabs li').click(function () {

        var e= $(this).find('a');
        var d= e.data('div');
        $('.tab-content').removeClass('active');
        $('#'+d).addClass('active');
        $('.tabs li').removeClass('active');
        $(this).addClass('active');


    });

    $('.custom-social-part').click(function(e){
        e.stopPropagation();
        e.preventDefault();
    })

    $('.og-post-content').click(function(e){
        e.stopPropagation();
        e.preventDefault();
    })

    function validateUrl(url, matche) {
        var sourceforgeRes = sourceforgePatt.test(url),
            thingiverseRes = thingiversePatt.test(url),
            pinshapeRes = pinshapePatt.test(url),
            instructablesRes = instructablesPatt.test(url),
            githubRes = githubPatt.test(url);
            if(matche){
                var res = null;

                switch (true){
                    case sourceforgeRes:
                        res = url.match(sourceforgePatt);
                        break;
                    case thingiverseRes:
                        res = url.match(thingiversePatt);
                        break;
                    case pinshapeRes:
                        res = url.match(pinshapePatt);
                        break;
                    case instructablesRes:
                        res = url.match(instructablesPatt);
                        break;
                    case githubRes:
                        res = url.match(githubPatt);
                        break;
                    default:
                        alert("false");
                        break;
                }
                return res;
            }
            return sourceforgeRes || thingiverseRes || pinshapeRes || instructablesRes || githubRes;

    }
    $(".search-url").keyup(function(){
        console.log($(this).val());
        var $searchBtn = $(this).closest('.search-content').find('.search-btn');
        var currentInpVal = $(this).val().trim();
        if(currentInpVal.length==0){
            $searchBtn.text('Tell me more');
            return;
        };

        if(validateUrl(currentInpVal)){
            $searchBtn.text('Share it');
        }else {
            $searchBtn.text('Search');
        };

    });
    // validate search
    $('.search-btn').click(function (e) {
        e.preventDefault();
        var currentInp = $(this).closest('.search-content').find('.search-url'),
            currentInpVal = currentInp.val().trim(),
            res;

        res =  validateUrl(currentInpVal, true)
        if(res!==null){
            addOpenassistive(res);
        }

    })
    $('.set-it-btn').click(function () {
        var type =  $("#dropbox-type").val(),
            title =  $("#dropbox-name").val(),
            description = descMDE.value(),
            tags = $("#dropbox-tags").val(),
            data = $("#dropbox-data").data('res') || {};
        data.type = type;
        data.title = title;
        data.description = description;
        data.tags = tags;
        console.log(data);
        saveOpenassistive(data);

    })
    var API_URL = "http://api.openassistive.org";
    function addOpenassistive(data) {
        $("#loader").fadeIn();
        var id = data[1],
            specific = data[2],
            divider = data[3],
            parts = data[4];
        console.log(data)
        $.get(API_URL+"/add/"+id+"/"+specific+divider+parts, function(data, status){
            console.log(data  , status);
            $('[href="#tab-3"]').trigger('click');
            $('#dropbox-type option[value="'+data.type.trim()+'"]').prop('selected', true);
            $("#dropbox-name").val(data.title);
            descMDE.value(data.description);
            descMDE.togglePreview = true;
            $("#dropbox-data").data('res',data);
            $('.add-part-content').slideDown();
        })
        .fail(function() {
            alert( "error" );
        })
        .always(function() {
            $("#loader").fadeOut();
            $('.search-url').val('');
        });
    }
    function saveOpenassistive(data) {
        $("#loader").fadeIn();
        $.ajax({
            url: API_URL+"/save",
            type: "POST",
            data: data,
            dataType: "json",
            success: function (result) {
                $("#loader").fadeOut();
                console.log(result);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $("#loader").fadeOut();
                console.log(xhr.status, thrownError);
                alert("Error: "+thrownError);
            }
        });
    }


});