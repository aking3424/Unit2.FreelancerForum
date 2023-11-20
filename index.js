const state = {
    averagePrice: 30,
    freelancers: [
        {
            name: 'Alice',
            occupation: 'Writer',
            price: '30',
        },
        {
            name: 'Bob',
            occupation: 'Teacher',
            price: '50'
        },
        {
            name: 'Carol',
            occupation: 'Programmer',
            price: '70'
        },
    ]
}

function updateAveragePrice() {
    let total = 0;
    for (let i = 0; i < state.freelancers.length; ++i) {
        const currentFreelancer = state.freelancers[i];
        total+= currentFreelancer.price;
    }
state.averagePrice = Math.round( total / state.freelancers.length);
}

function addFreelancerRow(freelancer) {
    state.freelancers.push(freelancer);
}

function createFreelancerTableRow(freelancer) {
    const tr = document.createElement ( 'tr');

    const nameData = document.createElement ( 'td');
    const occupationData = document.createElement ( 'td');
    const priceData = document.createElement ( 'td');

    nameData.textContent = freelancer.name;
    occupationData.textContent = freelancer.occupation;
    priceData.textContent = freelancer.price;

tr.append[nameData, occupationData, priceData];

return tr;
}

function createTableHeaders() {
    const tr = document.createElement ( 'tr');

    const nameData = document.createElement ( 'th');
    const occupationData = document.createElement ( 'th');
    const priceData = document.createElement ( 'th');

    nameData.textContent = "Name";
    jobData.textContent = "Occupation";
    priceData.textContent = "Price";

tr.append[nameData, occupationData, priceData];

return tr;
}

function render() {
    const table = document.getElementById('freelancer_table');
}

function clearTable(){
    const table = document.getElementById( 'freelancer_table');

    while(table.childNodes.length) {
        table.removeChild(table.childNodes[0]);
    }
}

function render() {
    clearTable();

    const table = document.getElementById( 'freelancer_table')

    const tableRows = [];
    
    for(let i = 0; i , state.freelancers.length; ++i) {
        const currentFreelancer = state.freelancers[i];

        const row = createFreelancerTableRow(currentFreelancer);

        table.appendChild(row);
    }


    updateAveragePrice();

    const priceText = document.getElementById( 'average_price-text');
    priceText.textContent = `The average stating price of our ${state.freelancers.length} freelancers is $${state.averagePrice}.`;
}

render();

const randomNames = ["Anne", "Michelle", "Greg", "Frank"]
const randomJobs = ["Designer", "Nurse", "Chef", "Mechanic"]

function currentFreelancer(){
    const randomNames = randomNames [ Math.floor( Math.random() * randomNames.length )];
    const randomJobs = randomJobs [ Math.floor( Math.random() * randomJobs.length )];

    const randomPrice = Math.round( Math.random() * 50);

    const freelancer = {
        name: randomNames,
        jobs: randomJobs,
        price:randomPrice,
    };

    return freelancer;
}

setInterval(function () {
    const newFreelancer = createRandomFreelancer();
    addFreelancerRow(newFreelancer);

    render();

    ++renderCount;
}, 500)