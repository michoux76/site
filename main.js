var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello',
        eventStart: 1637431200000,
        eventEnd: 1637560800000,
        time:'00:00:00',
        schedule: {
            "1637431200000": "KELLYGATES47",
            "1637438400000": "MATTWALDENAC",
            "1637445600000": "CERIANMUSIC",
            "1637452800000": "MEGANLENIUS",
            "1637460000000": "ANDREWCORE",
            "1637467200000": "FENWATERYEN",
            "1637474400000": "LYRICALLEIA",
            "1637481600000": "COLLEENDAUNCEYMUSIC",
            "1637488800000": "SABYSPARK",
            "1637496000000": "BOBCZAK",
            "1637503200000": "ALANNA_MATTY",
            "1637510400000": "TYLERLEVMUSIC",
            "1637517600000": "JORDINLAINE",
            "1637524800000": "ANNACARMELA",
            "1637532000000": "JULIENBELHUMEUR",
            "1637539200000": "GABISTREAMS",
            "1637546400000": "SYDNEYPRAGUE",
            "1637553600000": "JONLIMUSIC"
        }
    },
    methods: {
        StringDate(date) {
            start = new Date(parseInt(date))
            end = new Date(parseInt(date) + 7200000)
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
                app.time = new Date(1637431200000 - new Date().getTime()).toLocaleTimeString('en-US', { hour: '2-digit',minute: '2-digit',second: '2-digit', hour12: false })                
            },1000)
        }
    },
    created: function () {
        this.time = new Date(1637431200000 - new Date().getTime()).toLocaleTimeString('en-US', { hour: '2-digit',minute: '2-digit',second: '2-digit', hour12: false }) 
    }
})