module.exports = {
  register: function (req, res) {
    const { email, password, first, last, address } = req.body;
    const db = req.app.get("db");
    console.log(req.body);
    bcrypt
      .hash(password, 12)
      .then((hash) => {
        db.register(email, first, last, address, hash)
          .then((user) => {
            const currentUser = user[0];
            console.log(user);
            req.session.user = {
              user_id: currentUser.user_id,
            };
            res.status(200).json(req.session.currentUser);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const login = await req.app.get("db").login(username);
    const user = login[0];
    if (login.length === 0) {
      return res
        .status(401)
        .send("This username doesn't exist or password is incorrect");
    }
    const clear = await bcrypt.compare(password, user.password);
    if (!clear) {
      return res.status(403).json("Incorrect password");
    }
    req.session.user = {
      user_id: currentUser.user_id,
    };
    return res.status(200).json(req.session.currentUser);
  },
  getPosts: function (req, res) {
    const { userpost, title } = req.query;
    const db = req.app.get("db");
    const results =[]
    if (userpost && title) {
        db.getPostsTitle([userpost, title])
        .then(data=> { console.log(data)
            results.push(data)})
    }
    else if(userpost === false){
        db.getPosts([userpost])
        .then(data=> results.push(data))
    }
    else{
        db.getPost([userpost])
        .then(data=> results.push(data))
    }
    return res.status(200).json(results)
    }
};
