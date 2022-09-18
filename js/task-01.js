const categoriesEl = document.querySelectorAll('.item');
console.log(`Numbers of categories : ${categoriesEl.length}`)

categoriesEl.forEach((element) => {
    const titleEl = element.querySelector('h2').textContent;
    const onTitleEl = element.querySelectorAll('li');
    const onTitleElQty = onTitleEl.length

    console.log(`Category : ${titleEl}`);
    console.log(`Elements : ${onTitleElQty}`);
})
