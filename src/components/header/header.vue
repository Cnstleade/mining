<template>
    <div class="container-fluid position-relative">
        <div class="container">
            <div class="row">
                <div class="col-xl-2 col-lg-2 c0l-md-3 col-sm-3 col-3">
                    <div>
                        <a href="#"><img src="../../assets/logo.png" alt="" width="50"></a>
                        <span class="d-none d-sm-inline-block">挖矿</span>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-7 d-none d-lg-block">
                    <div class="main-menu">
                        <nav>
                            <ul class=" d-flex justify-content-around ">
                                <li><a href="#">首页</a></li>
                                <li><a href="#">算力租赁</a></li>
                                <li><a href="#">矿机租赁</a></li>
                                <li><a href="#">矿机合租</a></li>
                                <li><a href="#">矿机托管</a></li>
                                <li><a href="#">矿机商城</a></li>
                                <li><a href="#">计算工具</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-9 col-sm-9 col-9">
                    <div class="search-login-cart">
                        <div class="same-style d-lg-none d-xl-none">
                            <span class="iconfont icon-menu" @click='clicks'></span>
                        </div>  
                        <div class="header-cart same-style">
                            <span class="iconfont icon-cart"></span>
                        </div>    
                        <div class="header-login same-style">
                            <span class="iconfont icon-person2"></span>
                        </div>                                                                  
                        <div class="header-search same-style">
                            <span class="iconfont icon-search" ></span>
                        </div>
                    </div>
                </div>
                <transition name='fa'>
                    <div class="d-md-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none" v-if="cssanimate">
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-info"><a href="#">首页</a></li>
                            <li class="list-group-item list-group-item-info"><a href="#">算力租赁</a></li>
                            <li class="list-group-item list-group-item-info"><a href="#">矿机租赁</a></li>
                            <li class="list-group-item list-group-item-info"><a href="#">矿机合租</a></li>
                            <li class="list-group-item list-group-item-info"><a href="#">矿机托管</a></li>
                            <li class="list-group-item list-group-item-info"><a href="#">矿机商城</a></li>
                            <li class="list-group-item list-group-item-info"><a href="#">计算工具</a></li>
                        </ul>
                    </div>                
                </transition>
            </div>
        </div>
          <!-- <vue-particles  color="#7b7d7d" :particleOpacity="0.7" :particlesNumber="60" shapeType="circle" :particleSize="4" linesColor="#203c77" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="100" :moveSpeed="2" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="lizi">      </vue-particles> -->
    </div>
</template>

<script>
require("../../assets/css/iconfont.css");
export default {
  data() {
    return {
      cssanimate: false,
    };
  },
  methods: {
    clicks() {
      console.log(this.cssanimate);
      this.cssanimate = !this.cssanimate;
      console.log(this.cssanimate);
    },
  }
};
</script>

<style lang="less" scoped>
.search-login-cart {
  .same-style {
    display: inline-block;
    margin-left: 16px;
    float: right;
    span {
      font-size: 36px;
    }
  }
}
@keyframes bounce-in {
  0% {
    // transform: translateY(0);
    height: 0;
  }
  50% {
    height: 50%;
    // transform: translateY(50%);
  }
  100% {
    // transform: translateY(100%);
    height: 100%;
  }
}
.fa-enter-active {
  animation: bounce-in 2s;
}
.fa-leave-active {
  animation: bounce-in 2s reverse;
}
</style>

