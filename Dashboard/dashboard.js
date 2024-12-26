document.getElementById('search-icon').addEventListener('click',function(){
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('active');
    searchBar.focus('active');
});