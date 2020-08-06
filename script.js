document.getElementById('search-input').addEventListener('keyup',searchCharacter);
const input = document.getElementById('search-input').value;

// Search Function
async function searchCharacter(){
    const input = document.getElementById('search-input').value.split(' ');
    let query = '';
    input.forEach(word => {
        query +=`${word}+`
    })
    let name = query.slice(0,-1);
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}&limit=10&offset=10`,{
        "method":"GET"
    })

    const ul = document.querySelector('.list-group')
    const resData = await response.json();
    
    resData.forEach((data)=>{
        if(data.name === null){
            ul.innerHTML = `Name Not Found In DataBase`
        }else{
            ul.innerHTML = `
                <div id ="card">
                    <li><img src = "${data.img}" id = "personimg"></img></li>
                    <div class ="name">${data.name}</div> 
                    <div class = "nickname">NickName: ${data.nickname}</div>
                    <div class = "nickname portrayed">Portrayed-By: ${data.portrayed}</div> 

                </div>
            `
        }
    })
}