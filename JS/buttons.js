students_list=[
    {
        name:"K Aditya",
        roll:"1",
        present:0
    },
    {
        name:"Priya Dharshini",
        roll:"2",
        present:0
    },
    {
        name:"Vivek Singh",
        roll:"3",
        present:0
    },
    {
        name:"Tharun Kumar",
        roll:"4",
        present:0
    },
    {
        name:"Ram Charan",
        roll:"5",
        present:0
    },
    {
        name:"Arun Kumar",
        roll:"6",
        present:0
    },
    {
        name:"Jessica",
        roll:"7",
        present:0
    },
    {
        name:"Keerthi",
        roll:"8",
        present:0
    },
    {
        name:"Srija",
        roll:"9",
        present:0
    },
    {
        name:"Krishna Vardhan",
        roll:"10",
        present:0
    },
    {
        name:"Balakrishna Reddy",
        roll:"11",
        present:0
    },
    {
        name:"Devagiri Rohan",
        roll:"12",
        present:0
    },
    {
        name:"Manikanta",
        roll:"13",
        present:0
    },
    {
        name:"Shravika",
        roll:"14",
        present:0
    },
    {
        name:"Mary Rishitha",
        roll:"15",
        present:0
    },
    {
        name:"Ranjith Kumar",
        roll:"16",
        present:0
    },
    {
        name:"Anushik",
        roll:"17",
        present:0
    },
    {
        name:"Hemanthsai",
        roll:"18",
        present:0
    },
    {
        name:"J Sai Kiran",
        roll:"19",
        present:0
    },
    {
        name:"Dhana Shekhar",
        roll:"20",
        present:0
    },
    {
        name:"Snigdha",
        roll:"21",
        present:0
    },
    {
        name:"Sri Charan Mohan",
        roll:"22",
        present:0
    },
    {
        name:"J Sathvik",
        roll:"23",
        present:0
    },
    {
        name:"Sai Teja",
        roll:"24",
        present:0
    },
    {
        name:"Samhita Reddy",
        roll:"25",
        present:0
    },
    {
        name:"Naveen Datta",
        roll:"26",
        present:0
    },
    {
        name:"Chaitanya",
        roll:"27",
        present:0
    },
    {
        name:"Suchetha",
        roll:"28",
        present:0
    },
    {
        name:"Raghav",
        roll:"29",
        present:0
    },
    {
        name:"Supreeth",
        roll:"30",
        present:0
    },
    {
        name:"Yagnesh",
        roll:"31",
        present:0
    },
    {
        name:"Shoyab Ali",
        roll:"32",
        present:0
    },
    {
        name:"Ashritha Reddy",
        roll:"33",
        present:0
    },
    {
        name:"Naahida Anjum",
        roll:"34",
        present:0
    },
    {
        name:"Ismail",
        roll:"35",
        present:0
    },
    {
        name:"Meenu Lahari",
        roll:"36",
        present:0
    },
    {
        name:"Aditya Sai Vardhan",
        roll:"37",
        present:0
    },
    {
        name:"Sravan",
        roll:"38",
        present:0
    },
    {
        name:"Dinny Sriram Charan",
        roll:"39",
        present:0
    },
    {
        name:"Rakesh Rohan",
        roll:"40",
        present:0
    },
    {
        name:"Devi Priyanka",
        roll:"41",
        present:0
    },
    {
        name:"Sai Ram",
        roll:"42",
        present:0
    },
    {
        name:"Prabhath Kumar",
        roll:"43",
        present:0
    },
    {
        name:"Aryan Raj",
        roll:"44",
        present:0
    },
    {
        name:"Sayyad Riyaz",
        roll:"45",
        present:0
    },
    {
        name:"Sajid",
        roll:"46",
        present:0
    },
    {
        name:"Shri Akshita",
        roll:"47",
        present:0
    },
    {
        name:"Surya Kiran",
        roll:"48",
        present:0
    },
    {
        name:"Sunnam Satwik",
        roll:"49",
        present:0
    },
    {
        name:"Sindhuja",
        roll:"50",
        present:0
    },
    {
        name:"Kamal Kumar",
        roll:"51",
        present:0
    },
    {
        name:"Sri Datta Bharadwaj",
        roll:"52",
        present:0
    },
    {
        name:"Pawan Valluri",
        roll:"53",
        present:0
    },
    {
        name:"Gowthami",
        roll:"54",
        present:0
    },
    {
        name:"Yashwanth Reddy",
        roll:"55",
        present:0
    },
    {
        name:"Aakash",
        roll:"56",
        present:0
    },
    {
        name:"Sai Kiran Yadav",
        roll:"57",
        present:0
    },
    {
        name:"Sravya Sathwika",
        roll:"58",
        present:0
    },
    {
        name:"Yashvi Kommidi",
        roll:"59",
        present:0
    },
    {
        name:"Meghana",
        roll:"60",
        present:0
    },
    {
        name:"Nikhil",
        roll:"20_501",
        present:0
    },

]

for(var i=0;i<60;i=i+2){
    // console.log(students_list[i]["name"]+" "+students_list[i]["roll"])
    document.write(`
    <div class="row">
    <div class="col-6">
        <button class="btn btn-danger btn1">
            <div class="roll">
                <b>${students_list[i]["roll"]}</b>
            </div>
            <div class="name">
                ${students_list[i]["name"]}
            </div>
        </button>
    </div>
    <div class="col-6">
        <button class="btn btn-danger btn1">
            <div class="roll">
                <b>${students_list[i+1]["roll"]}</b>
            </div>
            <div class="name">
                ${students_list[i+1]["name"]}
            </div>
        </button>
    </div>
    
    
</div>
    `)
}

document.write(`
<div class="row">
<div class="col-6">
    <button class="btn btn-danger btn1">
        <div class="roll">
            <b>${students_list[60]["roll"]}</b>
        </div>
        <div class="name">
            ${students_list[60]["name"]}
        </div>
    </button>
</div>
</div>
`)
