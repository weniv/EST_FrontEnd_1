module.exports = function myLoader(item) {
    return item.replace('console.log(', 'alert(');
}