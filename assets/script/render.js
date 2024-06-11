
export const renderPhotosInGrid = (data) => {
    const imgGrids =  $imgGrid.children;
    const imgGridsArray = Array.from(imgGrids);
    let index = 0
    imgGridsArray.forEach(imgGridsItem => {
        const imgDataGroups = data.slice(index, index + Math.floor(data.length / 3))
        const $imgFragment = document.createDocumentFragment()
        imgDataGroups.forEach(image => {
           
            const $a = document.createElement("a")
            $a.href = `../../pages/prerew.html?image-id=${image.id}`
            $a.target = "_blank"
            $a.className = "image-item"
            $a.innerHTML =`
        
                <img src="${image.src.original}?auto=compress&cs=tinysrgb&w=400&lazy=load"  alt="${image.alt}"  />
                <div class="image-cover">
                    <div class="image-button-group">
                        <i class="bi bi-bookmarks"></i>
                        <i class="bi bi-heart"></i>
                    </div>
                    <div class="image-account">
                        <div class="account-group">
                            <div class="photographer-avatar"></div>
                            <p> ${image.photographer}</p>
                        </div>
                        <button class="dowload" ><i class="bi bi-download"></i><a href="${image.src.original}?cs=srgb&amp;dl=pexels-alikarimibn-6284716.jpg&amp;fm=jpg">Download</a></button>
                    </div>
                </div>
            `
            $imgFragment.appendChild($a)

        })

        index += Math.floor(data.length / 3)
        imgGridsItem.appendChild($imgFragment)
    })


}

export const renderPreviewImage = (data) => {
    $previewImg.src = data.src.original;
    $text.innerHTML = data.photographer;
}
