export const wedding = {
  couple: { bride: "Aarohi", groom: "Veer", monogram: "A · V", hashtag: "#AarohiWedsVeer" },
  date: "2027-02-14T18:00:00+05:30",
  displayDate: "Sunday, 14 February 2027",
  location: "Jaipur, Rajasthan",
  heroMessage: "Together with our families, we invite you to join us as we celebrate love, laughter and the beginning of our forever.",
  people: [
    { role: "The Bride", name: "Aarohi Mehta", parents: "Daughter of Naina & Rajiv Mehta", intro: "A collector of old poetry, garden mornings and small joys.", message: "I found home in his calm." },
    { role: "The Groom", name: "Veer Rathore", parents: "Son of Kavita & Aditya Rathore", intro: "A traveller at heart, happiest around family and long dinners.", message: "She makes every day feel golden." },
  ],
  story: [
    ["18 Aug 2021", "How We Met", "A monsoon bookshop, one shared umbrella and a conversation that outlasted the rain."],
    ["04 Sep 2021", "Our First Date", "Chai beneath the old trees of Lodhi Garden, where hours quietly became an evening."],
    ["12 Dec 2025", "The Proposal", "At sunrise in Udaipur, with the lake still and both our families waiting nearby."],
    ["21 Feb 2026", "Families Meet", "Two tables became one, full of stories, laughter and recipes exchanged."],
    ["14 Feb 2027", "The Wedding Day", "The chapter we cannot wait to begin—with all of you beside us."],
  ],
  events: [
    ["Welcome Dinner", "Thursday", "11 Feb", "7:30 PM", "The Courtyard", "Samode Haveli, Gangapole, Jaipur", "Jewel-toned Indian", "An intimate evening of old Jaipur flavours and new beginnings."],
    ["Mehendi", "Friday", "12 Feb", "11:00 AM", "Bagh Lawns", "Rambagh Palace, Jaipur", "Botanical Greens", "Henna, folk songs and a sunlit garden brunch."],
    ["Haldi", "Friday", "12 Feb", "4:00 PM", "Lotus Terrace", "Rambagh Palace, Jaipur", "Sunshine Yellow", "A joyful ceremony washed in turmeric and marigolds."],
    ["Sangeet", "Saturday", "13 Feb", "8:00 PM", "Durbar Hall", "Rambagh Palace, Jaipur", "Evening Glamour", "Music, dancing and a little friendly family competition."],
    ["Wedding Ceremony", "Sunday", "14 Feb", "6:00 PM", "Mughal Gardens", "Rambagh Palace, Jaipur", "Royal Indian Traditional", "Sacred vows beneath the stars and the old palace trees."],
    ["Reception", "Sunday", "14 Feb", "9:00 PM", "The Grand Lawn", "Rambagh Palace, Jaipur", "Formal Elegance", "Dinner, dancing and a toast to forever."],
  ],
  weddingDay: [["5:00 PM", "Guest Arrival"], ["5:45 PM", "Baraat"], ["7:00 PM", "Varmala"], ["8:30 PM", "Dinner"], ["11:30 PM", "Pheras"], ["2:00 AM", "Vidaai"]],
  venue: { name: "Rambagh Palace", address: "Bhawani Singh Road, Jaipur, Rajasthan 302005", airport: "Jaipur International Airport · 20 min", rail: "Jaipur Junction · 15 min", parking: "Valet parking is available at the main palace entrance.", stay: "Rooms are reserved at Rambagh Palace and Jai Mahal Palace. Quote ‘Aarohi & Veer’ when booking.", contact: "Meera · +91 98765 43210" },
  dressCodes: [["Mehendi", "Botanical Greens", ["#6F7654", "#A8AE91", "#D7C4A8"]], ["Haldi", "Sunshine Yellow", ["#D5A93A", "#F0D98A", "#FAF6ED"]], ["Sangeet", "Evening Glamour", ["#3F4936", "#B9945A", "#363429"]], ["Wedding", "Royal Indian Traditional", ["#7A5C43", "#B9945A", "#FAF6ED"]], ["Reception", "Formal Elegance", ["#363429", "#6F7654", "#E9DDCA"]]],
  gallery: ["The day the city turned rose gold", "A quiet moment before the music", "Monsoon walks and borrowed umbrellas", "Under the old palace arches", "The beginning of always", "Home is wherever we are"],
  families: [["Bride’s Parents", "Naina & Rajiv Mehta"], ["Groom’s Parents", "Kavita & Aditya Rathore"], ["With Love From", "Our grandparents, siblings and families"]],
  wishes: [{ name: "Maya & Kabir", message: "May your life together be filled with the same warmth you bring to everyone around you." }, { name: "Nani", message: "A lifetime of laughter, patience and love to you both." }],
  contacts: [["Bride’s Family", "Rajiv Mehta", "+91 98765 43210"], ["Groom’s Family", "Aditya Rathore", "+91 98765 43211"], ["Wedding Planner", "Meera Kapoor", "+91 98765 43212"], ["Travel Assistance", "Rohan", "+91 98765 43213"]],
};

export type WeddingData = typeof wedding;
