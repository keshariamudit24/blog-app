async function createUserOrAuthor(req, res) {
    // write the logic only once and can use it in both userAPI and authorAPI by exporting it
    const  userAuthor = req.body;
    console.log(userAuthor);
}

module.exports = createUserOrAuthor;