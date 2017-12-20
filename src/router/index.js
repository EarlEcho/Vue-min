const HelloWorld = () => import('@/components/HelloWorld')


export default new VueRouter({
    routes: [
        {
            path: '/',
            component: HelloWorld
        }
    ]
})
