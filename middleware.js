
module.exports = function(req, res, next) {
    // Logic middleware tùy chỉnh
    res.header("Content-Range", "posts 0-20/20")
    console.log('Middleware tùy chỉnh được thực thi');
    next(); // Đừng quên gọi next() để chuyển điều khiển cho middleware tiếp theo trong chuỗi
};

