function countDown() {

    var countDownDate = new Date("2021-11-20T18:00:00.000Z").getTime();
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let str;

    if(days) {
        str += days + "d"
    }
    if (hours) { str += " "+ hours + "h"}
    if (minutes) { str += " "+ minutes + "m"}
    if (seconds) { str += " "+ seconds + "s"}
  
    // If the count down is finished, write some text
    if (distance < 0) {
      return "EXPIRED";
    } else {
        return str
    }
  }

var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello',
        eventStart: new Date("2021-11-20T18:00:00.000Z"),
        eventEnd: new Date("2021-11-22T06:00:00.000Z"),
        time:'00:00:00',
        schedule: {
            "2021-11-20T18:00:00.000Z":"KELLYGATES47",
            "2021-11-20T20:00:00.000Z":"MATTWALDENAC",
            "2021-11-20T22:00:00.000Z":"CERIANMUSIC",
            "2021-11-21T00:00:00.000Z":"MEGANLENIUS",
            "2021-11-21T02:00:00.000Z":"ANDREWCORE",
            "2021-11-21T04:00:00.000Z":"FENWATERYEN",
            "2021-11-21T06:00:00.000Z":"LYRICALLEIA",
            "2021-11-21T08:00:00.000Z":"COLLEENDAUNCEYMUSIC",
            "2021-11-21T10:00:00.000Z":"SABYSPARK",
            "2021-11-21T12:00:00.000Z":"BOBCZAK",
            "2021-11-21T14:00:00.000Z":"ALANNA_MATTY",
            "2021-11-21T16:00:00.000Z":"TYLERLEVMUSIC",
            "2021-11-21T18:00:00.000Z":"JORDINLAINE",
            "2021-11-21T20:00:00.000Z":"ANNACARMELA",
            "2021-11-21T22:00:00.000Z":"JULIENBELHUMEUR",
            "2021-11-22T00:00:00.000Z":"GABISTREAMS",
            "2021-11-22T02:00:00.000Z":"SYDNEYPRAGUE",
            "2021-11-22T04:00:00.000Z":"JONLIMUSIC"
        }
    },
    methods: {
        StringDate(date) {
            start = new Date(date)
            end = new Date(new Date(date).getTime() + 7200000)
            // ${date.toLocaleString('en-US',{ weekday: 'short', day: 'numeric'})}
            return `${start.toLocaleString('en-GB',{ weekday: 'long'})} ${start.toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true })} / ${end.toLocaleString('en-GB',{ weekday: 'long'})} ${end.toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit', hour12: true })}`
        },
        open(name) {
            window.open('https://www.twitch.tv/'+name,'_blank')
        }
    },
    watch: {
        time: function (d) {
            setTimeout(function () {
                app.time = countDown()                
            },1000)
        }
    },
    created: function () {
        this.time = countDown() 
    }
})