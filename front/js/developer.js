function createSearchData(e, s, t, a) {
    if (s = s || !1, t = t || !1, a) var r = $("#search-filter");
    else r = $(e.target).parents(".form");
    if (city = $(r).find("#cities").val(), type = $(r).find("#type").val(), bedroom = $(r).find("#bedroom").val(), 0 != s && 0 != t ? (min_price = $("#filter_min_price").val(), max_price = $("#filter_max_price").val(), max_price_text = $("#filter_max_price").children("option").filter(":selected").text()) : (min_price = $(r).find("#min_price").val(), max_price = $(r).find("#max_price").val(), max_price_text = $(r).find("#max_price").children("option").filter(":selected").text()), ref = $(r).find("#ref").val(), url = "turkey/", areaURI = window.location.href, segment = areaURI.split("/").length - 1 - (-1 == areaURI.indexOf("http://") ? 0 : 2), 5 == segment && (area = areaURI.split("/")[6]), "select" != city && (url += city + "/"), 5 == segment && areaURI.split("/")[6] != type && (area = areaURI.split("/")[6], url += area + "/"), "select" != type && (url += type + "/"), 5 == segment && areaURI.split("/")[7] != type && (area = areaURI.split("/")[7], url += area + "/"), "select" != bedroom && (-1 == url.indexOf("?") ? url += "?bedroom=" + bedroom : url += "&bedroom=" + bedroom), "select" != max_price && "select" != min_price ? -1 == url.indexOf("?") ? url += "?priceRange=" + min_price + ":" + max_price : url += "&priceRange=" + min_price + ":" + max_price : "select" != min_price ? -1 == url.indexOf("?") ? url += "?priceRange=" + min_price : url += "&priceRange=" + min_price : "select" != max_price && (-1 == url.indexOf("?") ? max_price_text.includes("+") ? url += "?priceRange=" + max_price : url += "?priceRange=0.00:" + max_price : max_price_text.includes("+") ? url += "&priceRange=" + max_price : url += "&priceRange0.00:" + max_price), a && (-1 == url.indexOf("?") ? url += "?p=asc" : url += "&p=asc"), "" != ref) {
        if (upref = ref.toUpperCase(), "PTFS" != upref.substr(0, 4)) return alert("Invalid reference number"), !1;
        if (!parseInt(ref.substr(4, ref.length), 10) > 0) return alert("Invalid reference number"), !1;
        if (ref.length < 8) return alert("Invalid reference number"), !1;
        url = "turkey/?ref=" + ref
    }
    return location.href = SITE_URL + "/real_estate/" + url, !1
}

function disableProperty(e) {
    $.get(SITE_URL + "/real_estate/disable_property/" + e).success(function(e) {
        1 == e.status ? ($(".message").toggleClass("closed success").text(e.msg), setTimeout(function() {
            $(".message").toggleClass("closed success")
        }, 5e3)) : ($(".message").toggleClass("closed error").text(e.msg), setTimeout(function() {
            $(".message").toggleClass("closed error")
        }, 5e3))
    })
}

function makeFeatured(e) {
    $.get(SITE_URL + "/real_estate/make_feature/" + e).success(function(s) {
        1 == s.status ? ($(".message").toggleClass("closed success").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed success")
        }, 5e3), $("[data-rel=" + e + "] .featured-property").removeClass("fa-star-o"), $("[data-rel=" + e + "] .featured-property").addClass("fa-star"), $("[data-rel=" + e + "] .featured-property").removeAttr("onclick"), $("[data-rel=" + e + '][onclick*="makeFeatured"]').attr("onclick", "removeFeatured(" + e + ")")) : ($(".message").toggleClass("closed error").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed error")
        }, 5e3))
    })
}

function makeSpecial(e) {
    $.get(SITE_URL + "/real_estate/make_special/" + e).success(function(s) {
        1 == s.status ? ($(".message").toggleClass("closed success").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed success")
        }, 5e3), $("[data-rel=" + e + '][onclick*="makeSpecial"]').attr("onclick", "removeSpecial(" + e + ")"), $("[data-rel=" + e + "] span.special-text").text("Mark as  Un Special")) : ($(".message").toggleClass("closed error").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed error")
        }, 5e3))
    })
}

function makeCitizenship(e) {
    $.get(SITE_URL + "/real_estate/make_citizenship/" + e).success(function(s) {
        1 == s.status ? ($(".message").toggleClass("closed success").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed success")
        }, 5e3), $("[data-rel=" + e + '][onclick*="makeCitizenship"]').attr("onclick", "removeCitizenship(" + e + ")"), $("[data-rel=" + e + "] span.citizen-text").text("Mark as  Un Citizenship")) : ($(".message").toggleClass("closed error").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed error")
        }, 5e3))
    })
}

function removeFeatured(e) {
    $.get(SITE_URL + "/real_estate/remove_feature/" + e).success(function(s) {
        1 == s.status ? ($(".message").toggleClass("closed success").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed success")
        }, 5e3), $("[data-rel=" + e + "] .featured-property").removeClass("fa-star"), $("[data-rel=" + e + "] .featured-property").addClass("fa-star-o"), $("[data-rel=" + e + "] .featured-property").removeAttr("onclick"), $("[data-rel=" + e + '][onclick*="removeFeatured"]').attr("onclick", "makeFeatured(" + e + ")")) : ($(".message").toggleClass("closed error").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed error")
        }, 5e3))
    })
}

function removeSpecial(e) {
    $.get(SITE_URL + "/real_estate/remove_special/" + e).success(function(s) {
        1 == s.status ? ($(".message").toggleClass("closed success").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed success")
        }, 5e3), $("[data-rel=" + e + '][onclick*="removeSpecial"]').attr("onclick", "makeSpecial(" + e + ")"), $("[data-rel=" + e + "] span.special-text").text("Mark as Special")) : ($(".message").toggleClass("closed error").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed error")
        }, 5e3))
    })
}

function removeCitizenship(e) {
    $.get(SITE_URL + "/real_estate/remove_citizenship/" + e).success(function(s) {
        1 == s.status ? ($(".message").toggleClass("closed success").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed success")
        }, 5e3), $("[data-rel=" + e + '][onclick*="removeCitizenship"]').attr("onclick", "makeCitizenship(" + e + ")"), $("[data-rel=" + e + "] span.citizen-text").text("Mark as Citizenship")) : ($(".message").toggleClass("closed error").text(s.msg), setTimeout(function() {
            $(".message").toggleClass("closed error")
        }, 5e3))
    })
}

function markAsSold(e) {
    $.get(SITE_URL + "/real_estate/mark_as_sold/" + e).success(function(e) {
        1 == e.status ? ($(".message").toggleClass("closed success").text(e.msg), setTimeout(function() {
            $(".message").toggleClass("closed success")
        }, 5e3)) : ($(".message").toggleClass("closed error").text(e.msg), setTimeout(function() {
            $(".message").toggleClass("closed error")
        }, 5e3))
    })
}

function markAsHide(e) {
    $.get(SITE_URL + "/real_estate/mark_as_hidden/" + e).success(function(e) {
        1 == e.status ? ($(".message").toggleClass("closed success").text(e.msg), setTimeout(function() {
            $(".message").toggleClass("closed success")
        }, 5e3)) : ($(".message").toggleClass("closed error").text(e.msg), setTimeout(function() {
            $(".message").toggleClass("closed error")
        }, 5e3))
    })
}

function updateTheDate(e) {
    $.get(SITE_URL + "/real_estate/update-the-date/" + e).success(function(e) {
        1 == e.status ? ($(".message").toggleClass("closed success").text(e.msg), setTimeout(function() {
            $(".message").toggleClass("closed success")
        }, 5e3)) : ($(".message").toggleClass("closed error").text(e.msg), setTimeout(function() {
            $(".message").toggleClass("closed error")
        }, 5e3))
    })
}

function loadDoc() {
    console.log("rt");
    var e = $(this).attr("data-id");
    console.log(e);
    var s = new XMLHttpRequest;
    s.onreadystatechange = function() {}, s.open("GET", SITE_URL + "/incrementViews?id" + e, !0), s.send()
}
$(document).ready(function() {
    $("img").on("contextmenu", function(e) {
        return !!e.shiftKey
    }), $(".min_price, .max_price").on("change", function() {
        var e = $($(this).data("parent")),
            s = $(e).find(".min_price"),
            t = $(e).find(".max_price"),
            a = $(s).val(),
            r = $(t).val();
        return parseFloat(a) > parseFloat(r) && ($(s).val(r.toString()), $(t).val(a.toString())), !1
    }), console.log("developer loaded")
}), $("#resendActivationCode").click(function() {
    var e = $(this).attr("userRel");
    location.href = SITE_URL + "/sendActiveCode/" + e
}), $("#seo form").on("submit", function() {
    $(this).addClass("saving"), $(this).find(".btn").attr("disabled", "disabled").text("Saving...")
});