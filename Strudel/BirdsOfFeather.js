//BIRDS OF A FEATHER(REMAKE)

setcps(105/60/4)

// melody (1 bar loop)
let m1 =
note("<[D@3 A@2 ~ D@2] [Cs@2 ~ A@2 ~ Cs@2]>").add("12,24").s("gm_kalimba:3").legato(1.5).fast(2)
.attack(.025).release(.2).lp(1000)
.room(".6:2").postgain(1.5).color('#4dbcf4')._pitchwheel({edo:12,hapRadius:3,thickness:3,circle:1})

// melody with guitar layer (1 bar loop)
let m2 =
note("<[D@3 A@2 ~ D@2] [Cs@2 ~ A@2 ~ Cs@2]>").add("12,24")
.layer(
x=>x.s("gm_kalimba:3").legato(1.5).attack(.025).release(.2).lp(1000).room(".6:2").postgain(2),
x=>x.s("gm_acoustic_guitar_steel:6").clip(1.5).release(.2).room(".6:2").postgain(1)
).fast(2)

// drum pattern (1 bar loop)
let dr =
stack( s("[bd:<1 0>(<3 1>,8,<0 2>:1.3)] , [~ sd:<1 5>:2.5]").note("B1").bank("LinnDrum")
.decay(.3).room(".3:2").fast(2),

s("[LinnDrum_hh(<3 2>,8)]").hp("1000").lp("9000").decay(.3).velocity("[.8 .6]").room(".3:2").fast(2),
s("sh*8").note("B1").bank("RolandTR808").room(".6:2").velocity("[.8 .5]!4").postgain(1.5).fast(2))._pianoroll({vertical:0,flipTime:1,fill:0,labels:1})

// chord progression (8 bar loop)
let chord =
n(`[[0,2,4,6] ~!3] ~ ~ ~
[[ -1,0,2,4] ~!3] ~ ~ ~
[[ 1,3,5,7] ~!3] ~ ~ ~
[[ -2,0,1,3] ~!3] ~ [[-2,-1,1,3] ~!3] ~
`).scale("D:major").s("gm_epiano1:6")
.decay(1.5).release(.25).lp(2500).delay(".45:.1:.3").room(".6:2")
.postgain(1.5).fast(2)

// bass root note (8 bar loop)
let bass1note =
n("<0 -1 1 -2>/2").scale("D1:major").s("gm_lead_8_bass_lead:1")
.lp(800).clip(.1).attack(.2).release(.12)
.delay(".45:.1:.3").room(".6:2")
.postgain(1.3)._pianoroll({labels:1})

// bassline fast guitar (8 bar loop)
let ssline =
note("<[D2!28 Cs2!4] B1*32 [E2!28 D2!4] A1*32>/2").s("gm_electric_bass_pick")
.decay(.3).release(.1).room(".2:2").postgain(1.4)._pianoroll({labels:1})

// full arrangement
stack(
chord,
bass1note,
dr,
// m1,
m2.off(4, x=>x.delay(1)),
ssline.postgain(.8)
)
