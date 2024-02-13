// pages/api/views.js
export default (req, res) => {
    if (req.method === 'POST') {
      let views = 1;
      if (localStorage.getItem('views')) {
        views = parseInt(localStorage.getItem('views')) + 1;
      }
      localStorage.setItem('views', views);
      res.status(200).json({ views });
    }
  }  