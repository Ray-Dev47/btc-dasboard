const chart = document.getElementById('chart').getContext('2d');

// new chart instance 
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb' , 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48229, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'BTC',
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor: 'blue',
                borderWidth: 2
            }
        ],
    },
    options: {
        responsive: true
    }
})

// show or hide toggle buttons
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const sidebar = document.querySelector('aside')

menuBtn.addEventListener('click', function(){
    sidebar.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    sidebar.style.display = 'none'
})


// light/ dark mode
const themeBtn = document.querySelector('.theme-btn')

themeBtn.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');


    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})
