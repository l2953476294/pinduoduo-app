<template>
    <div class="User">
        <van-tabs v-model="active" animated swipeable>
            <van-tab title="登录">
                <van-cell-group>
                    <van-field
                        v-model="username"
                        required
                        clearable
                        label="用户名"
                        placeholder="请输入用户名"
                    />

                    <van-field
                            v-model="password"
                            type="password"
                            label="密码"
                            placeholder="请输入密码"
                            required
                    />

                    <van-button @click="handleLogin" type="primary" size="large">登录</van-button>
<!--                    <van-button @click="handleToken" type="primary" size="large">验证token</van-button>-->
                </van-cell-group>

            </van-tab>
            <van-tab title="注册">
                <van-cell-group>
                    <van-field
                        v-model="username"
                        required
                        clearable
                        label="用户名"
                        placeholder="请输入用户名"
                    />

                    <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />

                    <van-button @click="handleRegister" type="primary" size="large">注册</van-button>
                </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return {
                username: '',
                password: '',
                active: 0
            }
        },
        methods: {
            usernameValidate(){
                // 根据 实际 做数据格式验证
                const username = this.username
                if (username == '') return this.$toast('请输入用户名')
            },
            passwordValidate(){
                const password = this.password
                if (password == '') return this.$toast('请输入密码')
            },
             
            handleRegister(){
                this.usernameValidate()
                this.passwordValidate()
                const username = this.username
                const password = this.password
                this.Axios.post('http://pddapi.h5sm.com/index/pdduser/getpddregister',{
                    username,password
                }).then(res=>{
                    console.log(res)
                    if (res.data.status ==1){
                        this.username = ''
                        this.password = ''
                        this.active = 0
                    }
                })
            },
            handleLogin(){
                this.usernameValidate()
                this.passwordValidate()
                const username = this.username
                const password = this.password
                this.Axios.post('http://pddapi.h5sm.com/index/pdduser/getpddlogin',{
                    username,
                    password
                }).then(res=>{
                    if ( res.status == 200 && res.data.status ==1 ){
                        this.Cookies.set('token',res.data.token,{expires: 7});
                        this.$router.replace('/')
                    }
                    console.log(res)
                })
            },
            handleToken(){
                const token = this.Cookies.get('token');
                this.Axios.post('http://pddapi.h5sm.com/index/pdduser/getToken',{
                    token
                }).then(res=>{
                    console.log(res)
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .User {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        .van-tabs{
            height: 300px;
        }
    }
</style>