document.querySelector('button').addEventListener('click', displayDateTime);
function displayDateTime(){
    const now = new Date();
    
    
    const day = now.getDate();
    const month = now.getMonth() + 1; 
    const year = now.getFullYear();


    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    const currentDate = `${day}/${month}/${year}`;
    const currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    document.getElementById('day').textContent = `Current Date: ${currentDate}`;
    document.getElementById('time').textContent = `Current Time: ${currentTime}`;
}


