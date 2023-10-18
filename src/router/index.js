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
import userHeader from '@/components/user/userHeader.vue'
import userFooter from '@/components/user/userFooter.vue'
import userHeaderLogin from '@/components/user/userHeaderLogin.vue'
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
import adminGuarantee from '@/components/admin/adminGuarantee.vue'
import searchGuarantee from '@/components/admin/searchGuarantee.vue'
const routes = [
  {
    path: "/",
    components: {
      default: homepage,
      "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Home" },
  },
  { path: "/login",
    beforeEnter: (to, from, next) => {
        const getAdmin = JSON.parse(sessionStorage.getItem("user"));
        console.log(!getAdmin)
        if (!getAdmin) {      
            return next();
        } else {
          alert('Bạn đã đăng nhập rồi!')
          // return next("/");
        }
      },
  components: {default: loginPage, "page-header": userHeaderLogin}, meta: { title: "Login" } },
  { path: "/register", components: {default: registerPage, "page-header": userHeaderLogin}, meta: { title: "Sign up" } },
  {
    path: "/forgetpass",
    components: {default: forgetpass, "page-header": userHeaderLogin},
    meta: { title: "Forget password" },
  },
  {
    path: "/allproduct",
    components: {
      default: allproduct,
      "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Home" },
  },
  {
    path: "/allproduct/:id",
    components: {
      default: detailProduct,
      "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Home" },
  },
  {
    path: "/contact",
    components: {
      default: contactPage,
      "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Contact" },
  },
  {
    path: "/postdetail",
    components: {
      default: postsDetail,
      "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Posts Detail" },
  },
  {
    path: "/recruiment",
    components: {
      default: recruitmentPage,
      "page-header": userHeader,
      "page-footer": userFooter
    },
    meta: { title: "Tuyển dụng" },
  },
  
  // Admin
  {
    path: "/admin",
    name: "admin",
    // beforeEnter: (to, from, next) => {
    //   const getAdmin = JSON.parse(sessionStorage.getItem("user"));
    //   // console.log(getAdmin)
    //   if (getAdmin) {
    //     if (getAdmin.user.isAdmin) {
    //       return next();
    //     }
    //     else {
    //       return next("/");
    //     }
    //   } else {
    //     return next("/");
    //   }
    // },
    components: {
      default: homeAdmin,
      
    },
    meta: { title: "Home admin" },
    props: true,
    children: [
      { path: "addproduct", component:  addProductForm, meta: { title: "Admin addproduct" } },
      { path: "adminproduct", component: adminProduct, meta: { title: "Admin product", roleId: '650d62350497b582f3663b82' },
      // beforeEnter: (to, from, next) => {
      //   const getAccount = JSON.parse(sessionStorage.getItem("user"));
      //   // console.log(getAdmin)
      //   if (getAccount) {
      //     let check = false
      //     getAccount.user.roles.forEach(acc => {
      //       if(acc.roleId == '650d62350497b582f3663b82') {
      //         check = true
      //       }
      //     })
      //     if (check) {
      //       return next();
      //     }
      //     else {
      //       alert('Bạn không có quyền truy cập trang này!')
      //       return next("/admin");
      //     }
      //   } else {
      //     return next("/");
      //   }
      // },  
    },
      { path: "adminuser", component: adminUser, meta: { title: "Admin user" } },
      { path: "adminreceipt", component: adminReceipt, meta: { title: "Admin receipt" } },
      { path: "addreceipt", component: addReceipt, meta: { title: "Admin addreceipt" } },
      { path: "inforbussiness", component: inforBussines, meta: { title: "Admin infor bussiness" } },
      { path: "addacesstory", component: addAcess, meta: { title: "Admin addacesstory" } },
      { path: "adminstaff", component: adminStaff, meta: { title: "Admin staff" } },
      { path: "acesstory", component: adminAcess, meta: { title: "Admin acesstory" } },
      { path: "adminrole", component: adminRole, meta: { title: "Admin role" } },
      { path: "addorder", component: addOrder, meta: { title: "Admin addorder" } },
      { path: "adminorder", component: adminOrder, meta: { title: "Admin order" } },
      { path: "addpost", component: addPost, meta: { title: "Admin addpost" } },
      { path: "adminpost", component: adminPost, meta: { title: "Admin post" } },
      { path: "adminorderrepair", component: adminRepair, meta: { title: "Admin order repair" } },
      { path: "addorderrepair", component: addRepair, meta: { title: "Admin addrepair" } },
      { path: "adminrecruitment", component: adminRecruitment, meta: { title: "Admin admin recruitment" } },
      { path: "statisticaldiagram", component: statisticalDiagram, meta: { title: "Admin diagram" } },
      { path: "adminguarantee", component: adminGuarantee, meta: { title: "Admin guarantee" } },
      { path: "searchguarantee", component: searchGuarantee, meta: { title: "Admin search guarantee" } },
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
