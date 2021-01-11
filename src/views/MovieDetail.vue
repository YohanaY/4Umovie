<template>
  <div id="movieDetail">
    <div class="movie-detail">
      <!-- 背景图 -->
      <div class="poster-background">
        <img src="../assets/images/source/movie_2.jpg" alt="" />
      </div>
      <div class="detail">
        <!-- 海报帧 -->
        <div class="poster">
          <img src="../assets/images/source/movie_2.jpg" alt="" />
        </div>
        <!-- 电影详情 -->
        <div class="content">
          <p class="title line-ellipsis">我在这里等你</p>
          <p class="score line-ellipsis">评分:8.0</p>
          <p class="type line-ellipsis">主演：李一桐/李鸿其</p>
          <p class="type line-ellipsis">电影类型</p>
          <p class="type line-ellipsis">上映时间：2020-12-12</p>
        </div>
      </div>
    </div>
    <!-- 电影简介 -->
    <div class="introduction">
      <p class="line-clamp">
        剧情介绍：东京都内发生了三起杀人事件。
        警方从所有案发现场都遗留有的无法解释的数列推断出这是一系列带有预告信息的连环杀人案，并就此展开了侦查。
        警视厅搜查一课的精英刑警新田浩介（木村拓哉饰）破译出该数字预示着下一次作案的场所，他由此推测东京柯尔特西亚酒店将会成为第4起命案现场。
        然而凶手是谁却毫无线索。警方因此决定潜入东京柯尔特西亚进行调查，新田则要扮作前台人员追查凶手。
        受命指导他的是东京柯尔特西亚的优秀前台员工山岸尚美（长泽雅美饰）。
      </p>
      <div class="more">
        <img src="../assets/arrow_down.png" alt="" />
      </div>
      <p>演员列表：</p>
      <div class="swiper-container">
        <div class="swiper-wrapper actors-list">
          <div class="swiper-slide actors-item">
            <img
              class="performer-avatar"
              src="../assets/images/source/avatar_2.jpeg"
              alt=""
            />
            <p>木村拓哉</p>
          </div>
          <div class="swiper-slide actors-item">
            <img
              class="performer-avatar"
              src="../assets/images/source/avatar_2.jpeg"
              alt=""
            />
            <p>木村拓哉</p>
          </div>
          <div class="swiper-slide actors-item">
            <img
              class="performer-avatar"
              src="../assets/images/source/avatar_2.jpeg"
              alt=""
            />
            <p>木村拓哉</p>
          </div>
          <div class="swiper-slide actors-item">
            <img
              class="performer-avatar"
              src="../assets/images/source/avatar_2.jpeg"
              alt=""
            />
            <p>木村拓哉</p>
          </div>
          <div class="swiper-slide actors-item">
            <img
              class="performer-avatar"
              src="../assets/images/source/avatar_2.jpeg"
              alt=""
            />
            <p>木村拓哉</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* @import url("../../node_modules/swiper/swiper.min.css"); */
.movie-detail {
  overflow: hidden;
  z-index: 1;
  height: 188px;
  position: relative;
  cursor: pointer;
  background-color: #f9efed;
}
.poster-background {
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  position: absolute;
  -webkit-filter: blur(5px);
  filter: blur(2px);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.55;
}
.poster-background img {
  width: 100%;
  height: 100%;
}
.movie-detail .detail {
  display: flex;
  height: 150px;
  padding: 19px 30px 19px 15px;
}
.movie-detail .detail .poster img {
  width: 110px;
  height: 150px;
  box-sizing: border-box;
}
.movie-detail .detail .content {
  overflow-x: hidden;
  margin-left: 12.5px;
  line-height: 1;
  color: #000;
}
.movie-detail .detail .content .title {
  font-size: 20px;
  margin-top: 2px;
  font-weight: 700;
  overflow: hidden;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.movie-detail .detail .content .score {
  font-size: 18px;
  font-weight: 700;
  color: #fc0;
  margin-top: 17px;
}
.movie-detail .detail .content .type {
  margin-top: 17px;
  font-size: 12px;
  color: #000;
  opacity: 0.8;
}
.introduction {
  padding: 10px;
  font-size: 16px;
  background-color: #fff;
}
.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  line-height: 24px;
}
.introduction .more {
  text-align: center;
}
.introduction .more img {
  width: 10px;
  height: 10px;
}
.actors-list {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  white-space: nowrap;
}
.actors-list .actors-item {
  width: 80px;
  display: inline-block;
  margin-right: 10px;
}
.actors-list img {
  margin-bottom: 10px;
  display: block;
  width: 100%;
  height: 112px;
  border-radius: 2px;
}
</style>