

export default (to, from, next) => {
  // Kiểm tra xem người dùng có được phép truy cập route hay không
  if (!to.meta.auth) {
    // Người dùng không có quyền truy cập
    next({
      path: '/',
      query: {
        error: 'Bạn không có quyền truy cập',
      },
    });
    return;
  }

  // Người dùng có quyền truy cập
  next();
};