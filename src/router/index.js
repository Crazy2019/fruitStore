import Vue from 'vue'
import Router from 'vue-router'
import index  from '@/view/index.vue'
import spellGroup  from '@/view/spellGroup.vue'
import myOrder  from '@/view/myOrder.vue'
import userCenter  from '@/view/userCenter.vue'
import cart  from '@/view/cart.vue'
import pay  from '@/view/pay.vue'
import login  from '@/view/login.vue'
import shopDetail  from '@/view/shopDetail.vue'
import Coupons  from '@/view/coupons.vue'
import payCoupon  from '@/view/payCoupon.vue'
import goCoupons  from '@/view/goCoupons.vue'
import register  from '@/view/register.vue'
import spellPay  from '@/view/spellPay.vue'
import groupDetail  from '@/view/groupDetail.vue'
import collection  from '@/view/collection.vue'



Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index',component: index},//主页
    {path: '/spellGroup',name: 'spellGroup',meta: {auth: true },component: spellGroup},//我的拼团为true时必需登录
    {path: '/my/Order',name: 'myOrder',meta: {auth: true },component: myOrder},//我的订单
    {path: '/userCenter',name: 'userCenter',meta: {auth: true},component: userCenter},//个人中心
    {path: '/cart',name: 'cart',meta: {auth: true },component: cart},//购物车
    {path: '/shopDetail/:id',name: 'shopDetail',component: shopDetail},//商品详情
    {path: '/login',name: 'login',component: login},//登录
    {path: '/register',name: 'register',component: register},//注册
    {path: '/pay', name: 'pay',meta: {auth: true },component: pay},//支付
    {path: '/coupons', name: 'Coupons',component: Coupons},//已领取优惠券
    {path: '/payCoupon', name: 'payCoupon',component: payCoupon},//支付是可用优惠券
    {path: '/goCoupons', name: 'goCoupons',component: goCoupons},//领取优惠券
    {path: '/spellPay', name: 'spellPay',component: spellPay},//拼团支付
    {path: '/groupDetail', name: 'groupDetail',component: groupDetail},//拼团详情
    {path: '/collection', name: 'collection',component: collection},//我的收藏
  ]
})
