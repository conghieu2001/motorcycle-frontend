import { createWebHistory, createRouter } from "vue-router";
import homepage from "@/view/user/userHome.vue";
import loginPage from "@/view/loginout/login.vue";
import registerPage from "@/view/loginout/register.vue";
import forgetpass from "@/view/loginout/forgetpass.vue";
import homeAdmin from "@/view/admin/homeAdmin.vue";
import addProductForm from '@/components/admin/addProductForm.vue'
import adminProduct from '@/components/admin/adminProduct.vue'
import adminUser from '@/components/admin/adminUser.vue'
import adminReceipt from '@/components/admin/adminReceipt.vue'
import addReceipt from '@/components/admin/addReceipt.vue'
import addAcess from '@/components/admin/addAcessForm.vue'
import inforBussines from '@/components/admin/inforBussiness.vue'
import adminStaff from '@/components/admin/adminStaff.vue'
import adminAcess from '@/components/admin/adminAcess.vue'
import adminRole from '@/components/admin/adminRole.vue'
import feedBack from '@/components/admin/feedBack.vue'
// import userHeader from '@/components/user/userHeader.vue'
import userFooter from '@/components/user/userFooter.vue'
// import userHeaderLogin from '@/components/user/userHeaderLogin.vue'
import detailProduct from '@/view/user/detailProduct.vue'
import allproduct from '@/view/user/allProduct.vue'
import contactPage from '@/view/user/contactPage.vue'
import postsDetail from '@/view/user/postsDetail.vue'
import recruitmentPage from '@/view/user/recruitmentPage.vue'
import addOrder from '@/components/admin/addOrder.vue'
import adminOrder from '@/components/admin/adminOrder.vue'
import addPost from '@/components/admin/addPost.vue'
import adminPost from '@/components/admin/adminPost.vue'
import adminRepair from '@/components/admin/adminRepair.vue'
import addRepair from '@/components/admin/addRepair.vue'
import adminRecruitment from '@/components/admin/adminRecruitment.vue'
import statisticalDiagram from '@/components/admin/statisticalDiagram.vue'
import statisticalDiagram2 from '@/components/admin/statisticalDiagram2.vue'
import adminGuarantee from '@/components/admin/adminGuarantee.vue'
import searchGuarantee from '@/components/admin/searchGuarantee.vue'
import accessoryPage from '@/view/user/accessoryPage.vue'
import introduceMyStore from '@/view/user/introduceMyStore.vue'
import newsPage from '@/view/user/newsPage.vue'
import cartPage from '@/view/user/cartPage.vue'
import orderHistory from '@/view/user/orderHistory.vue'
import searchOrderhistory from '@/view/user/searchOrderhistory.vue'
import guaranteePage from '@/view/user/guaranteePage.vue'
const routes = [
  {
    path: "/",
    components: {
      default: homepage,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Home" },
  },
  { path: "/login",
    beforeEnter: (to, from, next) => {
        const getAdmin = JSON.parse(sessionStorage.getItem("user"));
        // console.log(!getAdmin)
        if (!getAdmin) {      
            return next();
        } else {
          alert('Bạn đã đăng nhập rồi!')
          // return next("/");
        }
      },
  components: {default: loginPage}, meta: { title: "Login" } },
  { path: "/register", 
  beforeEnter: (to, from, next) => {
    const getAdmin = JSON.parse(sessionStorage.getItem("user"));
    // console.log(!getAdmin)
    if (!getAdmin) {      
        return next();
    } else {
      alert('Bạn cần đăng xuất!')
      // return next("/");
    }
  },
  components: {default: registerPage, }, meta: { title: "Sign up" } },
  {
    path: "/forgetpass",
    beforeEnter: (to, from, next) => {
      const getAdmin = JSON.parse(sessionStorage.getItem("user"));
      // console.log(!getAdmin)
      if (!getAdmin) {      
          return next();
      } else {
        alert('Bạn cần đăng xuất!')
        // return next("/");
      }
    },
    components: {default: forgetpass},
    meta: { title: "Forget password" },
  },
  {
    path: "/allproduct",
    components: {
      default: allproduct,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Home" },
  },
  {
    path: "/allproduct/:id",
    components: {
      default: detailProduct,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Home" },
  },
  {
    path: "/contact",
    components: {
      default: contactPage,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Contact" },
  },
  {
    path: "/postdetail/:id",
    components: {
      default: postsDetail,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Posts Detail" },
  },
  {
    path: "/recruiment",
    components: {
      default: recruitmentPage,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Tuyển dụng" },
  },
  {
    path: "/accessory",
    components: {
      default: accessoryPage,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Phụ tùng & phụ kiện" },
  },
  {
    path: "/introducemystore",
    components: {
      default: introduceMyStore,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Giới thiệu" },
  },
  {
    path: "/news",
    components: {
      default: newsPage,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Tin tức" },
  },
  {
    path: "/cart",
    components: {
      default: cartPage,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Giỏ hàng" },
  },
  {
    path: "/orderhistory",
    components: {
      default: orderHistory,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Lịch sử đơn hàng" },
  },
  {
    path: "/searchorderhistory",
    components: {
      default: searchOrderhistory,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Tìm kiếm đơn hàng" },
  },
  {
    path: "/guarantee",
    components: {
      default: guaranteePage,
      // "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Bảo hành" },
  },
  
  // Admin
  {
    path: "/admin",
    name: "admin",
    beforeEnter: (to, from, next) => {
      const getAdmin = JSON.parse(sessionStorage.getItem("user"));
      // console.log(getAdmin)
      if (getAdmin) {
        if (getAdmin.user.isAdmin || getAdmin.user.isStaff) {
          return next();
        }
        else {
          return next("/");
        }
      } else {
        return next("/");
      }
    },
    components: {
      default: homeAdmin,
      
    },
    meta: { title: "Home admin" },
    props: true,
    children: [
      { path: "addproduct", component:  addProductForm, meta: { title: "Admin addproduct" },
        beforeEnter: (to, from, next) => {
          const getAccount = JSON.parse(sessionStorage.getItem("user"));
          // console.log(getAdmin)
          if (getAccount) {
            let check = false
            getAccount.user.roles.forEach(acc => {
              if(acc.roleId == '65503cfad5dbdd6d49288cdb') {
                check = true
              }
            })
            if (check) {
              return next();
            }
            else {
              alert('Bạn không có quyền truy cập trang này!')
              return next("/admin");
            }
          } else {
            return next("/");
          }
        },  
      },
      { path: "adminproduct", component: adminProduct, meta: { title: "Admin product" },
        beforeEnter: (to, from, next) => {
          const getAccount = JSON.parse(sessionStorage.getItem("user"));
          // console.log(getAdmin)
          if (getAccount) {
            let check = false
            getAccount.user.roles.forEach(acc => {
              if(acc.roleId == '65503cfad5dbdd6d49288cdb') {
                check = true
              }
            })
            if (check) {
              return next();
            }
            else {
              alert('Bạn không có quyền truy cập trang này!')
              return next("/admin");
            }
          } else {
            return next("/");
          }
        },  
      },
      { path: "adminuser", component: adminUser, meta: { title: "Admin user" },
        beforeEnter: (to, from, next) => {
          const getAccount = JSON.parse(sessionStorage.getItem("user"));
          // console.log(getAdmin)
          if (getAccount) {
            let check = false
            getAccount.user.roles.forEach(acc => {
              if(acc.roleId == '65503cecd5dbdd6d49288cd7') {
                check = true
              }
            })
            if (check) {
              return next();
            }
            else {
              alert('Bạn không có quyền truy cập trang này!')
              return next("/admin");
            }
          } else {
            return next("/");
          }
        },
      },
      { path: "adminreceipt", component: adminReceipt, meta: { title: "Admin receipt" },
        beforeEnter: (to, from, next) => {
          const getAccount = JSON.parse(sessionStorage.getItem("user"));
          // console.log(getAdmin)
          if (getAccount) {
            let check = false
            getAccount.user.roles.forEach(acc => {
              if(acc.roleId == '65503d14d5dbdd6d49288ce3') {
                check = true
              }
            })
            if (check) {
              return next();
            }
            else {
              alert('Bạn không có quyền truy cập trang này!')
              return next("/admin");
            }
          } else {
            return next("/");
          }
        },
      },
      { path: "addreceipt", component: addReceipt, meta: { title: "Admin addreceipt" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d14d5dbdd6d49288ce3') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "inforbussiness", component: inforBussines, meta: { title: "Admin infor bussiness" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503c9ed5dbdd6d49288cb8') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "addacesstory", component: addAcess, meta: { title: "Admin addacesstory" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d04d5dbdd6d49288cdf') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "adminstaff", component: adminStaff, meta: { title: "Admin staff" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503cecd5dbdd6d49288cd7') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "acesstory", component: adminAcess, meta: { title: "Admin acesstory" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d04d5dbdd6d49288cdf') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "adminrole", component: adminRole, meta: { title: "Admin role" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503cecd5dbdd6d49288cd7') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "addorder", component: addOrder, meta: { title: "Admin addorder" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d1ed5dbdd6d49288ce7') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "adminorder", component: adminOrder, meta: { title: "Admin order" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d1ed5dbdd6d49288ce7') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "addpost", component: addPost, meta: { title: "Admin addpost" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d55d5dbdd6d49288d05') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "adminpost", component: adminPost, meta: { title: "Admin post" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d55d5dbdd6d49288d05') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "adminorderrepair", component: adminRepair, meta: { title: "Admin order repair" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d1ed5dbdd6d49288ce7') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
    },
      { path: "addorderrepair", component: addRepair, meta: { title: "Admin addrepair" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d1ed5dbdd6d49288ce7') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "adminrecruitment", component: adminRecruitment, meta: { title: "Admin admin recruitment" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d55d5dbdd6d49288d05') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
    },
      { path: "statisticaldiagram", component: statisticalDiagram, meta: { title: "Admin diagram" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d46d5dbdd6d49288cfd') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "adminguarantee", component: adminGuarantee, meta: { title: "Admin guarantee" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d27d5dbdd6d49288ceb') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "searchguarantee", component: searchGuarantee, meta: { title: "Admin search guarantee" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d27d5dbdd6d49288ceb') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      { path: "feedback", component: feedBack, meta: { title: "Admin feedback" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d4ed5dbdd6d49288d01') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
      },
      {path: "statisticaldiagram2", component: statisticalDiagram2, meta: { title: "Admin diagram" },
      beforeEnter: (to, from, next) => {
        const getAccount = JSON.parse(sessionStorage.getItem("user"));
        // console.log(getAdmin)
        if (getAccount) {
          let check = false
          getAccount.user.roles.forEach(acc => {
            if(acc.roleId == '65503d46d5dbdd6d49288cfd') {
              check = true
            }
          })
          if (check) {
            return next();
          }
          else {
            alert('Bạn không có quyền truy cập trang này!')
            return next("/admin");
          }
        } else {
          return next("/");
        }
      },
    }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to) => {
  document.title = to.meta.title;
});
export default router;
