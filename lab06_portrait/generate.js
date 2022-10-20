const container = d3.select("#svg")

const baby = []
const names = ["Tiffany", "Phoenix", "Declan", "Ayana", "Parker", "Grayson", "Sunny", "Jacquelin", "Tavon", "Devonta", "Stacie", "Julie", "Dorothy", "Arjun", "Isai", "Maximiliano", "Marques", "Jayleen", "Varun", "Jelani", "Jaylin", "Alonso", "Jaeden", "Gunner", "Zechariah", "Chelsea", "Warren", "Jonah", "Devan", "Blaz"]
const attrs = ["clean", "behaved", "playful", "noisy", "poopy", "cute"]

for (let i = 0; i < 20; i++) {

    let num = parseInt(1+Math.random()*6)
    attr = getMultipleRandom(attrs, num)

    baby.push({
        "Name": names[i],
        "Attr": attr
    })
}

console.log(baby)

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }



