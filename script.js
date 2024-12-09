let loadData = (euro) => {
    fetch(`https://raw.githubusercontent.com/nayeem19999/json/refs/heads/main/another.json`)
        .then(res => res.json())
        .then(data => showData(data))
}


const showData = (values) => {
    const mainDiv = document.getElementById('container')
    for (const value of values) {
        // console.log(value)
        const {name, id, img, details} = value;
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="card bg-base-100 shadow-xl">
  <figure>
    <img class="h-[200px] w-full"
      src=${img}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${name}</h2>
    <p>${details}</p>
    <div class="card-actions justify-end">
      <button id=${name} class="btn btn-primary" onclick='add(${JSON.stringify(value)})'>Click Koro</button>
    </div>
  </div>
</div>
        `
        mainDiv.appendChild(div)
    }
}


const add=(clicked)=>{
    const {name, id, img, details} = clicked
    const changedId= name.split(' ')[0]
    // const changedValue = name.split(' ')[0]
    const ol = document.getElementById('order')
    const li = document.createElement('li')
    // li.style.marginLeft= "40px"
    const custom = document.getElementById(changedId)
    console.log(custom)

    custom.disabled = true
    li.style.marginTop= "40px"
    li.innerHTML =`
    <div class="flex justify-between">
        <h1 class="font-bold text-xl">${name}</h1>
        <img class="h-[50px] w-[80px]" src=${img}/>
    </div>
    `
    
    const listCount = document.getElementById('order').childElementCount;
    if(listCount>4){
        alert('you can select only 5')
    }
    else{
        ol.appendChild(li)
    }
    // console.log(listCount.childElementCount)
}


document.getElementById('submit').addEventListener('click',function(){
    const input = document.getElementById('input')
    const price = document.getElementById('price')
    const inputValue = parseInt(input.value);
    const listCount = document.getElementById('order').childElementCount;
    const totalPrice = listCount * inputValue
    price.innerText = totalPrice

})


document.getElementById('submit1').addEventListener('click',function(){
    const price = document.getElementById('price').innerText
    const totalValue = document.getElementById('totalAmmount')
    const convertedPrice = parseInt(price)
    const input1 = document.getElementById('input1')
    const convertedInput1 = parseInt(input1.value)
    const input2 = document.getElementById('input2')
    const convertedInput2 = parseInt(input2.value)
    const totalCost = convertedPrice + convertedInput1 +convertedInput2;
    totalValue.innerText = totalCost
})
loadData()