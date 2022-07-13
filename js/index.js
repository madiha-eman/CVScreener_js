console.log('Cv Screener 768')

const data = [
    {
        name : 'Ahmed Raza',
        age :  '18',
        city : 'Karachi',
        language : 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/60.jpg'
    },

    {
        name : 'Shahzad',
        age :  '19',
        city : 'Karachi',
        language : 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/66.jpg'
    },

    {
        name : 'Fariya Rizwan',
        age :  '22',
        city : 'Hydrabad',
        language : 'Java',
        framework: 'Spark',
        image: 'https://randomuser.me/api/portraits/women/7.jpg'
    },
    
    {
        name : 'Zahid Ali',
        age :  '26',
        city : 'Lahore',
        language : 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/4.jpg'
    },

    {
        name : 'Romaisa Kareem',
        age :  '23',
        city : 'Karachi',
        language : 'JavaScript',
        framework: 'Reactjs',
        image: 'https://randomuser.me/api/portraits/women/67.jpg'
    }

]

// Cv Iterator
function cvIterator(profiles){
       let nextIndex = 0;
       return {
        next: function(){
            return nextIndex < profiles.length ? 
            {value: profiles[nextIndex++], done : false} : {done:true}
        }
        
       };
      
} 

const candidates = cvIterator(data)



nextCv();
// next function 
let nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', nextCv);

function nextCv(){
  let  currentCandidate = candidates.next().value
    let image = document.getElementById('image');
    let profiles = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}' >`;
    profiles.innerHTML = `<ul class="list-group">
                        <li class="list-group-item">Name: ${currentCandidate.name}</li>
                        <li class="list-group-item">${currentCandidate.age} years old</li>
                        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                        <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                        <li class="list-group-item">Uses ${currentCandidate.framework}</li>
                    </ul>`
    }
    else{
        alert('End of Application');
        window.location.reload()
 }

}