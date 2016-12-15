$(document).ready(function() {

    //hideProfiles();
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
    //animateProfiles();

})

function animateProfiles() {
    $("#profile1").fadeOut(200);
    $("#profile2").fadeIn(200).fadeOut(800);
    //$("#profile3").fadeIn(1200).fadeOut(1600);
}

function hideProfiles() {
    $("#profile1").hide();
    $("#profile2").hide();
    $("#profile3").hide();
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

    $("#knowme").hide();
    $("#skills").hide();
    $("#projects").hide();
}