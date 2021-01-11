<template>
  <div class="home">
    <!-- 顶部导航 -->
    <mt-header title="4UMovie">
      <div slot="right" class="shortcut">
        <router-link to="/register">注册</router-link>
        <router-link to="/login">登录</router-link>
      </div>
    </mt-header>
    <!-- 定位搜索 -->
    <div class="header-search">
      <div class="location">
        <p>上海</p>
        <img src="../assets/images/icon/drop_icon.png" alt="" />
      </div>
      <div class="search-frame">
        <!-- <img src="../assets/images/icon/search_icon.png" alt="" /> -->
        <!-- <input type="text" placeholder="请输入电影名称、电影院" /> -->
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
        </mt-search>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="index-banner">
      <mt-swipe :auto="0">
        <mt-swipe-item><img src="../assets/1.jpg" alt="" /></mt-swipe-item>
        <mt-swipe-item><img src="../assets/2.jpg" alt="" /></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 顶部选项卡 -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1"> 正在热映 </mt-tab-item>
      <mt-tab-item id="2"> 待映 </mt-tab-item>
    </mt-navbar>
    <!-- 面板 -->
    <div class="main">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <!-- 单一电影 -->
          <div class="list-main">
            <!-- 电影缩略图 -->
            <div class="main-img">
              <img src="../assets/images/source/movie_1.jpg" alt="" />
            </div>
            <!-- 电影内容 -->
            <div class="main-info">
              <p>八佰</p>
              <p>导演：管虎</p>
              <p>主演：黄志忠/欧豪/王千源</p>
              <p>类型：2D/国语/中国巨幕</p>
              <p>上映时间：2020-08-01</p>
              <div class="main-star">
                <p class="score">10分</p>
              </div>
            </div>
            <button class="buy-btn">购票</button>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <!-- 单一电影 -->
          <div class="list-main">
            <!-- 电影缩略图 -->
            <div class="main-img">
              <img src="../assets/images/source/movie_1.jpg" alt="" />
            </div>
            <!-- 电影内容 -->
            <div class="main-info">
              <p>八佰</p>
              <p>导演：管虎</p>
              <p>主演：黄志忠/欧豪/王千源</p>
              <p>类型：2D/国语/中国巨幕</p>
              <p>上映时间：2020-08-01</p>
              <div class="main-star">
                <p class="score">10分</p>
              </div>
            </div>
            <button class="buy-btn">购票</button>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "1",
    };
  },
};
</script>
<style scoped>
.shortcut a {
  display: inline-block;
  margin-left: 5px;
  color: #fff;
}
.mint-header {
  background-color: #bd6f51;
}
/* 顶部定位搜索区域 */
.header-search {
  width: 100%;
  height: 40px;
  display: flex;
  margin: auto;
  /* justify-content: space-between; */
  align-items: center;
  background-color: #bd6f51;
}
/* 自动定位 */
.header-search .location {
  width: 20%;
  display: flex;
  color: #000;
  align-items: center;
  margin-left: 10px;
}
/* 定位城市字体间距 */
.header-search .location p {
  letter-spacing: 2px;
}
.header-search .location img {
  width: 10px;
  height: 5px;
  margin-left: 5px;
}
/* 搜索 */
.header-search .search-frame {
  width: 80%;
  height: 30px;
  display: flex;
  align-items: center;
  /* border-radius: 20px;
  background-color: #f9efed; */
  margin-right: 10px;
}
.mint-search {
  height: 30px;
  width: 100%;
}
.search-frame >>> .mint-searchbar {
  height: 30px;
  width: 100%;
  padding: 0 0;
  background-color: transparent;
}
.search-frame >>> .mint-searchbar-inner {
  border-radius: 20px;
  height: 30px;
  padding: 0 0;
}
.search-frame >>> .mint-searchbar-inner .mintui-search {
  font-size: 18px;
  margin: 0 10px;
}
.search-frame >>> .mint-searchbar-core {
  margin-left: 5px;
}
.search-frame >>> .mint-searchbar-cancel {
  color: #fff;
}
/* 轮播图 */
.index-banner {
  width: 100%;
  height: 150px;
}
.index-banner img {
  width: 100%;
  height: 100%;
}
/* 顶部导航栏 */
.mint-navbar {
  background-color: #f9efed;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: none;
  color: #bd6f51;
  margin-bottom: 0;
}
.mint-navbar >>> .mint-tab-item-label {
  color: inherit;
  font-size: 15px;
  line-height: 1;
}
/* 电影面板 */
.list-main {
  width: 100%;
  height: 125px;
  display: flex;
  background-color: #f9efed;
  /* position: relative; */
  margin: 5px auto;
}
.main-img {
  width: 90px;
  height: 100%;
  margin: 0 10px 0 5px;
}
.main-img img {
  width: 100%;
  height: 100%;
}
.main-info p {
  font-size: 12px;
}
.main-star {
  position: absolute;
  right: 10px;
  top: 10px;
  height: 20px;
  /* margin: auto; */
}
.score {
  width: 50px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  /* box-sizing: border-box; */
  background-color: #bd6f51;
  color: #fff;
  border-radius: 2px;
  white-space: nowrap;
  font-size: 12px;
  /* cursor: pointer; */
}
.buy-btn {
  width: 50px;
  height: 25px;
  background-color: #38c566;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 2px;
  position: absolute;
  bottom: 5px;
  right: 10px;
}
</style>