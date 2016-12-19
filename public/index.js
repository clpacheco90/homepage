$(document).ready(function() {

    hideAllSections();
    $("#tbTitles").hide();

    $("#profile1").show();
    $("#skills").show();
    $("#tbTitles").show();

    $("#tabKnowMe, #btKnowMe").on("click", function() {
        hideAllSections(1000);
        $("#knowme").show();
        $("#tbTitles").children().text($("#btKnowMe").text());
        $("#tabKnowMe").toggleClass("hover");
    })

    $("#tabSkills, #btSkills").on("click", function() {
        hideAllSections(1000);
        $("#skills").show();
        $("#tbTitles").children().text($("#btSkills").text());
        $("#tabSkills").toggleClass("hover");
    })

    $("#tabProjects, #btProjects").on("click", function() {
        hideAllSections(1000);
        $("#projects").show();
        $("#tbTitles").children().text($("#btProjects").text());
        $("#tabProjects").toggleClass("hover");
    })

    $("#tabExp, #btExp").on("click", function() {
        hideAllSections(1000);
        $("#experience").show();
        $("#tbTitles").children().text($("#btExp").text());
        $("#tabExp").toggleClass("hover");
    })

    $("#tabSayHi, #btSayHi").on("click", function() {
        hideAllSections(1000);
        $("#sayhi").show();
        $("#tbTitles").children().text($("#btSayHi").text());
        $("#tabSayHi").toggleClass("hover");
    })

    skills();
    emailJS();
})

function emailJS() {
    var myform = $("form#myform");
    myform.submit(function(event) {
        event.preventDefault();

        // Change to your service ID, or keep using the default service
        var service_id = "default_service";
        var template_id = "calvintemplate";

        myform.find("button").text("Sending...");
        emailjs.sendForm(service_id, template_id, "myform")
            .then(function() {                                
            }, function(err) {
                alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));                
            });
        return false;
    });
}

function hideAllSections(timer) {
    setTimeout(function() {
        hideAllSections();
    }, timer);
}

function hideAllSections() {

    $("#tabKnowMe").removeClass("hover");
    $("#tabSkills").removeClass("hover");
    $("#tabProjects").removeClass("hover");
    $("#tabExp").removeClass("hover");
    $("#tabSayHi").removeClass("hover");

    $("#sayhi").hide();
    $("#experience").hide();
    $("#knowme").hide();
    $("#skills").hide();
    $("#projects").hide();
}

function skills() {
    $("#madasadam").on("click", function() {
        window.location.href = "http://globalgamejam.org/2014/games/mad-adam";
    });

    $("#orixas").on("click", function() {
        window.location.href = "https://app.box.com/s/pv5ijb838je6byporpr9fdticmv4brd6";
    });

    $("#underRiders").on("click", function() {
        window.location.href = "http://ludumdare.com/compo/ludum-dare-29/?action=preview&uid=25300";
    });

    $("#skyBattle").on("click", function() {
        window.location.href = "https://app.box.com/s/5xue4osiezxyi92yoqrq";
    });

    $("#sosTheBus").on("click", function() {
        window.location.href = "http://ludumdare.com/compo/2013/12/16/sos-someone-stop-the-bus/";
    });

    $("#ergos").on("click", function() {
        window.location.href = "http://ludumdare.com/compo/ludum-dare-25/?action=preview&uid=17793";
    });

    $("#getTheRed").on("click", function() {
        window.location.href = "https://app.box.com/s/w8j4q8bnyx5os3nlbgf90w9etyq8qt3n";
    });

    $("#fighTche").on("click", function() {
        window.location.href = "https://app.box.com/s/l7zkm62j6amj9o892ubp9hmke9ejd4q6";
    });

    $("#spaceInvasion").on("click", function() {
        window.location.href = "https://app.box.com/s/0jhw89gkoe9y0af24ode83kn2gmvyfl7";
    });

    $("#breakout").on("click", function() {
        window.location.href = "https://app.box.com/s/x2yydg2il2j4hsf7qwobkxedpjragx4w";
    });

    $("#tapper").on("click", function() {
        window.location.href = "https://app.box.com/s/vw0aham1k08dkwddmsmvlik7fg2y6cdg";
    });

    $("#spiderThreat").on("click", function() {
        window.location.href = "http://globalgamejam.org/2015/games/spider-threat";
    });

    $("#wackySheriffFromMars").on("click", function() {
        window.location.href = "https://app.box.com/s/m6l3lv5f1yzhbmbllv22juvaxq312e3l";
    });

    $("#canestechnologies").on("click", function() {
        window.location.href = "https://canestechnologies.com";
    });

    $("#harion").on("click", function() {
        window.location.href = "https://harion.stream";
    });
}