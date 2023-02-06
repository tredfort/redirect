<script type="text/javascript">
var caution = false

function set_Cookie(id_cookie, value, validity, way, visit_domain, safe) {
 var cur_Cookie = id_cookie + "=" + escape(value) +
    ((validity) ? "; validity=" + validity.toGMTString() : "") +
    ((way) ? "; way=" + way : "") +
    ((visit_domain) ? "; visit_domain=" + visit_domain : "") +
    ((safe) ? "; safe" : "")
 if (!caution || (id_cookie + "=" + escape(value)).length <= 4000)
    document.cookie = cur_Cookie
 else if (confirm("Cookie более 4 KB и будут обрезаны!"))
    document.cookie = cur_Cookie
}

function get_Cookie(id_cookie) {
 var particle = id_cookie + "="
 var cookie_StartIndex = document.cookie.indexOf(particle)
 if (cookie_StartIndex == -1) return null
 var cookie_EndIndex =
     document.cookie.indexOf(";", cookie_StartIndex + particle.length)
 if (cookie_EndIndex == -1) cookie_EndIndex = document.cookie.length
 return unescape(document.cookie.substring(cookie_StartIndex +
     particle.length, cookie_EndIndex))
}

function fix_Date(date) {
 var base_date = new Date(0)
 var skew_date = base_date.getTime()
 if (skew_date > 0) date.setTime(date.getTime() - skew_date)
}

var now_date = new Date()
fix_Date(now_date)
now_date.setTime(now_date.getTime() + 365 * 24 * 3600000)
var col_visits = get_Cookie("counter")
if (!col_visits) col_visits = 1
else col_visits = parseInt(col_visits) + 1
set_Cookie("counter", col_visits, now_date)
document.write("Вы посещали данную страничку " + col_visits + " раз(а).")

{/* let links = ["https://youtu.be/HEXWRTEbj1I",
            "https://youtu.be/dQw4w9WgXcQ",
            "https://www.meme-arsenal.com/memes/7ff9ee1dc794c4ff0e30432f5c8d68ee.jpg"];

let number = Math.floor(Math.random() * links.length);
location.assign(links[number]); */}
</script>